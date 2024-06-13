import {
  BankAccount,
  Card,
  Currency,
  PaymentService,
  PrismaClient,
  TransactionStatus,
  User,
} from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const [currency, transactionStatuses, paymentServices] = await Promise.all([
    createCurrency(),
    createTransactionStatuses(),
    createPaymentServices(),
  ]);
  await createUserData(currency, paymentServices, transactionStatuses);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

async function createCurrency() {
  return Promise.all([
    prisma.currency.upsert({
      where: { code: 'USD' },
      create: { code: 'USD', name: 'United States dollar' },
      update: { code: 'USD', name: 'United States dollar' },
    }),
    prisma.currency.upsert({
      where: { code: 'EUR' },
      create: { code: 'EUR', name: 'Euro' },
      update: { code: 'EUR', name: 'Euro' },
    }),
  ]);
}

async function createTransactionStatuses() {
  return Promise.all([
    prisma.transactionStatus.upsert({
      where: { name: 'completed' },
      create: { name: 'completed' },
      update: { name: 'completed' },
    }),
    prisma.transactionStatus.upsert({
      where: { name: 'pending' },
      create: { name: 'pending' },
      update: { name: 'pending' },
    }),
  ]);
}

async function createPaymentServices() {
  return await Promise.all([
    prisma.paymentService.upsert({
      where: { name: 'Mastercard' },
      create: { name: 'Mastercard' },
      update: { name: 'Mastercard' },
    }),
    prisma.paymentService.upsert({
      where: { name: 'Visa' },
      create: { name: 'Visa' },
      update: { name: 'Visa' },
    }),
  ]);
}

async function createUserData(
  currency: Currency[],
  paymentServices: PaymentService[],
  transactionStatuses: TransactionStatus[]
) {
  const user = await prisma.user.upsert({
    where: { email: 'jane-doe@gmail.com' },
    create: { name: 'Jane Doe', email: 'jane-doe@gmail.com', password: '', version: 1 },
    update: { name: 'Jane Doe', email: 'jane-doe@gmail.com', password: '', version: 1 },
  });

  const account = await prisma.bankAccount.create({
    data: {
      userId: user.id,
      currencyId: currency[0].id,
    },
  });

  const primaryCard = await prisma.card.create({
    data: {
      bankAccountId: account.id,
      cardNumber: '3778570012541234',
      cardHolder: 'Jane Doe',
      cvv: '123',
      expirationDate: new Date(Date.UTC(2022, 11, 31)),
      paymentServiceId: paymentServices[0].id,
    },
  });

  await prisma.card.createMany({
    data: [
      {
        bankAccountId: account.id,
        cardNumber: '3778570012541235',
        cardHolder: 'Jane Doe',
        cvv: '123',
        expirationDate: new Date(Date.UTC(2022, 11, 31)),
        paymentServiceId: paymentServices[0].id,
      },
      {
        bankAccountId: account.id,
        cardNumber: '3778570012541236',
        cardHolder: 'Jane Doe',
        cvv: '123',
        expirationDate: new Date(Date.UTC(2022, 11, 31)),
        paymentServiceId: paymentServices[0].id,
      },
    ],
  });

  await createTransactions(user, account, primaryCard, currency[0], transactionStatuses);
}

async function createTransactions(
  user: User,
  account: BankAccount,
  card: Card,
  currency: Currency,
  transactionStatuses: TransactionStatus[]
) {
  await prisma.transaction.createMany({
    data: [
      {
        description: 'Spotify Subscription',
        category: 'shopping',
        userId: user.id,
        bankAccountId: account.id,
        cardId: card.id,
        amount: 150,
        currencyId: currency.id,
        isIncome: false,
        statusId: transactionStatuses[0].id,
        transactionDate: new Date(Date.UTC(2024, 5, 18, 17, 37, 28)),
      },
      {
        description: 'Mobile Service',
        category: 'service',
        userId: user.id,
        bankAccountId: account.id,
        cardId: card.id,
        amount: 340,
        currencyId: currency.id,
        isIncome: false,
        statusId: transactionStatuses[0].id,
        transactionDate: new Date(Date.UTC(2024, 5, 18, 14, 22, 12)),
      },
      {
        description: 'Emily Wilson',
        category: 'transfer',
        userId: user.id,
        bankAccountId: account.id,
        cardId: card.id,
        amount: 780,
        currencyId: currency.id,
        isIncome: true,
        statusId: transactionStatuses[0].id,
        transactionDate: new Date(Date.UTC(2024, 5, 12, 10, 2, 48)),
      },
      {
        description: 'Freepik Sales',
        category: 'transfer',
        userId: user.id,
        bankAccountId: account.id,
        cardId: card.id,
        amount: 750,
        currencyId: currency.id,
        isIncome: true,
        statusId: transactionStatuses[0].id,
        transactionDate: new Date(Date.UTC(2024, 5, 8, 19, 28, 44)),
      },
      {
        description: 'Tom Wilson',
        category: 'transfer',
        userId: user.id,
        bankAccountId: account.id,
        cardId: card.id,
        amount: 1050,
        currencyId: currency.id,
        isIncome: false,
        statusId: transactionStatuses[0].id,
        transactionDate: new Date(Date.UTC(2024, 5, 2, 9, 5, 12)),
      },
      {
        description: 'Jack Jackson',
        category: 'transfer',
        userId: user.id,
        bankAccountId: account.id,
        cardId: card.id,
        amount: 20,
        currencyId: currency.id,
        isIncome: false,
        statusId: transactionStatuses[0].id,
        transactionDate: new Date(Date.UTC(2024, 5, 2, 9, 4, 8)),
      },
    ],
  });
}

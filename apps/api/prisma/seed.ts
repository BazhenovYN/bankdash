import { createUser, getUserByEmail } from '@api/data';
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
    createCountries(),
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

async function createCountries() {
  return Promise.all([
    prisma.country.upsert({
      where: { code: 'US' },
      create: { code: 'US', name: 'United States' },
      update: { code: 'US', name: 'United States' },
    }),
    prisma.country.upsert({
      where: { code: 'GB' },
      create: { code: 'GB', name: 'United Kingdom' },
      update: { code: 'GB', name: 'United Kingdom' },
    }),
    prisma.country.upsert({
      where: { code: 'DE' },
      create: { code: 'DE', name: 'Germany' },
      update: { code: 'DE', name: 'Germany' },
    }),
  ]);
}

async function createUserData(
  currency: Currency[],
  paymentServices: PaymentService[],
  transactionStatuses: TransactionStatus[]
) {
  const email = 'jane-doe@gmail.com';
  const user = await getUserByEmail(prisma, email);

  if (user) return;

  const newUser = await createUser(prisma, {
    name: 'Jane Doe',
    password: '123456',
    email,
  });

  const account = await prisma.bankAccount.create({
    data: {
      userId: newUser.id,
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

  await createUserProfile(newUser);
  await createUserPreferences(newUser, currency[0]);
  await createTransactions(newUser, account, primaryCard, currency[0], transactionStatuses);
}

async function createUserProfile(user: User) {
  const country = await prisma.country.findUnique({
    where: {
      code: 'US',
    },
  });
  await prisma.userProfile.create({
    data: {
      userId: user.id,
      firstName: 'Jane',
      lastName: 'Doe',
      dateOfBirth: new Date(Date.UTC(1990, 0, 25)),
      city: 'San Jose',
      postalCode: '45962',
      presentAddress: 'San Jose, California, USA',
      permanentAddress: 'San Jose, California, USA',
      countryId: country?.id ?? '',
      img: '/img/user.png',
    },
  });
}

async function createUserPreferences(user: User, currency: Currency) {
  await prisma.userPreferences.create({
    data: {
      userId: user.id,
      sendOrReceiveCurrency: true,
      recommendation: true,
      currencyId: currency.id,
      timezone: 'America/Los_Angeles',
    },
  });
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
        statusId: transactionStatuses[1].id,
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

import { TransactionType } from '@api/types';
import { PrismaClient, User } from '@prisma/client';

import { getShortTransactionId } from './adapter';

export async function getLastTransactions(
  prisma: PrismaClient,
  user: User,
  limitPerPage: number,
  currentPage: number,
  type?: TransactionType
) {
  const transactions = await prisma.transaction.findMany({
    select: {
      id: true,
      description: true,
      category: true,
      isIncome: true,
      card: {
        select: {
          cardNumber: true,
        },
      },
      amount: true,
      currency: {
        select: {
          code: true,
        },
      },
      transactionDate: true,
      status: {
        select: {
          name: true,
        },
      },
    },
    where: {
      userId: user.id,
      isIncome: type && type === 'income',
    },
    orderBy: {
      transactionDate: 'desc',
    },
    take: limitPerPage,
    skip: limitPerPage * (currentPage - 1),
  });
  return transactions.map((transaction) => ({
    id: getShortTransactionId(transaction.id),
    description: transaction.description,
    category: transaction.category,
    isIncome: transaction.isIncome,
    card: transaction.card.cardNumber,
    amount: transaction.amount.toNumber(),
    currency: transaction.currency.code,
    date: transaction.transactionDate,
    status: transaction.status.name,
  }));
}

export async function getTransactionsTotalPages(
  prisma: PrismaClient,
  user: User,
  limitPerPage: number,
  type?: TransactionType
) {
  const count = await prisma.transaction.count({
    where: {
      userId: user.id,
      isIncome: type && type === 'income',
    },
  });
  return Math.ceil(count / limitPerPage);
}

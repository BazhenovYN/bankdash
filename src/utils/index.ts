import type { Currency } from '@/types';

export const extendArray = <T>(arr: T[], size: number): (T | null)[] => {
  if (arr.length >= size) {
    return arr.slice(0, size);
  }
  return arr.concat(new Array(size - arr.length).fill(null));
};

export const formatAmount = (amount: number, currency: Currency): string => {
  const options = { style: 'currency', currency };
  const numberFormat = new Intl.NumberFormat('en-US', options);

  return numberFormat.format(amount);
};

export const maskCardNumber = (cardNumber: string): string => {
  const firstPart = cardNumber.slice(0, 4);
  const lastPart = cardNumber.slice(-4);

  return `${firstPart} **** **** ${lastPart}`;
};

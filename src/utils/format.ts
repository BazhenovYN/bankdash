import { Currency } from '@/types';
import dayjs from 'dayjs';

export const formatAmount = (amount: number, currency: Currency): string => {
  const options = { style: 'currency', currency };
  const numberFormat = new Intl.NumberFormat('en-US', options);

  return numberFormat.format(amount);
};

export const formateDate = (date: Date, template: string): string => {
  return dayjs(date).format(template);
};

export const maskCardNumber = (
  cardNumber: string,
  template: 'start' | 'middle' | 'end'
): string => {
  const firstPart = cardNumber.slice(0, 4);
  const lastPart = cardNumber.slice(-4);

  switch (template) {
    case 'start':
      return `**** **** ${firstPart}`;
    case 'middle':
      return `${firstPart} **** **** ${lastPart}`;
    case 'end':
      return `${firstPart} ****`;
    default:
      return cardNumber;
  }
};
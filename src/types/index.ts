export type Currency = 'USD' | 'EUR';

export type User = {
  id: number;
  name: string;
  img: string;
};

export type Card = {
  id: number;
  cardService: string;
  cardNumber: string;
  cardHolder: string;
  valid: string;
  balance: number;
  currency: Currency;
};

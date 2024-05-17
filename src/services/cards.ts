import { cards } from '@/mocks/cards';
import { Card } from '@/types';

export const getUserCards = async (): Promise<Card[]> => {
  return cards;
};

import { cards } from '@web/mocks/cards';
import { Card } from '@web/types';

export const getUserCards = async (): Promise<Card[]> => {
  return cards;
};

import { trendingStocks } from '@/mocks/investments';
import { Stock } from '@/types';

export const getTrendingStocks = async (): Promise<Stock[]> => {
  return trendingStocks;
};

import { trendingStocks } from '@web/mocks/investments';
import { Stock } from '@web/types';

export const getTrendingStocks = async (): Promise<Stock[]> => {
  return trendingStocks;
};

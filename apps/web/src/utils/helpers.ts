export const extendArray = <T>(arr: T[], size: number): (T | null)[] => {
  if (arr.length >= size) {
    return arr.slice(0, size);
  }
  return arr.concat(new Array(size - arr.length).fill(null));
};

export const delay = async (ms: number) => {
  if (process.env.NODE_ENV === 'development') {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
};

export const sliceData = <T>(data: T[], limit: number, currentPage: number): T[] => {
  const start = limit * (currentPage - 1);
  return data.slice(start, start + limit);
};

export const extendArray = <T>(arr: T[], size: number): (T | null)[] => {
  if (arr.length >= size) {
    return arr.slice(0, size);
  }
  return arr.concat(new Array(size - arr.length).fill(null));
};

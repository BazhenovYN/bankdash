export const generatePagination = (currentPage: number, totalPages: number): string[] => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => String(i + 1));
  }

  const result = [];
  const addPages = (start: number, end: number) => {
    for (let i = start; i <= end; i++) {
      result.push(String(i));
    }
  };

  if (currentPage <= 4) {
    addPages(1, 5);
    result.push('...', String(totalPages));
  } else if (currentPage >= totalPages - 3) {
    result.push('1', '...');
    addPages(totalPages - 4, totalPages);
  } else {
    result.push('1', '...');
    addPages(currentPage - 1, currentPage + 1);
    result.push('...', String(totalPages));
  }

  return result;
};

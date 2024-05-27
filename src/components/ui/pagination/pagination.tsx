'use client';

import ChevronLeftIcon from '@/assets/svg/chevron-left.svg';
import ChevronRightIcon from '@/assets/svg/chevron-right.svg';
import { usePathname, useSearchParams } from 'next/navigation';
import { PaginationArrow } from './pagination-arrow';
import { PaginationNumber } from './pagination-number';
import { generatePagination } from './utils';

type Props = {
  totalPages: number;
};

export function Pagination({ totalPages }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex font-medium">
      <PaginationArrow href={createPageURL(currentPage - 1)} isDisabled={currentPage <= 1}>
        <ChevronLeftIcon className="h-3 w-3 lg:h-4 lg:w-4" />
        <span>Previous</span>
      </PaginationArrow>

      <div className="inline-flex px-4">
        {allPages.map((page, index) => (
          <PaginationNumber
            key={index}
            href={createPageURL(page)}
            page={page}
            isActive={String(currentPage) === page}
          />
        ))}
      </div>

      <PaginationArrow href={createPageURL(currentPage + 1)} isDisabled={currentPage >= totalPages}>
        <span>Next</span>
        <ChevronRightIcon className="h-3 w-3 lg:h-4 lg:w-4" />
      </PaginationArrow>
    </div>
  );
}

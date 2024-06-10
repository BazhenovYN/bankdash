import { Suspense } from 'react';

import { ActiveLoans } from '@web/components/active-loans';
import { LoansStickers } from '@web/components/loans-stickers';
import { StickerListSkeleton } from '@web/components/sticker';

type Props = {
  searchParams?: {
    page?: string;
  };
};

export default function LoanPage({ searchParams }: Props) {
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="flex flex-col gap-7">
      <Suspense fallback={<StickerListSkeleton length={4} />}>
        <LoansStickers />
      </Suspense>
      <Suspense fallback="Loading...">
        <ActiveLoans limitPerPage={8} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}

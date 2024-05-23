import { Suspense } from 'react';

import { LoansStickers } from '@/components/loans-stickers';
import { StickerListSkeleton } from '@/components/sticker';

export default function LoanPage() {
  return (
    <div>
      <Suspense fallback={<StickerListSkeleton length={4} />}>
        <LoansStickers />
      </Suspense>
    </div>
  );
}

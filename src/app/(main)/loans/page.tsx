import { Suspense } from 'react';

import { StickerListSkeleton } from '@/components/sticker';
import { WidgetLoansStickers } from '@/components/widget-loans-stickers';

export default function LoanPage() {
  return (
    <div>
      <Suspense fallback={<StickerListSkeleton length={4} />}>
        <WidgetLoansStickers />
      </Suspense>
    </div>
  );
}

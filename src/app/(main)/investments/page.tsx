import { Suspense } from 'react';

import { InvestmentsStickers } from '@/components/investments-stickers';
import { StickerListSkeleton } from '@/components/sticker';

export default function InvestmentsPage() {
  return (
    <div>
      <Suspense fallback={<StickerListSkeleton length={3} />}>
        <InvestmentsStickers />
      </Suspense>
    </div>
  );
}

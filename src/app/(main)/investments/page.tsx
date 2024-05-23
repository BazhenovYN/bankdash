import { Suspense } from 'react';

import { InvestmentsStickers } from '@/components/investments-stickers';
import { StickerListSkeleton } from '@/components/sticker';

export default function InvestmentsPage() {
  return (
    <div className="grid auto-rows-auto grid-cols-12 gap-8">
      <div className="col-span-12">
        <Suspense fallback={<StickerListSkeleton length={3} />}>
          <InvestmentsStickers />
        </Suspense>
      </div>
      <div className="col-span-6">Yearly Total Investment</div>
      <div className="col-span-6 col-start-7">Monthly Revenue</div>
      <div className="col-span-7">My Investment</div>
      <div className="col-span-5 col-start-8">Trending Stock</div>
    </div>
  );
}

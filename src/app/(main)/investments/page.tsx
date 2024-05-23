import { Suspense } from 'react';

import { StickerListSkeleton } from '@/components/sticker';
import { WidgetInvestmentsStickers } from '@/components/widget-investments-stickers';

export default function InvestmentsPage() {
  return (
    <div>
      <Suspense fallback={<StickerListSkeleton length={3} />}>
        <WidgetInvestmentsStickers />
      </Suspense>
    </div>
  );
}

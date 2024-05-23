import { Suspense } from 'react';

import { StickerListSkeleton } from '@/components/sticker';
import { WidgetAccountStickers } from '@/components/widget-account-stickers';
import { WidgetMyCards } from '@/components/widget-my-cards';
import { WidgetRecentTransactionsList } from '@/components/widget-recent-transactions-list';

export default function AccountsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Suspense fallback={<StickerListSkeleton length={4} />}>
        <WidgetAccountStickers />
      </Suspense>
      <WidgetRecentTransactionsList quantity={3} detailed />
      <WidgetMyCards quantity={1} />
    </div>
  );
}

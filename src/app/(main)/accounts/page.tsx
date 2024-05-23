import { Suspense } from 'react';

import { AccountStickers } from '@/components/account-stickers';
import { MyCards } from '@/components/my-cards';
import { RecentTransactionsList } from '@/components/recent-transactions-list';
import { StickerListSkeleton } from '@/components/sticker';

export default function AccountsPage() {
  return (
    <div className="flex flex-col gap-8">
      <Suspense fallback={<StickerListSkeleton length={4} />}>
        <AccountStickers />
      </Suspense>
      <RecentTransactionsList quantity={3} detailed />
      <MyCards quantity={1} />
    </div>
  );
}

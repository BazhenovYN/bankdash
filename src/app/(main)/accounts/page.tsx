import { Suspense } from 'react';

import { AccountStickers } from '@/components/account-stickers';
import { MyCards } from '@/components/my-cards';
import { RecentTransactionsList } from '@/components/recent-transactions-list';
import { StickerListSkeleton } from '@/components/sticker';

export default function AccountsPage() {
  return (
    <div className="grid auto-rows-auto grid-cols-3 gap-8">
      <div className="col-span-3">
        <Suspense fallback={<StickerListSkeleton length={4} />}>
          <AccountStickers />
        </Suspense>
      </div>
      <div className="col-span-2">
        <RecentTransactionsList quantity={3} detailed />
      </div>
      <div className="col-start-3">
        <MyCards quantity={1} />
      </div>
      <div className="col-span-2">Debit & Credit Overview</div>
      <div className="col-start-3">Invoices Sent</div>
    </div>
  );
}

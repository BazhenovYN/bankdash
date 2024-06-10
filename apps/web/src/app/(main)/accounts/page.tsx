import { Suspense } from 'react';

import { AccountStickers } from '@web/components/account-stickers';
import { InvoicesSent } from '@web/components/invoices-sent';
import { MyCards } from '@web/components/my-cards';
import { RecentTransactionsList } from '@web/components/recent-transactions-list';
import { StickerListSkeleton } from '@web/components/sticker';

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
      <div className="col-start-3">
        <InvoicesSent />
      </div>
    </div>
  );
}

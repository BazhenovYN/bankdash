import { IconCategory } from '@web/components/icon-category';
import { Container } from '@web/components/ui/container';
import { getLastSentInvoices } from '@web/services/finances';
import { formatAmount, getElapsedTime } from '@web/utils';

export async function InvoicesSent() {
  const invoices = await getLastSentInvoices();
  return (
    <Container title="Invoices sent">
      <div className="white-background flex flex-col justify-between gap-4 p-5 lg:gap-5 lg:px-6 lg:py-7">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3 lg:gap-4">
              <IconCategory category={invoice.category} size="md" />
              <div className="flex flex-col">
                <div className="text-xs font-medium lg:text-base">{invoice.description}</div>
                <div className="text-xs text-gray-600 lg:text-base">
                  {getElapsedTime(invoice.date)}
                </div>
              </div>
            </div>
            <div className="text-xs text-gray-600 lg:text-base">
              {formatAmount(invoice.amount, invoice.currency)}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

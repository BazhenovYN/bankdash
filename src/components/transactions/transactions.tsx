import { ColoredAmount } from '@/components/colored-amount';
import { Button } from '@/components/ui/button';
import { Pagination } from '@/components/ui/pagination';
import { getLastTransactions, getTransactionsTotalPages } from '@/services/transactions';
import { TransactionType } from '@/types';
import { formateDate, maskCardNumber } from '@/utils';
import { Icon } from './icons';

type Props = {
  limitPerPage: number;
  currentPage: number;
  type?: TransactionType;
};

export async function Transactions({ limitPerPage, currentPage, type }: Props) {
  const [transactions, totalPages] = await Promise.all([
    getLastTransactions(limitPerPage, currentPage, type),
    getTransactionsTotalPages(limitPerPage, type),
  ]);

  return (
    <>
      <div className="rounded-3xl bg-white px-5 py-4 lg:p-8">
        <table className="hidden w-full text-left text-xs text-gray-900 md:table lg:text-base">
          <thead className=" text-gray-600">
            <tr>
              <th scope="col" className="pb-2 font-medium">
                Description
              </th>
              <th scope="col" className="pb-2 font-medium">
                Transaction ID
              </th>
              <th scope="col" className="pb-2 font-medium">
                Type
              </th>
              <th scope="col" className="pb-2 font-medium">
                Card
              </th>
              <th scope="col" className="pb-2 font-medium">
                Date
              </th>
              <th scope="col" className="pb-2 font-medium">
                Amount
              </th>
              <th scope="col" className="pb-2 font-medium">
                Receipt
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-t border-blue-400">
                <td className="py-2 lg:py-4">
                  <div className="inline-flex items-center gap-3.5">
                    <Icon type={transaction.type} />
                    <div className="capitalize">{transaction.description}</div>
                  </div>
                </td>
                <td className="py-2 lg:py-4">{transaction.id}</td>
                <td className="py-2 capitalize lg:py-4">{transaction.category}</td>
                <td className="py-2 lg:py-4">{maskCardNumber(transaction.card, 'end')}</td>
                <td className="py-2 lg:py-4">{formateDate(transaction.date, 'DD MMM, hh:mm A')}</td>
                <td className="py-2 lg:py-4">
                  <ColoredAmount
                    amount={transaction.amount}
                    currency={transaction.currency}
                    type={transaction.type}
                  />
                </td>
                <td className="w-px whitespace-nowrap py-2 lg:py-4">
                  <Button variant="outlined">Download</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="md:hidden">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between border-b border-blue-400 py-2 first:pt-0 last:border-none last:pb-0"
            >
              <div className="inline-flex items-center gap-3">
                <Icon type={transaction.type} />
                <div>
                  <div className="text-xs font-medium capitalize text-gray-900">
                    {transaction.description}
                  </div>
                  <div className="text-xs text-gray-600">
                    {formateDate(transaction.date, 'DD MMM, hh:mm A')}
                  </div>
                </div>
              </div>
              <ColoredAmount
                amount={transaction.amount}
                currency={transaction.currency}
                type={transaction.type}
                className="text-xs"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-end md:mt-5 lg:mt-8">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
}

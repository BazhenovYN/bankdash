import { ColoredAmount } from '@web/components/colored-amount';
import { Button } from '@web/components/ui/button';
import { Pagination } from '@web/components/ui/pagination';
import { getLastTransactions, getTransactionsTotalPages } from '@web/services/transactions';
import { TransactionType } from '@web/types';
import { formateDate, maskCardNumber } from '@web/utils';
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
      <div className="white-background px-5 py-4 lg:p-8">
        <table className="hidden md:table">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Transaction ID</th>
              <th scope="col">Type</th>
              <th scope="col">Card</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Receipt</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>
                  <div className="inline-flex items-center gap-3.5">
                    <Icon type={transaction.type} />
                    <div className="capitalize">{transaction.description}</div>
                  </div>
                </td>
                <td>{transaction.id}</td>
                <td className="capitalize">{transaction.category}</td>
                <td>{maskCardNumber(transaction.card, 'end')}</td>
                <td>{formateDate(transaction.date, 'DD MMM, hh:mm A')}</td>
                <td>
                  <ColoredAmount
                    amount={transaction.amount}
                    currency={transaction.currency}
                    type={transaction.type}
                  />
                </td>
                <td className="w-px whitespace-nowrap">
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

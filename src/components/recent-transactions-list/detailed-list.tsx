import { ColoredAmount } from '@/components/colored-amount';
import { IconCategory } from '@/components/icon-category';
import { Container } from '@/components/ui/container';
import { Transaction } from '@/types';
import { formateDate, maskCardNumber } from '@/utils';

type Props = {
  transactions: Transaction[];
};

export function DetailedList({ transactions }: Readonly<Props>) {
  return (
    <Container title="Recent transactions" className="max-w-[730px]">
      <div className="rounded-3xl bg-white p-4">
        <table className="w-full">
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-2 py-1">
                  <IconCategory category={transaction.category} size="sm" />
                </td>
                <td>
                  <div className="flex flex-col">
                    <div className="font-medium">{transaction.description}</div>
                    <div className="text-gray-600">
                      {formateDate(transaction.date, 'DD MMM YYYY')}
                    </div>
                  </div>
                </td>
                <td className="capitalize text-gray-600">{transaction.category}</td>
                <td className="capitalize text-gray-600">
                  {maskCardNumber(transaction.card, 'end')}
                </td>
                <td className="capitalize text-gray-600">{transaction.status}</td>
                <td>
                  <ColoredAmount
                    amount={transaction.amount}
                    currency={transaction.currency}
                    type={transaction.type}
                    className="text-end"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

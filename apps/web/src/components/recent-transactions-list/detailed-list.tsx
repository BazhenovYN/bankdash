import { ColoredAmount } from '@web/components/colored-amount';
import { IconCategory } from '@web/components/icon-category';
import { Container } from '@web/components/ui/container';
import { LastTransactions } from '@web/types';
import { formateDate, maskCardNumber } from '@web/utils';

type Props = {
  transactions: LastTransactions['data'];
};

export function DetailedList({ transactions }: Readonly<Props>) {
  return (
    <Container title="Recent transactions" className="max-w-[730px]">
      <div className="white-background p-6">
        <table>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-none [&>td]:py-1">
                <td>
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
                    isIncome={transaction.isIncome}
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

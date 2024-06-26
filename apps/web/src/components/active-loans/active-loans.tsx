import { Button } from '@web/components/ui/button';
import { Container } from '@web/components/ui/container';
import { Pagination } from '@web/components/ui/pagination';
import { getActiveLoans } from '@web/services/loans';
import { formatAmount } from '@web/utils';

type Props = {
  limitPerPage: number;
  currentPage: number;
};

export async function ActiveLoans({ limitPerPage, currentPage }: Props) {
  const { data, totals, info } = await getActiveLoans(limitPerPage, currentPage);

  const getRecordNumber = (index: number) => limitPerPage * (currentPage - 1) + index + 1;

  return (
    <Container title="Active loans overview">
      <div className="white-background px-5 py-4 lg:p-8">
        <table>
          <thead>
            <tr>
              <th scope="col" className="hidden md:table-cell">
                SL No
              </th>
              <th scope="col">Loan Money</th>
              <th scope="col">Left to repay</th>
              <th scope="col" className="hidden md:table-cell">
                Duration
              </th>
              <th scope="col" className="hidden md:table-cell">
                Interest rate
              </th>
              <th scope="col" className="hidden md:table-cell">
                Installment
              </th>
              <th scope="col">Repay</th>
            </tr>
          </thead>
          <tbody>
            {data.map((loan, index) => (
              <tr key={loan.id}>
                <td className="hidden md:table-cell">{getRecordNumber(index)}</td>
                <td>{formatAmount(loan.loanMoney, loan.currency)}</td>
                <td>{formatAmount(loan.leftToRepay, loan.currency)}</td>
                <td className="hidden md:table-cell">{loan.duration} months</td>
                <td className="hidden md:table-cell">{loan.interestRate}%</td>
                <td className="hidden md:table-cell">
                  {formatAmount(loan.installment, loan.currency)} / month
                </td>
                <td className="w-px whitespace-nowrap">
                  <Button variant="outlined">Repay</Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="hidden md:table-row">
              <th scope="row">Total</th>
              <td>{formatAmount(totals.loanMoney, totals.currency)}</td>
              <td colSpan={3}>{formatAmount(totals.leftToRepay, totals.currency)}</td>
              <td>{formatAmount(totals.installment, totals.currency)} / month</td>
            </tr>
            <tr className="md:hidden">
              <th>Total</th>
            </tr>
            <tr className="md:hidden">
              <td>{formatAmount(totals.loanMoney, totals.currency)}</td>
              <td>{formatAmount(totals.leftToRepay, totals.currency)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="mt-4 flex justify-end md:mt-5 lg:mt-8">
        <Pagination totalPages={info.totalPages} />
      </div>
    </Container>
  );
}

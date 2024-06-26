import { ColoredPercent } from '@web/components/colored-amount';
import { Container } from '@web/components/ui/container';
import { getTrendingStocks } from '@web/services/investments';
import { formatAmount } from '@web/utils';

export async function TrendingStock() {
  const stocks = await getTrendingStocks();

  return (
    <Container title="Trending stock">
      <div className="white-background p-8">
        <table>
          <thead>
            <tr>
              <th>SL No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Return</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, index) => (
              <tr key={stock.id}>
                <td>{index + 1}</td>
                <td>{stock.name}</td>
                <td>{formatAmount(stock.price, stock.currency)}</td>
                <td>
                  <ColoredPercent percent={stock.return} className="font-medium" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}

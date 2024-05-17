import { WidgetContainer } from '@/components/widget-container';
import { getUserCards } from '@/services/cards';
import { extendArray } from '@/utils';
import { BankCard } from './bank-card';
import { EmptyCard } from './empty-card';

type Props = {
  quantity: number;
};

export async function WidgetMyCards({ quantity }: Readonly<Props>) {
  const userCards = await getUserCards();
  const displayedCards = extendArray(userCards, quantity);

  return (
    <WidgetContainer title="My cards" linkSeeAll="/credit-cards">
      <div className="flex gap-8">
        {displayedCards.map((card, index) => {
          if (card) {
            const type = index === 0 ? 'primary' : 'secondary';
            return <BankCard key={card.id} card={card} type={type} />;
          } else {
            return <EmptyCard key={index} />;
          }
        })}
      </div>
    </WidgetContainer>
  );
}

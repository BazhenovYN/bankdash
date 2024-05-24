import { Container } from '@/components/ui/container';
import { getUserCards } from '@/services/cards';
import { extendArray } from '@/utils';
import { BankCard } from './bank-card';
import { EmptyCard } from './empty-card';

type Props = {
  quantity: number;
  hideSeeAllLink?: boolean;
};

export async function MyCards({ quantity, hideSeeAllLink = false }: Readonly<Props>) {
  const userCards = await getUserCards();
  const displayedCards = extendArray(userCards, quantity);

  return (
    <Container title="My cards" linkSeeAll={hideSeeAllLink ? '' : '/credit-cards'}>
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
    </Container>
  );
}

import { Button } from '@web/components/ui/button';
import { Container } from '@web/components/ui/container';
import { Input } from '@web/components/ui/input';
import { addCard } from './actions';

const description = `Credit Card generally means a plastic card
  issued by Scheduled Commercial Banks assigned to a Cardholder,
  with a credit limit, that can be used to purchase goods
  and services on credit or obtain cash advances.`;

export function AddNewCard() {
  return (
    <Container title="Add new card">
      <div className="white-background flex flex-col justify-between space-y-8 p-5 lg:p-8">
        <p className="text-xs text-gray-600 lg:text-base">{description}</p>
        <form action={addCard}>
          <div className="grid gap-x-8 gap-y-5 md:grid-cols-2 md:grid-rows-2">
            <Input label="Card type" id="card-type" placeholder="Classic" />
            <Input label="Name on card" id="name-on-card" placeholder="My card" />
            <Input label="Card number" id="card-number" placeholder="**** **** **** ****" />
            <Input label="Expiration date" id="expiration-date" type="date" />
          </div>
          <Button type="submit" className="mt-8 w-full md:w-32 lg:w-40 lg:text-lg">
            Add card
          </Button>
        </form>
      </div>
    </Container>
  );
}

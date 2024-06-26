import { Button } from '@web/components/ui/button';
import { Input } from '@web/components/ui/input';
import { Toggle } from '@web/components/ui/toggle';
import type { Preferences } from '@web/types';

type Props = {
  preferences: Preferences;
};

export function UserPreferences({ preferences }: Props) {
  const { notifications } = preferences;
  return (
    <form>
      <div className="grid gap-x-7 gap-y-5 md:grid-cols-2">
        <Input label="Currency" id="currency" defaultValue={preferences.currency} />
        <Input label="Time zone" id="timezone" defaultValue={preferences.timezone} />
      </div>
      <div className="flex flex-col items-start gap-4">
        <h4>Notifications</h4>
        <Toggle
          label="I send or receive digital currency"
          id="sendOrReceiveCurrency"
          defaultChecked={notifications.sendOrReceiveCurrency}
        />
        <Toggle
          label="I receive merchant order"
          id="receiveMerchantOrder"
          defaultChecked={notifications.receiveMerchantOrder}
        />
        <Toggle
          label="There are recommendation for my account"
          id="recommendation"
          defaultChecked={notifications.recommendation}
        />
      </div>
      <div className="mt-8 flex justify-end">
        <Button type="submit" className="w-full md:w-32 lg:w-48">
          Save
        </Button>
      </div>
    </form>
  );
}

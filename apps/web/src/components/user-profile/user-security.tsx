import { Button } from '@web/components/ui/button';
import { Input } from '@web/components/ui/input';
import { Toggle } from '@web/components/ui/toggle';
import type { SecurityPreferences } from '@web/types';

type Props = {
  preferences: SecurityPreferences;
};

export function UserSecurity({ preferences }: Props) {
  return (
    <form>
      <div className="flex flex-col gap-4">
        <h4>Two-factor authentication</h4>
        <Toggle
          label="Enable or disable two factor authentication"
          defaultChecked={preferences.twoFactorAuth}
        />
      </div>
      <div className="flex flex-col gap-5 md:w-1/2">
        <h4>Change password</h4>
        <Input
          label="Current password"
          id="currentPassword"
          type="password"
          placeholder="**********"
        />
        <Input label="New password" id="newPassword" type="password" placeholder="**********" />
      </div>
      <div className="mt-8 flex justify-end">
        <Button type="submit" className="w-full md:w-32 lg:w-48">
          Save
        </Button>
      </div>
    </form>
  );
}

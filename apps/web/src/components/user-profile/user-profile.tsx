import { Button } from '@web/components/ui/button';
import { Input } from '@web/components/ui/input';
import type { Profile } from '@web/types';
import { formateDate } from '@web/utils';

type Props = {
  profile: Profile;
};

export function UserProfile({ profile }: Props) {
  return (
    <form className="w-full max-w-[865px]">
      <div className="grid gap-x-7 gap-y-5 md:grid-cols-2">
        <Input label="Your name" id="your-name" defaultValue={profile.fullName} />
        <Input label="User name" id="user-name" defaultValue={profile.username} />
        <Input label="Email" id="email" type="email" defaultValue={profile.email} />
        <Input label="Password" id="password" type="password" placeholder="**********" disabled />
        <Input
          label="Date of Birth"
          id="date-of-birth"
          type="date"
          defaultValue={formateDate(profile.dateOfBirth, 'YYYY-MM-DD')}
        />
        <Input label="Present address" id="present-address" defaultValue={profile.presentAddress} />
        <Input
          label="Permanent address"
          id="permanent-address"
          defaultValue={profile.permanentAddress}
        />
        <Input label="City" id="city" defaultValue={profile.city} />
        <Input label="Postal code" id="postal-code" defaultValue={profile.postalCode} />
        <Input label="Country" id="Country" defaultValue={profile.country} />
      </div>
      <div className="mt-8 flex justify-end">
        <Button type="submit" className="w-full md:w-32 lg:w-48">
          Save
        </Button>
      </div>
    </form>
  );
}

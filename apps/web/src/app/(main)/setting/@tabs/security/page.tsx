import { UserSecurity } from '@web/components/user-profile';
import { trpc } from '@web/lib/trpc';

export default async function Security() {
  const preferences = await trpc.user.getSecurityPreferences.query();
  return (
    <div className="flex flex-col">
      <UserSecurity preferences={preferences} />
    </div>
  );
}

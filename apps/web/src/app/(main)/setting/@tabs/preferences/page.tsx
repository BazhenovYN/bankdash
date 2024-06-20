import { UserPreferences } from '@web/components/user-profile';
import { trpc } from '@web/lib/trpc';

export default async function Preferences() {
  const preferences = await trpc.user.getPreferences.query();
  return (
    <div className="mt-14 flex flex-col">
      <UserPreferences preferences={preferences} />
    </div>
  );
}

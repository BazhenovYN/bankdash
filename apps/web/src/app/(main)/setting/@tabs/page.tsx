import { UserAvatar, UserProfile } from '@web/components/user-profile';
import { trpc } from '@web/lib/trpc';

export default async function EditProfile() {
  const profile = await trpc.user.getProfile.query();
  return (
    <div className="mt-14 flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
      <UserAvatar src={profile.img} />
      <UserProfile profile={profile} />
    </div>
  );
}

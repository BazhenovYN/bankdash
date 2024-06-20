import Link from 'next/link';

import { Avatar } from '@web/components/ui/avatar';
import { trpc } from '@web/lib/trpc';

export async function UserAvatar() {
  const avatar = await trpc.user.getAvatar.query();
  return (
    <Link href="/setting">
      <Avatar
        src={avatar.img}
        width={60}
        height={60}
        alt="user avatar"
        className="h-[35px] w-[35px] md:h-[45px] md:w-[45px] lg:h-[60px] lg:w-[60px]"
      />
    </Link>
  );
}

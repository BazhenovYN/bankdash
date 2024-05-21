import { Avatar } from '@/components/common/avatar';
import { getUser } from '@/services/user';

export async function UserAvatar() {
  const user = await getUser();
  return (
    <Avatar
      src={user.img}
      width={60}
      height={60}
      alt="user avatar"
      className="h-[35px] w-[35px] md:h-[45px] md:w-[45px] lg:h-[60px] lg:w-[60px]"
    />
  );
}

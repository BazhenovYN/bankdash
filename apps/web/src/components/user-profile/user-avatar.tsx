import Image from 'next/image';

import PencilIcon from '@web/assets/svg/pencil.svg';
import { IconButton } from '@web/components/ui/button';

type Props = {
  src: string;
};

export function UserAvatar({ src }: Props) {
  return (
    <div className="relative">
      <Image
        src={src}
        alt="user avatar"
        width={130}
        height={130}
        priority
        className="min-h-[170px] min-w-[170px] rounded-full md:min-h-28 md:min-w-28 lg:min-h-32 lg:min-w-32"
      />
      <IconButton variant="secondary" className="absolute bottom-4 right-0">
        <PencilIcon />
      </IconButton>
    </div>
  );
}

import NotificationIcon from '@/assets/svg/notification.svg';
import SettingsIcon from '@/assets/svg/settings-outlined.svg';
import { IconButton } from '@/components/common/button';
import { Search } from './search';

export function Toolbar() {
  return (
    <div className="flex items-center gap-5 lg:gap-8">
      <Search />
      <IconButton>
        <SettingsIcon />
      </IconButton>
      <IconButton>
        <NotificationIcon className="fill-red-400" />
      </IconButton>
    </div>
  );
}

import NotificationIcon from '@web/assets/svg/notification.svg';
import SettingsIcon from '@web/assets/svg/settings-outlined.svg';
import { IconButton } from '@web/components/ui/button';
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

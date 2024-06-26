import { PageName } from './page-name';
import { Toolbar } from './toolbar';
import { UserAvatar } from './user-avatar';

export function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-5">
      <PageName />
      <div className="flex items-center gap-8">
        <Toolbar />
        <UserAvatar />
      </div>
    </header>
  );
}

'use client';

import LoginSvg from '@web/assets/svg/login.svg';
import { Button } from '@web/components/ui/button';
import { startDemo } from './actions';

export function StartDemo() {
  return (
    <Button className="w-full md:w-auto" onClick={() => startDemo()} endIcon={<LoginSvg />}>
      Login
    </Button>
  );
}

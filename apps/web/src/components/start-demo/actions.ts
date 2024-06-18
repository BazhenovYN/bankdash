'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { ACCESS_TOKEN_KEY } from '@web/constants';
import { trpc } from '@web/lib/trpc';

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
const demoAccount = {
  email: 'jane-doe@gmail.com',
  password: '123456',
};

export async function startDemo() {
  const token = await trpc.auth.signin.mutate({
    email: demoAccount.email,
    password: demoAccount.password,
  });

  cookies().set({
    name: ACCESS_TOKEN_KEY,
    value: token,
    httpOnly: true,
    expires: Date.now() + ONE_DAY_IN_MS,
  });

  redirect('/dashboard');
}

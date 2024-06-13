import Link from 'next/link';

import { trpc } from '@web/app/trpc';

export default async function HomePage() {
  const { greeting } = await trpc.hello.query({ name: `Tom1` });
  return (
    <div>
      <div>Home Page</div>
      <div>{greeting}</div>
      <Link href="/dashboard" className="text-blue-600 hover:underline">
        Go to Dashboard
      </Link>
    </div>
  );
}

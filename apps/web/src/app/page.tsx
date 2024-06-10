import { trpc } from '@web/app/trpc';
import Link from 'next/link';

export default async function HomePage() {
  const { greeting } = await trpc.hello.query({ name: `Tom` });
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

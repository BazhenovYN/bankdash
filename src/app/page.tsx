import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <div>Home Page</div>
      <Link href="/dashboard" className="text-blue-600 hover:underline">
        Go to Dashboard
      </Link>
    </div>
  );
}

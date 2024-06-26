import { StartDemo } from '@web/components/start-demo';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  return (
    <div>
      <div>Home Page</div>
      <StartDemo />
    </div>
  );
}

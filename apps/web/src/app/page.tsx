import Image from 'next/image';

import { Footer } from '@web/components/footer';
import { StartDemo } from '@web/components/start-demo';

export default async function HomePage() {
  return (
    <div className="mx-auto flex max-w-screen-lg flex-col">
      <main className="flex flex-1 flex-col items-center gap-10 p-8 md:flex-row">
        <div className="text-2xl">
          <p className="text-center font-bold md:text-left">Welcome 👋</p>
          <p>
            <span>This is the implementation of the </span>
            <a
              className="text-blue-800 hover:underline"
              href="https://www.figma.com/community/file/1323695683687017923"
            >
              BankDash
            </a>
            <span> project designed by </span>
            <a className="text-blue-800 hover:underline" href="mailto:uiuxseju@gmail.com">
              Seju
            </a>
            <span>.</span>
          </p>
          <p>I hope you enjoy this project as much as I do 🚀</p>
          <StartDemo />
        </div>
        <div className="rounded-3xl bg-blue-200 p-2 md:p-8">
          <Image
            src="/img/app-screenshot.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project"
          />
          <Image
            src="/img/app-screenshot.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

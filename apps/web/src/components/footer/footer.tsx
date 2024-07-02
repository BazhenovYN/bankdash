import GithubSvg from '@web/assets/svg/github.svg';

const AUTHOR = 'Bazhenov Iurii';
const YEAR_OF_CREATION = 2024;

export function Footer() {
  return (
    <footer className="flex justify-center py-8">
      <a href="https://github.com/BazhenovYN" className="group hover:underline">
        <div className="flex items-center gap-4">
          <GithubSvg className="h-10 w-10 transition-transform group-hover:scale-110" />
          <div>
            © {YEAR_OF_CREATION} {AUTHOR}
          </div>
        </div>
      </a>
    </footer>
  );
}

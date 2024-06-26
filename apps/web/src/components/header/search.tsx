import MagnifyingGlassIcon from '@web/assets/svg/magnifying-glass.svg';

export function Search() {
  return (
    <div className="relative flex w-full max-w-64 items-center gap-4 rounded-5xl bg-blue-200 px-6 py-4 focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-blue-300">
      <MagnifyingGlassIcon className="h-4 w-4 fill-gray-600 lg:h-5 lg:w-5" />
      <input
        id="search"
        placeholder="Search for something"
        className="w-full border-0 bg-transparent leading-4 text-gray-600 placeholder:text-gray-500 focus:outline-none"
      />
    </div>
  );
}

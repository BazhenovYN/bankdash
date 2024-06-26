import { Wrapper } from './sticker';
import { StickerList } from './sticker-list';

function StickerSkeleton() {
  return (
    <Wrapper>
      <div className="flex min-w-[150px] animate-pulse items-center justify-center space-x-4 lg:min-w-[186px]">
        <div className="h-[45px] w-[45px] rounded-full bg-blue-300 lg:h-[70px] lg:w-[70px]"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 rounded bg-blue-300"></div>
          <div className="h-6 rounded bg-blue-300"></div>
        </div>
      </div>
    </Wrapper>
  );
}

export function StickerListSkeleton({ length }: Readonly<{ length: number }>) {
  return (
    <StickerList>
      {Array.from({ length }).map((_, index) => (
        <StickerSkeleton key={index} />
      ))}
    </StickerList>
  );
}

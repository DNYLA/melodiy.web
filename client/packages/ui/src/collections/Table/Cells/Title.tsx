import { ArtistPreview } from '@melodiy/types';
import { twMerge } from 'tailwind-merge';
import { ArtistList } from '../../../components/Data/ArtistList';
import { Image } from '../../../components/Data/Image';
import { getDefaultTrackImage } from '../../../utils';

interface TitleCellProps {
  title: string;
  artists: ArtistPreview[];
  cover?: string;
  isActive: boolean;
}

function TitleCell({ title, artists, cover, isActive }: TitleCellProps) {
  return (
    <div className="flex gap-x-2.5">
      <Image
        draggable={false}
        className="h-[45px] w-[45px] rounded-[3px]"
        src={cover}
        fallback={getDefaultTrackImage()}
        width={45}
        height={45}
        alt="Song Cover"
      />
      <div className="flex flex-col">
        <span
          className={twMerge(
            'text-[15px]',
            isActive && 'font-medium text-primary-light'
          )}
        >
          {title}
        </span>
        <ArtistList artists={artists} />
      </div>
    </div>
  );
}

export default TitleCell;

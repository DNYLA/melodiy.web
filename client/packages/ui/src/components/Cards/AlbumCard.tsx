import { ArtistPreview } from '@melodiy/types';
import { Link } from '@melodiy/router';
import { Image } from '../Data/Image';
import { ArtistList } from '../Data/ArtistList';

export enum AlbumCardSize {
  Small = 150,
  Medium = 180,
  Large = 200,
}

export interface AlbumCardProps {
  id: string;
  title: string;
  artists: ArtistPreview[];
  imageSrc?: string;
  size?: AlbumCardSize;
}

function AlbumCard({
  id,
  title,
  artists,
  imageSrc,
  size = AlbumCardSize.Medium,
}: AlbumCardProps) {
  return (
    <Link to={'/album/$id'} params={{ id }}>
      <div className="flex flex-col duration-300 ease-in-out cursor-pointer group gap-y-1 hover:scale-110">
        <Image
          draggable={false}
          className={'flex w-full h-full object-cover rounded-md'}
          src={imageSrc}
          width={size}
          height={size}
          alt={`${title} album cover`}
        />
        <div className="flex flex-col gap-0 p-0 m-0" style={{ maxWidth: size }}>
          <p className="max-w-[180px] truncate font-bold hover:underline">
            {title}
          </p>
          <ArtistList artists={artists} />
        </div>
      </div>
    </Link>
  );
}

export { AlbumCard };

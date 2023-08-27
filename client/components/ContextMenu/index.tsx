import FileContextMenu from '@/components/ContextMenu/files-context-menu';
import PlaylistContextMenu from '@/components/ContextMenu/playlist-context-menu';
import { PlaylistType } from '@/types';
import * as ContextMenu from '@radix-ui/react-context-menu';
import React from 'react';

interface SongContextProps {
  trackId: string;
  ownerId?: number;
  children: React.ReactNode;
  type: PlaylistType;
}

const SongContextMenu = ({
  children,
  trackId,
  ownerId,
  type,
}: SongContextProps) => {
  const renderCorrectMenu = () => {
    if (type === PlaylistType.Playlist)
      return <PlaylistContextMenu trackId={trackId} ownerId={ownerId} />;
    else if (type === PlaylistType.Files)
      return <FileContextMenu trackId={trackId} ownerId={ownerId} />;
  };

  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger asChild>{children}</ContextMenu.Trigger>
      <ContextMenu.Portal>{renderCorrectMenu()}</ContextMenu.Portal>
    </ContextMenu.Root>
  );
};

export default SongContextMenu;

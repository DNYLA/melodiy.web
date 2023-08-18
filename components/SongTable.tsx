'use client';
import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  createColumnHelper,
} from '@tanstack/react-table';
import { Song } from '@/types/playlist';
import Image from 'next/image';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  BsClock,
  BsFillPauseFill,
  BsFillPlayFill,
  BsMusicNote,
  BsMusicNoteBeamed,
} from 'react-icons/bs';
import { twMerge } from 'tailwind-merge';
dayjs.extend(relativeTime);
interface Props {
  data: unknown;
  columns: unknown;
}

export default function SongTable() {
  const [rowSelection, setRowSelection] = React.useState({});

  const data: Song[] = [
    {
      id: 1,
      title: 'Drive By',
      artist: 'Fivio Foreign',
      album: '800 BC',
      dateAdded: '2023-04-21T17:23:19Z',
      length: 52,
      cover: 'https://i.scdn.co/image/ab67616d00004851d5d1cc65dfc6163a8bcfaf80',
    },
    {
      id: 2,
      title: 'REAL RECOGNIZE REAL (feat. Roddy Ricch)',
      artist: 'Doe Boy',
      album: 'OH REALLY',
      dateAdded: '2023-04-22T20:50:09Z',
      length: 229,
      cover: 'https://i.scdn.co/image/ab67616d00004851403dc62551c138ce173f1680',
    },
    {
      id: 3,
      title: 'Feds Did a Sweep',
      artist: 'Future',
      album: 'FUTURE',
      dateAdded: '2023-02-14T01:00:30Z',
      length: 13,
      cover: 'https://i.scdn.co/image/ab67616d00004851e0b64c8be3c4e804abcb2696',
    },
    {
      id: 4,
      title: 'Mask Off',
      artist: 'Future',
      album: 'FUTURE',
      dateAdded: '2022-11-15T18:57:26Z',
      length: 205,
      cover: 'https://i.scdn.co/image/ab67616d00004851e0b64c8be3c4e804abcb2696',
    },
    {
      id: 5,
      title: 'PUFFIN ON ZOOTIES',
      artist: 'Future',
      album: 'I NEVER LIKED YOU',
      dateAdded: '2022-12-13T13:42:25Z',
      length: 194,
      cover: 'https://i.scdn.co/image/ab67616d0000485186badd635b69aea887862214',
    },
    {
      id: 6,
      title: '90210 (feat.Kacy Hill)',
      artist: 'Travis Scott',
      album: 'Rodeo',
      dateAdded: '2023-08-16T03:23:16Z',
      length: 156,
      cover: 'https://i.scdn.co/image/ab67616d00004851715973050587fe3c93033aad',
    },
    {
      id: 7,
      title: 'Big Homie',
      artist: 'OMB Peezy',
      album: 'Big Homie',
      dateAdded: '2023-02-24T06:09:13Z',
      length: 236,
      cover: 'https://i.scdn.co/image/ab67616d00004851cbd457992f9dd297a8db9c43',
    },
    {
      id: 8,
      title: 'Still Waiting - Bonus',
      artist: 'YoungBoy Never Broke Again',
      album: 'Sincerely, Kentrell',
      dateAdded: '2022-12-05T22:11:15Z',
      length: 4,
      cover: 'https://i.scdn.co/image/ab67616d000048514fc2bc1fbb295ceabbf5a658',
    },
    {
      id: 9,
      title: 'Intro',
      artist: 'Loski',
      album: 'Call Me Loose',
      dateAdded: '2023-03-12T23:10:43Z',
      length: 172,
      cover: 'https://i.scdn.co/image/ab67616d000048517aa49555f34dc992128baf93',
    },
    {
      id: 10,
      title: 'Prayers to the Trap God',
      artist: 'Roddy Ricch',
      album: 'Please Excuse Me for Being Antisocial',
      dateAdded: '2022-10-21T16:01:56Z',
      length: 117,
      cover: 'https://i.scdn.co/image/ab67616d00004851600adbc750285ea1a8da249f',
    },
    {
      id: 11,
      title: 'Knuckleheadz (feat. Ghostface Killah, U-God)',
      artist: 'Raekwon',
      album: 'Only Built 4 Cuban Linx',
      dateAdded: '2023-05-05T11:38:40Z',
      length: 162,
      cover: 'https://i.scdn.co/image/ab67616d0000485110f55f2af876cc662fc4ec12',
    },
    {
      id: 12,
      title: 'C.R.E.A.M',
      artist: 'Wu-Tang Clan',
      album: 'Enter the Wu-Tang (36 Chambers)',
      dateAdded: '2023-02-17T21:11:27Z',
      length: 49,
      cover: 'https://i.scdn.co/image/ab67616d000048515901aaa980d3e714bf01171c',
    },
    {
      id: 13,
      title: 'Thugz Dont Cry',
      artist: 'Duvy',
      album: 'GRASSWAYZ',
      dateAdded: '2023-04-24T16:18:27Z',
      length: 234,
      cover: 'https://i.scdn.co/image/ab67616d00004851523abbe2478297162c7ceff6',
    },
    {
      id: 14,
      title: 'Liquid Swords',
      artist: 'GZA',
      album: 'Liquid Swords',
      dateAdded: '2022-12-31T21:35:06Z',
      length: 177,
      cover: 'https://i.scdn.co/image/ab67616d0000485184b6abc19fb31fb382378bbc',
    },
    {
      id: 15,
      title: 'Water Fountain',
      artist: 'SOB X RBE',
      album: 'GANGIN II',
      dateAdded: '2023-06-14T20:17:28Z',
      length: 63,
      cover: 'https://i.scdn.co/image/ab67616d000048518d47b5a053047859f3491f58',
    },
    {
      id: 16,
      title: 'Down for Real',
      artist: 'Roddy Ricch',
      album: 'Feed Tha Streets II',
      dateAdded: '2023-07-30T23:28:06Z',
      length: 193,
      cover: 'https://i.scdn.co/image/ab67616d00004851434f4eeb4231f6f4862cafd4',
    },
    {
      id: 17,
      title: 'Day One (Outro)',
      artist: 'Roddy Ricch',
      album: 'Feed Tha Streets II',
      dateAdded: '2022-10-13T04:13:38Z',
      length: 231,
      cover: 'https://i.scdn.co/image/ab67616d00004851434f4eeb4231f6f4862cafd4',
    },
    {
      id: 18,
      title: 'The Race',
      artist: 'Tay-K',
      album: '#SantanaWorld (+)',
      dateAdded: '2022-08-22T04:37:34Z',
      length: 178,
      cover: 'https://i.scdn.co/image/ab67616d00004851fbfeb7ded12a79fbd98f99e8',
    },
    {
      id: 19,
      title: 'Always',
      artist: 'SOB X RBE',
      album: 'GANGIN',
      dateAdded: '2022-11-29T18:13:02Z',
      length: 51,
      cover: 'https://i.scdn.co/image/ab67616d00004851a786ef18c38cda9515ba1fba',
    },
    {
      id: 20,
      title: 'Streets Talkin',
      artist: 'Lil Noonie',
      album: 'Paid In Full',
      dateAdded: '2023-05-19T23:59:22Z',
      length: 137,
      cover: 'https://i.scdn.co/image/ab67616d00004851ef31403b3a52fb0976950027',
    },
    {
      id: 21,
      title: 'TEMPTATION',
      artist: 'Joey Bada$$',
      album: 'ALL-AMERIKKKAN BADA$$',
      dateAdded: '2023-05-20T00:26:42Z',
      length: 156,
      cover: 'https://i.scdn.co/image/ab67616d000048513c7596dccb2aaca39e0cee3d',
    },
    {
      id: 22,
      title: 'The Greatest',
      artist: 'Rod Wave',
      album: 'Pray 4 Love',
      dateAdded: '2022-10-31T15:03:32Z',
      length: 235,
      cover: 'https://i.scdn.co/image/ab67616d00004851759e4cc8e664b1d9e5c259cb',
    },
    {
      id: 23,
      title: 'Hard Times (feat. Hotboii)',
      artist: 'Lil Loaded',
      album: 'CRIPTAPE',
      dateAdded: '2023-05-19T19:35:14Z',
      length: 48,
      cover: 'https://i.scdn.co/image/ab67616d00004851744d730c4a958440105c3029',
    },
    {
      id: 24,
      title: 'Panoramic',
      artist: 'YoungBoy Never Broke Again',
      album: 'Sincerely, Kentrell',
      dateAdded: '2022-09-01T14:21:52Z',
      length: 60,
      cover: 'https://i.scdn.co/image/ab67616d000048514fc2bc1fbb295ceabbf5a658',
    },
    {
      id: 25,
      title: 'Jesus Shuttlesworth',
      artist: 'BabyTron',
      album: 'Bin Reaper',
      dateAdded: '2022-11-30T01:07:05Z',
      length: 167,
      cover: 'https://i.scdn.co/image/ab67616d000048512b347174b842252fcb314fe7',
    },
    {
      id: 26,
      title: 'DEAD & GONE',
      artist: 'Lancey Foux',
      album: 'FRIEND OR FOUX',
      dateAdded: '2023-04-28T17:07:43Z',
      length: 184,
      cover: 'https://i.scdn.co/image/ab67616d000048516c13dd486dfa99262a3dc919',
    },
  ];
  const activeTrackId = 4;

  const isActiveTrack = (id: number) => activeTrackId === id;

  const columnHelper = createColumnHelper<Song>();
  const columns = [
    columnHelper.accessor((row, i) => i + 1, {
      header: '#',
      cell: (props) => (
        <span className="flex justify-center">
          {isActiveTrack(props.getValue()) ? (
            <BsMusicNoteBeamed
              size={19}
              className="text-primary group-hover:hidden"
            />
          ) : (
            <p className="group-hover:hidden">{props.getValue()}</p>
          )}
          {isActiveTrack(props.getValue()) ? (
            <BsFillPauseFill size={19} className="hidden group-hover:inline" />
          ) : (
            <BsFillPlayFill size={19} className="hidden group-hover:inline" />
          )}
        </span>
      ),
    }),
    columnHelper.accessor(
      (row) => {
        return {
          title: row.title,
          artist: row.artist,
          cover: row.cover,
          id: row.id,
        };
      },
      {
        id: 'Title',
        cell: (props) => (
          <div className="flex gap-x-2">
            <Image
              className="rounded-md"
              src={props.getValue().cover}
              width={45}
              height={45}
              alt="Song Cover"
            />
            <div className="flex flex-col">
              <span
                className={twMerge(
                  'text-[15px] hover:underline cursor-pointer',
                  isActiveTrack(props.getValue().id) && 'text-primary'
                )}
              >
                {props.getValue().title}
              </span>
              <span className="text-sm text-inactive hover:underline cursor-pointer">
                {props.getValue().artist}
              </span>
            </div>
          </div>
        ),
      }
    ),
    columnHelper.accessor('album', {
      header: 'Album',
      cell: (props) => (
        <span className="text-[15px] hover:underline cursor-pointer">
          {props.getValue()}
        </span>
      ),
    }),
    columnHelper.accessor('dateAdded', {
      header: 'Date Added',
      cell: (props) => <span>{dayjs(props.getValue()).fromNow()}</span>,
    }),
    columnHelper.accessor('length', {
      header: () => <BsClock size={18} className="" />,
      cell: (props) => (
        <span>{msToMinuteSeconds(props.getValue() * 1000)}</span>
      ),
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableRowSelection: true,
  });

  return (
    <table className="m-6 text-white w-full">
      <thead className="">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="text-left px-3 py-2 border-b border-inactive"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="">
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="hover:bg-[#1f1c1c] group">
            {row.getVisibleCells().map((cell) => (
              <td
                key={cell.id}
                className="text-left px-3 py-2 first:rounded-l-lg last:rounded-r-lg"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function msToMinuteSeconds(duration: number) {
  var minutes = Math.floor(duration / 60000);
  var seconds = Number.parseInt(((duration % 60000) / 1000).toFixed(0));
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

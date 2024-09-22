import { IconProps } from '../types';
import { twMerge } from 'tailwind-merge';

function AddFriendIcon({ width = 50, height = 50, className }: Partial<IconProps>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    className={twMerge('text-base-accent stroke-current', className)}
    fill="none"
    viewBox="0 0 41 42" >
      <path stroke="stroke-current" stroke-width="2.021" d="M24.249 14.14a3.368 3.368 0 1 1-6.735 0 3.368 3.368 0 0 1 6.735 0Z"></path><path stroke="stroke-current" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.021" d="m17.513 20.875-3.551 2.368a3.368 3.368 0 0 0-1.5 2.802v1.677c0 .868.704 1.572 1.572 1.572h12.74m-2.525-7.577h2.525m2.526 0h-2.526m0 0v-2.526m0 2.526v2.526"></path>
    </svg>
  );
}

export { AddFriendIcon };
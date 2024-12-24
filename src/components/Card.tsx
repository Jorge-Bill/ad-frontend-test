import { Game } from '@/types/game';
import { useMemo } from 'react';
import Image from 'next/image';

type CardProps = {
  game: Game;
  onClick?: () => void;
  isInCart: boolean;
};

export default function Card({ game, onClick, isInCart }: CardProps) {
  const memoizedGame = useMemo(() => game, [game]);
  const { isNew, genre, image, name, price } = memoizedGame;
  return (
    <>
      <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow transition-all duration-200">
        {isNew && (
          <span className="text-xs absolute left-2 top-2 z-10 inline-flex transform items-center rounded-md bg-gray-100 px-1.5 py-0.5 font-medium text-gray-600 opacity-10 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
            New
          </span>
        )}
        <Image
          alt={name}
          src={image}
          width={382}
          height={384}
          className="aspect-[3/4] w-full bg-gray-200 object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
          priority
        />
        <div className="flex flex-1 flex-col space-y-2 p-4">
          <div className="flex flex-1 flex-col justify-end">
            <p className="text-sm uppercase text-gray-500">{genre}</p>
            <div className="flex justify-between">
              <h3 className="text-sm w-64 truncate font-bold text-gray-900">
                {name}
              </h3>
              <p className="text-base font-bold text-gray-900">$ {price}</p>
            </div>
          </div>
          <button
            onClick={onClick}
            className="rounded border border-gray-500 py-4 uppercase hover:bg-gray-200"
          >
            {isInCart ? 'Remove from' : 'Add to'} cart
          </button>
        </div>
      </div>
    </>
  );
}

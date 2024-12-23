import { Game } from '@/types/game';
import { useMemo } from 'react';
import Image from 'next/image';

type CardProps = {
  game: Game;
  onClick?: () => void;
};

export default function Card({ game, onClick }: CardProps) {
  const memoizedGame = useMemo(() => game, [game]);
  return (
    <>
      <div className="2s group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow transition-all">
        <Image
          alt={memoizedGame.name}
          src={memoizedGame.image}
          width={382}
          height={384}
          className="aspect-[3/4] w-full bg-gray-200 object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
          priority
        />
        <div className="flex flex-1 flex-col space-y-2 p-4">
          <div className="flex flex-1 flex-col justify-end">
            <p className="text-sm uppercase text-gray-500">
              {memoizedGame.genre}
            </p>
            <div className="flex justify-between">
              <h3 className="text-sm w-64 truncate font-bold text-gray-900">
                {memoizedGame.name}
              </h3>
              <p className="text-base font-bold text-gray-900">
                $ {memoizedGame.price}
              </p>
            </div>
          </div>
          <button
            onClick={onClick}
            className="rounded border border-gray-500 py-4 uppercase hover:bg-gray-200"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

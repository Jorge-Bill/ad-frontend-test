import Image from 'next/image';
import { Game } from '@/types/game';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { useMemo } from 'react';

type CardCheckoutProps = {
  game: Game;
  onClick: () => void;
};
export default function CardCheckout({ game, onClick }: CardCheckoutProps) {
  const memoizedGame = useMemo(() => game, [game]);
  const { id, genre, image, name, price, description } = memoizedGame;

  return (
    <li className="flex py-6 transition-all duration-200 sm:py-10" id={id}>
      <div className="shrink-0">
        <Image
          alt={name}
          src={image}
          width={192}
          height={192}
          className="size-24 rounded-md object-cover group-hover:opacity-75 sm:size-48"
          priority
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <div className="text-sm">
                <p className="text-uppercase text-gray-500">{genre}</p>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <div className="absolute right-0 top-0">
              <button
                onClick={onClick}
                type="button"
                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Remove</span>
                <XMarkIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <p className="font-bold text-gray-700 hover:text-gray-800">{name}</p>

        <p className="text-sm font-medium text-gray-600">{description}</p>

        <p className="text-sm mt-1 text-right font-medium text-gray-900">
          $ {price}
        </p>
      </div>
    </li>
  );
}

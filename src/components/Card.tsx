import { Game } from '@/types/game';
import { useMemo } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/20/solid';

type CardProps = {
  game: Game;
  onClick?: () => void;
  isInCart?: boolean;
  type: string;
};

export default function Card({ game, onClick, isInCart, type }: CardProps) {
  const memoizedGame = useMemo(() => game, [game]);
  const { id, isNew, genre, image, name, price, description } = memoizedGame;
  return (
    <>
      {type === 'card' && (
        <div
          className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow transition-all duration-200"
          id={id}
        >
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
      )}
      {type === 'checkout' && (
        <li className="flex py-6 transition-all duration-200 sm:py-10" id={id}>
          <div className="shrink-0">
            <Image
              alt={name}
              src={image}
              width={192}
              height={192}
              className="size-24 rounded-md object-cover group-hover:opacity-75 sm:aspect-auto sm:size-48"
              priority
            />
          </div>
          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <div className="text-sm">
                    <p className="uppercase text-gray-500">{genre}</p>
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
            <p className="font-bold text-gray-700 hover:text-gray-800">
              {name}
            </p>
            <p className="text-sm leading-2 font-light text-gray-600">
              {description}
            </p>
            <p className="text-sm mt-1 text-right font-medium text-gray-900">
              {`$ ${price}`}
            </p>
          </div>
        </li>
      )}
    </>
  );
}

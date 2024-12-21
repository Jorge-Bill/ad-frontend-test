'use client';

import { useState } from 'react';
import { Game } from '@/types/game';

const products = [
  {
    id: '3',
    genre: 'Adventure',
    image: '/game-images/zeldabotw.jpeg',
    name: 'The Legend of Zelda: Breath of the Wild',
    description:
      'An epic adventure that breaks boundaries in the Zelda series.',
    price: 59.99,
    isNew: true,
  }
];
export default function Products() {
  const [games, setGames] = useState<Game[]>([products[0]]);
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
        {games.map(product => (
          <div
            key={product.id}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <img
              alt={product.name}
              src={product.image}
              className="aspect-[3/4] w-full bg-gray-200 object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96"
            />
            <div className="flex flex-1 flex-col space-y-2 p-4">
              <h3 className="text-sm font-medium text-gray-900">
                {/* <a href={product.href}> */}
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                {/* </a> */}
              </h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="flex flex-1 flex-col justify-end">
                <p className="text-sm italic text-gray-500">
                  {product.genre}
                </p>
                <p className="text-base font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
              <button onClick={() => alert('Added to cart')}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

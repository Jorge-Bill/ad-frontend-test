'use client';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-header px-4 py-10 sm:px-6 sm:py-8 lg:px-8">
      <a href="/">
        <span className="sr-only">GamerShop</span>
        <Image
          src="/logo.svg"
          alt="GamerShop"
          width={150}
          height={24}
          className="h-8 w-auto"
          priority
        />
      </a>
      <div className="hidden sm:flex sm:items-center sm:space-x-8">
        <a href="/cart" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
          <span className="sr-only">Cart</span>
          <ShoppingCartIcon aria-hidden="true" className="size-6" />
        </a>
      </div>
    </header>
  );
}

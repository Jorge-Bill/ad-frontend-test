'use client';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Header() {
  return (
    <FadeIn delay={0}>
      <header className="flex items-center justify-between bg-header px-4 py-10 sm:px-6 sm:py-6 lg:px-8">
        <Link href="/">
          <span className="sr-only">GamerShop</span>
          <Image
            src="/logo.svg"
            alt="GamerShop"
            width={100}
            height={25}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <div className="sm:flex sm:items-center sm:space-x-8">
          <Link
            href="/cart"
            className="-m-2 p-2 text-gray-600 hover:text-gray-500"
          >
            <span className="sr-only">Cart</span>
            <ShoppingCartIcon aria-hidden="true" className="size-6" />
          </Link>
        </div>
      </header>
    </FadeIn>
  );
}

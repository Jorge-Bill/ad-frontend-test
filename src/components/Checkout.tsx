'use client';

import { useState, useEffect } from 'react';
import { Game } from '@/types/game';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { getFromSession } from '@/services/session';
import Card from './Card';
import Notification from './Notification';
import Order from './Order';
import FadeIn from './FadeIn';
import { useCart } from '@/hooks/UseCart';

export default function Checkout() {
  const { cart, notification, setNotification, message, removeFromCart } =
    useCart();

  return (
    <div className="mx-auto h-full min-h-screen max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mb-12 sm:flex sm:items-center sm:space-x-8">
        <Link
          href="/"
          className="-m-2 flex items-center p-2 text-gray-600 hover:text-gray-500"
        >
          <span className="sr-only">Home</span>
          <ArrowLeftIcon aria-hidden="true" className="mr-2 size-6" />
          Back to Catalog
        </Link>
      </div>
      <h1 className="text-6xl sm:text-4xl font-bold tracking-tight text-gray-900">
        Your Cart
        <p className="mt-1 font-normal text-gray-400">{`${cart.length} items`}</p>
      </h1>
      <form
        action={() => alert('Proceed to Checkout')}
        className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16"
      >
        <section aria-labelledby="cart-heading" className="lg:col-span-7">
          <h2 id="cart-heading" className="sr-only">
            Items in your shopping cart
          </h2>
          <ul role="list" className="divide-y divide-gray-200 border-gray-200">
            {cart.map(game => (
              <FadeIn key={game.id} delay={0.1}>
                <Card
                  type={'checkout'}
                  game={game}
                  onClick={() => removeFromCart(game)}
                />
              </FadeIn>
            ))}
            {cart.length === 0 && (
              <li className="text-sm flex py-6 transition-all duration-200 sm:py-10">
                <p className="text-capitalize text-center italic leading-6 text-gray-500 transition-all duration-200">
                  Your cart is empty.
                </p>
              </li>
            )}
          </ul>
        </section>
        <Order cart={cart} />
      </form>
      <Notification
        show={notification}
        close={setNotification}
        message={message}
      />
    </div>
  );
}

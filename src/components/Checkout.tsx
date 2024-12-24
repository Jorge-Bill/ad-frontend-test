'use client';

import { useState, useEffect } from 'react';
import { Game } from '@/types/game';
import { getFromSession } from '@/services/session';
import Card from './Card';
import Notification from './Notification';
import Order from './Order';
import FadeIn from './FadeIn';

export default function Checkout() {
  const [cart, setCart] = useState<Game[]>([]);
  const [notification, setNotification] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const stored = getFromSession('cart');
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const removeFromCart = (game: Game) => {
    setCart(cart => [...cart.filter(stored => stored.id !== game.id)]);
    setMessage(`Removed ${game.name} from cart.`);
    setNotification(true);
  };

  return (
    <div className="mx-auto h-full min-h-screen max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
        Your Cart
        <p className="mt-1 font-normal text-gray-400">{`${cart.length} items`}</p>
      </h1>
      <form
        action={() => alert('Checkout')}
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
                <p className="uppercase text-gray-500">Your cart is empty.</p>
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

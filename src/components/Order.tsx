import FadeIn from './FadeIn';
import { Game } from '@/types/game';

export default function Order({ cart }: { cart: Game[] }) {
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 bg-white px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <div className="rounded-lg border border-gray-200 px-4 py-6 sm:p-6">
        <h2 id="summary-heading" className="text-lg font-bold text-gray-900">
          Order summary
          <p className="text-sm mt-1 font-medium text-gray-400">{`${cart.length} items`}</p>
        </h2>

        <dl className="mt-8 space-y-4">
          {cart.map(game => (
            <FadeIn key={game.id} delay={0.2}>
              <div className="flex items-center justify-between">
                <dt className="text-sm w-64 truncate text-gray-600">
                  {game.name}
                </dt>
                <dd className="text-sm text-right font-medium text-gray-600">{`$ ${game.price}`}</dd>
              </div>
            </FadeIn>
          ))}

          <FadeIn delay={0.6}>
            <div className="flex items-center justify-between border-t border-gray-200 pt-6">
              <dt className="text-base text-4xl font-bold text-gray-900">
                Order total
              </dt>
              <dd className="text-base text-4xl font-bold text-gray-900">
                {`$ ${cart.reduce((sum, game) => sum + game.price, 0).toFixed(2)}`}
              </dd>
            </div>
          </FadeIn>
        </dl>
      </div>
      <div className="mt-6">
        <button
          disabled={cart.length === 0}
          type="submit"
          className="text-base w-full rounded-md border border-transparent bg-secondary px-4 py-3 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Checkout
        </button>
      </div>
    </section>
  );
}

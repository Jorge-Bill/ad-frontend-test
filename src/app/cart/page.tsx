import { Suspense } from 'react';
import Skeleton from '@/components/Skeleton';
import Checkout from '@/components/Checkout';
export default async function Cart() {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Checkout />
      </Suspense>
    </>
  );
}

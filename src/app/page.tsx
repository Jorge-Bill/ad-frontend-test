import { Suspense } from 'react';
import Products from '@/containers/Products';
import Skeleton from '@/components/Skeleton';

export default async function Home() {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Products />
      </Suspense>
    </>
  );
}

import { Suspense } from 'react';
import Products from '@/components/Products';
import Skeleton from '@/components/Skeleton';
import Banner from '@/components/Banner';
import Divider from '@/components/Divider';

export default async function Home() {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Banner />
        <Divider />
        <Products />
      </Suspense>
    </>
  );
}

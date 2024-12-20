import { Suspense } from 'react';
import Skeleton from '@/components/Skeleton';
import Banner from '@/components/Banner';
import Divider from '@/components/Divider';
export default async function Cart() {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Banner />
        <Divider />
        <div className="text-4xl flex min-h-screen flex-col items-center justify-between p-24 font-bold text-blue-600">
          Cart Page
        </div>
      </Suspense>
    </>
  );
}

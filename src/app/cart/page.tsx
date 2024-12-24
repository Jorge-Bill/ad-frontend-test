import { Suspense } from 'react';
import Skeleton from '@/components/Skeleton';
import Banner from '@/components/Banner';
import Divider from '@/components/Divider';
export default async function Cart() {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <Banner title="Cart Page">a</Banner>
        <Divider />
        <div className="text-4xl flex h-full min-h-screen flex-col items-center justify-between p-24 font-bold text-gray-900">
          We are building it...
        </div>
      </Suspense>
    </>
  );
}

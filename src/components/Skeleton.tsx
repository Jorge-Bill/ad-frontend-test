import React from 'react';

type SkeletonProps = {
  type?: string;
};

const Skeleton = ({ type, ...props }: SkeletonProps) => {
  return (
    <>
      {type === 'card' && (
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          <div
            className="w-85 h-96 animate-pulse rounded bg-gray-200 shadow"
            {...props}
          />
          <div
            className="w-85 h-96 animate-pulse rounded bg-gray-200 shadow"
            {...props}
          />
          <div
            className="w-85 h-96 animate-pulse rounded bg-gray-200 shadow"
            {...props}
          />
        </div>
      )}
      {type === '' && (
        <div className="min-h-screen bg-white dark:bg-black" {...props}>
          <header className="bg-gray-300 py-6 dark:bg-black">
            <div className="mx-auto max-w-4xl px-4">
              <div className="flex animate-pulse items-center space-x-4">
                <div className="h-12 w-12 rounded-full bg-gray-400 dark:bg-zinc-900"></div>
                <div>
                  <div className="h-4 w-20 rounded bg-gray-400 dark:bg-zinc-900"></div>
                  <div className="mt-2 h-4 w-16 rounded bg-gray-400 dark:bg-zinc-900"></div>
                </div>
              </div>
            </div>
          </header>
          <div className="mx-auto max-w-4xl px-4 py-8">
            <div className="animate-pulse space-y-4">
              <div className="h-4 w-2/3 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 w-1/2 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 w-3/4 rounded bg-gray-300 dark:bg-zinc-900"></div>
            </div>

            <div className="mt-12 animate-pulse space-y-4">
              <div className="h-4 w-2/3 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 w-1/2 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 w-3/4 rounded bg-gray-300 dark:bg-zinc-900"></div>
            </div>

            <div className="mt-12 animate-pulse space-y-4">
              <div className="h-4 w-2/3 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 w-1/2 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 rounded bg-gray-300 dark:bg-zinc-900"></div>
              <div className="h-4 w-3/4 rounded bg-gray-300 dark:bg-zinc-900"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Skeleton;

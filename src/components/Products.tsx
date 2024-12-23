'use client';

import { useState } from 'react';
import { Game } from '@/types/game';
import Card from './Card';
import Skeleton from './Skeleton';
import { useEffect, useTransition } from 'react';
import Banner from './Banner';
import Divider from './Divider';
import useInfiniteScroll from '@/hooks/UseInfinityScroll';
import FadeIn from './FadeIn';

export default function Products() {
  const [isPending, startTransition] = useTransition();
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadMore = (count: number) => {
    if (isPending || isLoading) return;

    setIsLoading(true);
    fetch('/api/games' + `?page=${count || page}`)
      .then(res => res.json())
      .then(data => {
        setGames([...games, ...data.games]);
        data.currentPage < data.totalPages
          ? setHasMore(true)
          : setHasMore(false);
        setPage(data.currentPage);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    startTransition(() => {
      loadMore(page);
    });
  }, []);

  const onLoad = () => {
    hasMore &&
      startTransition(() => {
        loadMore(page + 1);
      });
  };

  useInfiniteScroll(onLoad, isPending || isLoading);

  return (
    <>
      <Banner />
      <Divider />
      <div className="mx-auto h-full max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {games.map(game => (
            <FadeIn key={game.id} delay={0.1}>
              <Card game={game} onClick={() => alert(game.name)} />
            </FadeIn>
          ))}
        </div>
        {!hasMore && !isPending && page > 1 && (
          <p className="text-capitalize mt-4 text-center italic leading-6">
            No more games available.
          </p>
        )}
        {isPending ||
          (isLoading && (
            <div className="mt-4">
              <Skeleton type="card" />
            </div>
          ))}
      </div>
    </>
  );
}

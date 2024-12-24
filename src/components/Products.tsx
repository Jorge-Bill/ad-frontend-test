'use client';

import { useState } from 'react';
import { Game, Genre } from '@/types/game';
import Card from './Card';
import Skeleton from './Skeleton';
import { useEffect, useTransition } from 'react';
import Banner from './Banner';
import Divider from './Divider';
import useInfiniteScroll from '@/hooks/UseInfinityScroll';
import FadeIn from './FadeIn';
import { all, generateGenreOptions } from '@/utils/generic';
import Select from './Select';
import { getGames } from '@/services/api';

export default function Products() {
  const [isPending, startTransition] = useTransition();
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<Genre[]>([]);
  const [selected, setSelected] = useState<Genre>(all);

  const loadMore = async (count: number) => {
    if (isPending || isLoading) return;

    try {
      setIsLoading(true);
      await getGames(count, selected.name)
        .then(res => res.json())
        .then(data => {
          data.currentPage < data.totalPages
            ? setHasMore(true)
            : setHasMore(false);
          setPage(data.currentPage);

          if (count === 1) {
            setOptions(generateGenreOptions(data.availableFilters));
            setGames(data.games);
          } else {
            setGames([...games, ...data.games]);
          }
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    startTransition(() => {
      loadMore(page);
    });
  }, []);

  useEffect(() => {
    startTransition(() => {
      loadMore(1);
    });
  }, [selected]);

  const onLoad = () => {
    hasMore &&
      startTransition(() => {
        loadMore(page + 1);
      });
  };

  useInfiniteScroll(onLoad, isPending || isLoading);

  return (
    <>
      <Banner title="Top Sellers">
        <Select
          options={options}
          onChange={setSelected}
          label="Genre"
          selected={selected}
        />
      </Banner>
      <Divider />
      <div className="mx-auto h-full min-h-screen max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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

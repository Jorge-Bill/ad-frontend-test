import { Genre } from '../types/game';

const all: Genre = {
  id: '-1',
  name: 'All',
};

const generateGenreOptions = (options: (Genre | string)[]): Genre[] => {
  const normalized = options.map((item, index) => {
    if (typeof item === 'string') {
      return { id: String(index + 1), name: item };
    }
    return item;
  });

  const genres = Array.from(
    new Map(normalized.map(genre => [genre.name, genre])).values()
  );

  return [all, ...genres];
};

export { all, generateGenreOptions };

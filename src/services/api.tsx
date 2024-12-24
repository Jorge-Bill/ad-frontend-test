const getGames = async (page: number, genre: string) => {
  let requisition = fetch(`/api/games?page=${page}`);

  if (genre !== 'All') {
    requisition = fetch(`/api/games?page=${page}&genre=${genre}`);
  }

  return await requisition;
};

export { getGames };

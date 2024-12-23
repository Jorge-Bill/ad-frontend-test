import { NextApiRequest, NextApiResponse } from 'next';
import { allGames } from '@/utils/endpoint';
import { Game } from '@/types/game';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Game[]>
) {
  const { genre } = req.query;

  if (genre) {
    return res
      .status(200)
      .json(
        allGames.filter(
          game => game.genre.toLowerCase() === (genre as string).toLowerCase()
        )
      );
  }
  return res.status(200).json(allGames);
}

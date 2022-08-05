import axiosInstance from "@/api/axios.instance";
import { Game } from "@/api/games/types";

const getAllGames = async (): Promise<Game[]> => {
  const { data: games } = await axiosInstance.get<Array<Game>>("/games");

  return games;
};

const getGameById = async (id: number): Promise<Game> => {
  const { data: game } = await axiosInstance.get<Game>(`/games/${id}`);
  return game;
};

const patchGameById = async (
  id: number,
  body: Partial<Game>,
): Promise<Partial<Game>> => {
  const { data: updatedGame } = await axiosInstance.patch<Game>(
    `/games/${id}`,
    body,
  );
  return updatedGame;
};

const deleteGameById = async (id: number): Promise<Game> => {
  const { data: deletedGame } = await axiosInstance.delete<Game>(
    `/games/${id}`,
  );
  return deletedGame;
};

const createGame = async (body: Game): Promise<Game> => {
  const { data: createdGame } = await axiosInstance.post<Game>(`/games`, body);
  return createdGame;
};

export default {
  getAllGames,
  getGameById,
  patchGameById,
  deleteGameById,
  createGame,
};

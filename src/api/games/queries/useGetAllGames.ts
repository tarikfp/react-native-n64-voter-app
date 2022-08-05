import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import { default as GamesService } from "../games.service";
import { Game } from "../types";
import { gameDataKeys } from "./key-factory";

export default function useGetAllGames(
  options?: UseQueryOptions<
    Array<Game> | undefined,
    Error,
    Array<Game> | undefined,
    readonly [string]
  >,
): UseQueryResult<Array<Game> | undefined, Error> {
  return useQuery<
    Array<Game> | undefined,
    Error,
    Array<Game> | undefined,
    readonly [string]
  >(gameDataKeys.all, GamesService.getAllGames, options);
}

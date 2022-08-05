import { gameDataKeys } from "@/api/games/queries/key-factory";
import {
  UseMutationResult,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { default as GamesService } from "../games.service";
import { Game, UpdateGame } from "../types";
import { updateGameEntryQueryUpdater } from "./helpers";

export default function useUpdateGame(
  options?: UseMutationOptions<Partial<Game>, Error, UpdateGame>,
): UseMutationResult<Partial<Game>, Error, UpdateGame> {
  const queryClient = useQueryClient();
  return useMutation<Partial<Game>, Error, UpdateGame>(
    (variables) => GamesService.patchGameById(variables.id, variables.body),
    {
      ...options,

      // Optimistic update...
      // It can be seen an over-engineering in this project's scope,
      // as well as choosing to use react-query

      onMutate: async (newGameEntry) => {
        // cancel any ongoing game data queries
        await queryClient.cancelQueries(gameDataKeys.all);

        // retrieve query state game data
        const previousGames = queryClient.getQueryData<Array<Game> | undefined>(
          gameDataKeys.all,
        );

        if (previousGames) {
          queryClient.setQueryData<Array<Game>>(
            gameDataKeys.all,
            updateGameEntryQueryUpdater(newGameEntry),
          );
        }

        return { previousGames };
      },

      // Uncomment onError function too in case onMutate is uncommented

      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (_err, _newTodo, context) => {
        queryClient.setQueryData(
          gameDataKeys.all,
          (context as any).previousGames,
        );
      },

      // Always refetch after error or success:
      onSettled: () => {
        queryClient.invalidateQueries(gameDataKeys.all);
      },
    },
  );
}

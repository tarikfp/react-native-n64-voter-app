import { Game, UpdateGame } from "@/api/games/types";

export function updateGameEntryQueryUpdater(
  newGameData: UpdateGame,
): (oldGamesData: Array<Game> | undefined) => Array<Game> | undefined {
  return function (oldGamesData: Array<Game> | undefined) {
    if (oldGamesData) {
      const foundToUpdateGameData = oldGamesData.find(
        (x) => x.id === newGameData.id,
      );

      if (foundToUpdateGameData) {
        // alter game entry with the update body
        const updatedGameData: Game = {
          ...foundToUpdateGameData,
          ...newGameData.body,
        } as Game;

        const updateGameDataIndex = oldGamesData.indexOf(foundToUpdateGameData);

        // filter out the updated old game entry
        const newGamesData = oldGamesData.filter(
          (x) => x.id !== newGameData.id,
        );

        // insert updated game entry to the desired index
        newGamesData.splice(updateGameDataIndex, 0, updatedGameData);

        return [...newGamesData];
      }
    }
  };
}

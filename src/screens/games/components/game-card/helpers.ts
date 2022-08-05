import { DESCRIPTION_TEXT_LEN } from "@/screens/games/components/game-card/constants";

const getShortenedDescriptionText = (descText: string) =>
  descText.length > DESCRIPTION_TEXT_LEN
    ? `${descText.substring(0, DESCRIPTION_TEXT_LEN)}...`
    : descText;

const getGenreString = (genreArr: Array<string>) => genreArr.join(", ");

export const GameCardHelpers = {
  getShortenedDescriptionText,
  getGenreString,
};

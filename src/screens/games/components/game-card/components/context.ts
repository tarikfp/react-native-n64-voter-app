import React from "react";
import { GameCardProps } from "../types";

export const GameCardContext = React.createContext<GameCardProps | undefined>(
  undefined,
);

export const useGameCardContext = () => {
  const gameCardContext = React.useContext(GameCardContext);

  if (!gameCardContext) {
    throw new Error("Ensure GameCardContext provider is in the tree");
  }

  return gameCardContext;
};

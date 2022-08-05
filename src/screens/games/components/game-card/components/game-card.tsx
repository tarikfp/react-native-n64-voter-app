import * as React from "react";
import { GameCardContext } from "./context";
import GameCardLikeSection from "./like-section";
import GameCardTitle from "./title";
import GameCardOtherInfo from "./other-info";
import GameCardDescription from "./description";
import GameCardImage from "./image";
import GameCardAction from "./action";
import { GameCardProps } from "../types";

function GameCard(props: React.PropsWithChildren<GameCardProps>) {
  return (
    <GameCardContext.Provider value={props}>
      {props.children}
    </GameCardContext.Provider>
  );
}

GameCard.Title = GameCardTitle;
GameCard.Image = GameCardImage;
GameCard.Action = GameCardAction;
GameCard.LikeSection = GameCardLikeSection;
GameCard.OtherInfo = GameCardOtherInfo;
GameCard.Description = GameCardDescription;

export default GameCard;

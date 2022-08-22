import { Button } from "@/components/button";
import * as React from "react";
import { useGameCardContext } from "./context";

export default function GameCardAction() {
  const { onLikePress, id, title, likeCount } = useGameCardContext();

  return (
    <Button
      testID={`game-card-like-button-${id}`}
      onPress={() =>
        onLikePress({
          id,
          likeCount,
          title,
        })
      }
      label="Like"
    />
  );
}

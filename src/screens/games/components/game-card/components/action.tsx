import * as React from "react";
import { Button } from "@/components/button";
import { useGameCardContext } from "./context";

export default function GameCardAction() {
  const { onLikePress, id, title, likeCount } = useGameCardContext();

  return (
    <Button
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

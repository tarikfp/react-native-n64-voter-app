import { Game } from "@/api/games/types";

// Could be placed into the component file directly
// however this type will be used as Context type as well
// that's why it is placed in a separate file in order to prevent dependency cycle

export interface GameCardProps extends Game {
  onLikePress: (game: Pick<Game, "id" | "likeCount" | "title">) => void;
  onImagePress?: (imageUrl: string) => void;
  onWikipediaPress?: (wikipediaUrl: string) => void;
  isCollapsed?: boolean;
  toggleCollapse: () => void;
  onAnimationEnd: () => void;
  shouldAnimate: boolean;
}

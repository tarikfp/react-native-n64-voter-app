export interface Game {
  // id of the game
  readonly id: number;
  // title of the game
  readonly title: string;
  // description of the game
  readonly description: string;
  // image url of the game
  readonly imageUrl: string;
  // total like count of the game
  readonly likeCount: number;
  // game developer name
  readonly developer: string;
  // wikipedia url of the game
  readonly wikipedia: string;
  // genre the game
  readonly genre: Array<string>;
}

export interface UpdateGame {
  // game id
  id: number;
  // game partial body
  body: Partial<Game>;
}

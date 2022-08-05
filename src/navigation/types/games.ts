import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteNames } from "../route-names";

// Games stack
export type GamesStackParamList = {
  [RouteNames.games]: undefined;
};

// Games stack navigation prop
export type GamesStackNavigationProp<T extends keyof GamesStackParamList> =
  StackNavigationProp<GamesStackParamList, T>;

// Games stack route prop
export type GamesStackRouteProp<T extends keyof GamesStackParamList> =
  RouteProp<GamesStackParamList, T>;

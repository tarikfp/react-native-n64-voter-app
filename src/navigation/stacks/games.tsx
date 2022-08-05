import * as React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationEventMap,
} from "@react-navigation/stack";
import { GamesStackParamList } from "@/navigation/types";
import { GamesScreen } from "@/screens/games";
import { RouteConfig, StackNavigationState } from "@react-navigation/native";
import { RouteNames } from "../route-names";

const Stack = createStackNavigator<GamesStackParamList>();

const gamesStackRoutes: Array<
  RouteConfig<
    GamesStackParamList,
    keyof GamesStackParamList,
    StackNavigationState<GamesStackParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >
> = [
  {
    name: RouteNames.games,
    component: GamesScreen,
    options: { headerTitle: "Nintendo Games" },
  },
];

function GamesStack() {
  return (
    <Stack.Navigator initialRouteName={RouteNames.games}>
      {gamesStackRoutes.map((routes) => (
        <Stack.Screen key={routes.name} {...routes} />
      ))}
    </Stack.Navigator>
  );
}

export default GamesStack;

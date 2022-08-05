import * as React from "react";
import GamesStack from "./stacks/games";

function RootNavigator() {
  // Normally business logic for authentication would locate here...
  return <GamesStack />;
}

export default RootNavigator;

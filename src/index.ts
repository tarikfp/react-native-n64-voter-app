import { AppRegistry } from "react-native";
import "reflect-metadata";
import { name as appName } from "../app.json";
import App from "./app";
import "./config/setup-debug";

AppRegistry.registerComponent(appName, () => App);

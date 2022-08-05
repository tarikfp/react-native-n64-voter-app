import { Alert } from "react-native";
import { QueryClient } from "@tanstack/react-query";
import { default as ErrorService } from "../api/error/error-service";

// since json-server is used and there is no any "REAL" server now, lets display simple alert for now in case of errors

// display alert only if its not an network error
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      notifyOnChangeProps: "all",
      onError: (err) => {
        if (!ErrorService.isNetworkError(err)) {
          Alert.alert(
            "Warning",
            "An unknown error occurred while executing queries",
          );
        }
      },
    },
    mutations: {
      onError: (err) => {
        if (!ErrorService.isNetworkError(err)) {
          Alert.alert(
            "Warning",
            "An unknown error occurred while executing mutations",
          );
        }
      },
    },
  },
});

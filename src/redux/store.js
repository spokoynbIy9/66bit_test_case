import { configureStore } from "@reduxjs/toolkit";
import workersReducer from "./workersSlice";
import workerReducer from "./workerSlice";
import { composeWithDevTools } from "redux-devtools-extension";
export const store = configureStore(
  {
    reducer: {
      workers: workersReducer,
      worker: workerReducer,
    },
  },
  composeWithDevTools()
);

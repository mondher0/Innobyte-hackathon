import { configureStore } from "@reduxjs/toolkit";
import test from "./features/test";
test;
export const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    testingSlice: test,
  },
});

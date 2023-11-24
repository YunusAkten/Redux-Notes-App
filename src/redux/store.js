import { configureStore } from "@reduxjs/toolkit";
import { notesSlicer } from "./notesSlicer";

export const store = configureStore({
  reducer: {
    notes: notesSlicer.reducer,
  },
});

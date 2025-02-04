import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice"; // Se till att detta är rätt importväg

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

// Skapa initialt state
const initialState = {
  darkMode: false, // Börjar i ljust läge
};

// Skapa en slice för temat
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode; // Växlar mellan true/false
    },
  },
});

// ✅ Rätt sätt att exportera actions och reducer
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

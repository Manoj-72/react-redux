import { createSlice } from "@reduxjs/toolkit";

const initialValue = { themeColor: "light", checked: false };

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
    changeChecked: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { theme } = themeSlice.actions;
export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};
const inputSlice = createSlice({
  name: "inputValue",
  initialState,
  reducers: {
    saveInput: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { saveInput } = inputSlice.actions;
export default inputSlice.reducer;

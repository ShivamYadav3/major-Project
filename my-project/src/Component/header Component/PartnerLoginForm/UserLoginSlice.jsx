// src/redux/authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const UserLoginSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
  },
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setUserUniqueId: (state, action) => {
        state.userUniqueId = action.payload;
      },
      setUserName: (state, action) => {
        state.userName = action.payload;
      },
  },
});

export const { setIsLogin,setUserUniqueId, setUserName} = UserLoginSlice.actions;

export default UserLoginSlice.reducer;

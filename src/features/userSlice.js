import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      isLoggedIn: false,
      email: null,
      uid: null,
    },
  },
  reducers: {
    login(state, action) {
      state.user.isLoggedIn = true;
      state.user.email = action.payload.email;
      state.user.uid = action.payload.uid;
    },
    logout(state) {
      state.user.isLoggedIn = false;
      (state.user.uid = null), (state.user.email = null);
    },
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;

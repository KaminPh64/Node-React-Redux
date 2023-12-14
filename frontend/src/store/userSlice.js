import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "mik_",
  user: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state , action) => {
      state.value = "Login";
      state.user = action.payload;
    },
    logout: (state) => {
      state.value = "Kamin Logout";
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;

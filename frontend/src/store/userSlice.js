import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "mik_",
  user: "Kamin_",
};

export const userSlice = createSlice({
  name: "Kamin Ph",
  initialState,
  reducers: {
    login: (state) => {
      state.value = "mik Login";
      state.user = "Kamin Login";
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

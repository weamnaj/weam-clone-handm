import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loggedInUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = state.users.find(
        (user) => user.email === email && user.password === password
      );
      if (foundUser) {
        state.loggedInUser = foundUser;
      }
    },
    logoutUser: (state) => {
      state.loggedInUser = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
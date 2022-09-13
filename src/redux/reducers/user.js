/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  isSignedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userId = action.payload;
      state.isSignedIn = true;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;

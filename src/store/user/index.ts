import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
  },
  reducers: {
    add(state) {
      state.value += 1;
    },
  },
});

export default userSlice.reducer;

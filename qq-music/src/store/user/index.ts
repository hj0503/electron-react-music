import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    cookie: '',
    profile: { avatarUrl: null, nickname: '未登录', userId: 0, description: '' },
  },
  reducers: {},
});

export default userSlice.reducer;

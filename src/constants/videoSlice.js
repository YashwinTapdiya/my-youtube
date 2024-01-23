import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoList: [],
  },
  reducers: {
    fillVideo: (state, action) => {
      state.videoList = action.payload;
    },
  },
});

export const {fillVideo} = videoSlice.actions;

export default videoSlice.reducer;
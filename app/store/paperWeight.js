import { createSlice } from "@reduxjs/toolkit";

export const weightSlice = createSlice({
  name: "paperWeight",
  initialState: {
    weight: 6670
  },
  reducers: {
    changeWeight: (state, action) =>{
      state.weight = action.payload;
    }
  }
});

export const { changeWeight } = weightSlice.actions;

export default weightSlice.reducer;
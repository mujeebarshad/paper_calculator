import { createSlice } from "@reduxjs/toolkit";

const grammageOptions = [
  { id: 1, name: 'DIN A', value: 10 },
  { id: 2, name: 'DIN B', value: 5 },
  { id: 3, name: 'DIN C', value: 15 },
  { id: 4, name: 'DIN D', value: 20 },
  { id: 5, name: 'US Formate', value: 25 },
  { id: 6, name: 'JIS B', value: 30 },
  { id: 7, name: 'Custom' }
];

const pageFormats = [
  { id: 1, name: 'A2', length: 10, width: 5 },
  { id: 2, name: 'A3', length: 15, width: 10 },
  { id: 3, name: 'A4', length: 10, width: 10 },
  { id: 4, name: 'A5', length: 25, width: 30 },
  { id: 5, name: 'A6', length: 30, width: 35 },
  { id: 6, name: 'DIN LANG', length: 35, width: 40 },
  { id: 7, name: 'Custom' }
];

export const paperSlice = createSlice({
  name: "paperAttribute",
  initialState: {
    noOfSheets: 3,
    grammageValue: 10,
    grammageIndex: 0,
    pageSize: 3,
    paperLength: 10,
    paperWidth: 10
  },
  reducers: {
    increment: (state) => {
      state.noOfSheets += 1;
    },
    decrement: (state) => {
      state.noOfSheets -= 1;
    },
    changeByAmount: (state, action) =>{
      if(isNaN(action.payload)){
        state.noOfSheets = 0;
      }else{
        state.noOfSheets = action.payload;
      }
    },
    updateGrammage: (state, action) => {
      state.grammageIndex = action.payload;
      if(grammageOptions[action.payload].name !== "Custom")
        state.grammageValue = grammageOptions[action.payload].value;
    },
    updateGrammageFromSlider: (state, action) => {
      state.grammageIndex = 6;
      state.grammageValue = action.payload;
    },
    updatePageLength: (state, action) => {
      state.paperLength = action.payload;
      state.pageSize = 7; //Custom Page size
    },
    updatePageWidth: (state, action) => {
      state.paperWidth = action.payload;
      state.pageSize = 7; //Custom Page size
    },
    updatePageSize: (state, action) => {
      state.pageSize = action.payload;
      state.paperLength = pageFormats[action.payload].length;
      state.paperWidth = pageFormats[action.payload].width ;
    }
  }
});

export const { changeByAmount, decrement, increment, updateGrammage, updateGrammageFromSlider, updatePageLength, updatePageWidth, updatePageSize } = paperSlice.actions;

export default paperSlice.reducer;
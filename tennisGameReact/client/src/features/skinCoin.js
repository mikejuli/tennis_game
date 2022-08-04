import {createSlice} from '@reduxjs/toolkit';

export const skinSliceCoin = createSlice({
  name: 'coin',
  initialState: { value: "1234"},
  reducers: {


    buyItem: (state,action)=>{

state.value = action.payload;

    }

  }
})


export const {buyItem} = skinSliceCoin.actions;

export default skinSliceCoin.reducer;
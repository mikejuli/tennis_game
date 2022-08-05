import {createSlice} from '@reduxjs/toolkit';

export const skinSliceItem = createSlice({
  name: 'skins',
  initialState: {value :{common : false, rare: false, epic: false, legendary: false,mythic: false }},

  reducers: {


    updateItem: (state,action)=>{

state.value = action.payload;

    }

  }
})


export const {updateItem} = skinSliceItem.actions;

export default skinSliceItem.reducer;
import {createSlice} from '@reduxjs/toolkit';

export const skinSliceItem = createSlice({
  name: 'skins',
  initialState: {value :{common : false, rare: false, epic: false, legendary: false,mythic: false },
  description:{

    common:' hello here is description for common',
    rare:' hello here is description for rare',
    epic:' hello here is description for epic',
    legendary:' hello here is description for legendary',
    mythic:' hello here is description for mythic'



  }},

  reducers: {


    updateItem: (state,action)=>{

state.value = action.payload;

    }

  }
})


export const {updateItem} = skinSliceItem.actions;

export default skinSliceItem.reducer;
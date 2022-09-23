import {createSlice} from '@reduxjs/toolkit';

export const skinSliceItem = createSlice({
  name: 'skins',
  initialState: {value :{common : false, rare: false, epic: false, legendary: false,mythic: false },
  description:{

    common:' most regular plate, you\'ve got nothing but your look, anyway it looks great!',
    rare:' pretty rare plate but  has nothing but impressive looking, good adding for your game.',
    epic:' let\'s bring some good benefits for epic skin (permanent attack +1)',
    legendary:' fabled heroes was really good at using this weapon so are you!(permanent attack +1)',
    mythic:' only chosen had knowledge about this plate! If you have one, no doubts, you\'re one of us (attack +2)'



  }},

  reducers: {


    updateItem: (state,action)=>{

state.value = action.payload;

    }

  }
})


export const {updateItem} = skinSliceItem.actions;

export default skinSliceItem.reducer;
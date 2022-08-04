import {createSlice} from '@reduxjs/toolkit';

export const skinSlice = createSlice({
  name: 'skin',
  initialState: { value: "legendary"},
  reducers: {



    skin: (state,action)=> {

      state.value = action.payload;

    }
  }
})

//export const {skin} = skinSlice.actions;

console.log(skinSlice)


export default skinSlice.reducer;
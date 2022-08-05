import {createSlice} from '@reduxjs/toolkit';

export const skinSlice = createSlice({
  name: 'skin',
  initialState: { value: "default"},
  reducers: {



    setSkin: (state,action)=> {

      state.value = action.payload;

    },



  }
})



export const {setSkin} = skinSlice.actions;


console.log(skinSlice)


export default skinSlice.reducer;
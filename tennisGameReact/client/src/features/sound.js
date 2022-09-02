import {createSlice} from '@reduxjs/toolkit'

const soundsSlice = createSlice({

name: 'sound',
initialState: {value: true},
reducers: {


  setSound: (state,action)=>{

    state.value = action.payload;
  }

}


})

export const {setSound} = soundsSlice.actions;


export default soundsSlice.reducer;
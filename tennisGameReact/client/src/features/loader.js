import {createSlice} from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: { value: 0, },
  reducers: {


    setLoader: (state,action)=>{

state.value = action.payload;

    }

  }
})


export const {setLoader} = loaderSlice.actions;

export default loaderSlice.reducer;
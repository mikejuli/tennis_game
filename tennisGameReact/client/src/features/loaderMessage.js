import {createSlice} from '@reduxjs/toolkit';

export const loaderMessageSlice = createSlice({
  name: 'loaderMessage',
  initialState: { value: 'loading...', },
  reducers: {


    setLoaderMessage: (state,action)=>{

state.value = action.payload;

    }

  }
})


export const {setLoaderMessage} = loaderMessageSlice.actions;

export default loaderMessageSlice.reducer;
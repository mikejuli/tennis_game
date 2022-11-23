import {createSlice} from '@reduxjs/toolkit'


export const ultimateSlice = createSlice({

name: 'ultimate',
initialState: {value: 0},
reducers: {

  setUltimate: (state, action)=>{

    state.value = action.payload;

  },

}

})


export const {setUltimate} = ultimateSlice.actions;

export default ultimateSlice.reducer;
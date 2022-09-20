import {createSlice} from '@reduxjs/toolkit';

export const itemSlice = createSlice({

  name: 'item',
  initialState: {value:{

    onfire: {value: 0, max: 1},
    shooting: {value: 0, max: 3},
    flying: {value: 0, max: 1},
    ball: {value: 0, max: 5},
    bigPlate: {value: 0, max: 9}}},

  reducers: {


    setItem: (state,action)=>{


      //it's not the best way how we can change our reducers, but insted of making 5 dif refucers I decided to  change this line this way.

      state.value[Object.keys(action.payload)[0]].value = Object.values(action.payload)[0]


    }

  }

})

export const {setItem} = itemSlice.actions;

export default itemSlice.reducer;
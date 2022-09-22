import {createSlice} from '@reduxjs/toolkit';

export const itemSlice = createSlice({

  name: 'item',
  initialState: {value:{

    onfire: {value: 0, max: 1,description: 'your ball flies through all bricks'},
    shooting: {value: 0, max: 3,description: 'your plate\'s got gun(every next upgrade gives you +1 attack)'},
    flying: {value: 0, max: 1, description: 'your plate is flying now'},
    ball: {value: 0, max: 5, description: 'your ball gets stronger and stronger (+1 damage every next upgrage)'},
    bigPlate: {value: 0, max: 9, description: 'your plate size is increasing (+5 every next update)'}}},

  reducers: {


    setItem: (state,action)=>{


      //it's not the best way how we can change our reducers, but insted of making 5 dif refucers I decided to  change this line this way.

      state.value[Object.keys(action.payload)[0]].value = Object.values(action.payload)[0]


    }

  }

})

export const {setItem} = itemSlice.actions;

export default itemSlice.reducer;
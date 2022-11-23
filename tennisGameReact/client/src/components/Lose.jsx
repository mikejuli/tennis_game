import React, {useState, useEffect} from 'react';
import SoundPlayer from './SoundPlayer'
import {useDispatch} from 'react-redux'
import {setItem} from '../features/boughtItems'
import Ultimate from './Ultimate'

const Lose = (props) => {

  const dispatch = useDispatch();

  dispatch(setItem({onfire:0}))
  dispatch(setItem({shooting:0}))
  dispatch(setItem({flying:0}))
  dispatch(setItem({ball:0}))
  dispatch(setItem({bigPlate:0}))




  return (
<div>
    <div style = {{visibility: 'hidden'}} > <Ultimate value = {props.currentGold}/></div>

    <div id = 'lose' ><div style ={{position: 'absolute', top: '50px', justifyContent: 'center', width: '100%'}}>You lose</div>
    <SoundPlayer path = 'sounds/mixkit-lose.wav'/>
    <div id = 'buyI' style = {{left: '60px', top: '105px'}} onClick = {()=>{props.handleLose()
    }}>Ok</div>
     </div>

</div>
   )
}

export default Lose;
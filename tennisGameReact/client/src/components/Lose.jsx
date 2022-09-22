import React, {useState, useEffect} from 'react';
import SoundPlayer from './SoundPlayer'
import {useDispatch} from 'react-redux'
import {setItem} from '../features/boughtItems'

const Lose = (props) => {

  const dispatch = useDispatch();

  dispatch(setItem({onfire:0}))
  dispatch(setItem({shooting:0}))
  dispatch(setItem({flying:0}))
  dispatch(setItem({ball:0}))
  dispatch(setItem({bigPlate:0}))

  return (
<div>
    <div id = 'lose' >LOSE
    <SoundPlayer path = 'mixkit-lose.wav'/>
    <button id = 'winButton' onClick = {()=>{props.handleLose()
    }}>Ok</button>
     </div>

</div>
   )
}

export default Lose;
import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {setSound} from '../features/sound'


const SoundsToggle = React.memo((props) => {





const sound = useSelector((state)=>state)

const dispatch = useDispatch();

const toggle = () => dispatch(setSound(!sound.sound.value));

console.log(sound.sound.value);

return (

 <div>

  {props.fromGame?


  <div id = 'menuButton' style = {{width: '50px', height: '50px'}} onClick = {()=>toggle()}>{sound.sound.value? '🔊' : '🔇'}</div>


   :


   <div id = 'menuButton' onClick = {()=>toggle()}>{sound.sound.value? '🔊' : '🔇'}</div>

   }


</div>
)


})

export default SoundsToggle
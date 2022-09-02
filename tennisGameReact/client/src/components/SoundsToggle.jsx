import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {setSound} from '../features/sound'


const SoundsToggle = () => {


const sound = useSelector((state)=>state)

const dispatch = useDispatch();

const toggle = () => dispatch(setSound(!sound.sound.value));

console.log(sound.sound.value);

return (
<div>
<div id = 'menuButton' onClick = {()=>toggle()}>{sound.sound.value? '🔊' : '🔇'}</div>

</div>
)


}

export default SoundsToggle
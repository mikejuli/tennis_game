import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {setSound} from '../features/sound'

const Win = (props) => {

  const [sound, soundPlayed] = useState(true);

  const soundRedux = useSelector((state)=>state)

useEffect(()=>{

  if(soundRedux.sound.value){
    if(sound){

      soundPlayed(false);
      var myAudio = new Audio('mixkit-win.wav');
      myAudio.play();

    }
  }


})

console.log(props.level, props.currentGold)


  return (
<div>
    <div id = 'win' >WIN with gold {props.currentGold}

    <button id = 'winButton' onClick = {()=>{props.handleOff(props.level, props.currentGold)
    }}>Ok</button>
     </div>

</div>
   )
}

export default Win;
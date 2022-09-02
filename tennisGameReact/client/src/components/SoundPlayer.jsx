import React, {useEffect, useState} from 'react'
import {setSound} from '../features/sound'
import {useSelector} from 'react-redux'
import Player from './Player';

const SoundPlayer = (props) => {

  const [sound, soundPlayed] = useState(true);

  const soundRedux = useSelector((state)=>state)

    useEffect(()=>{


      console.log(soundRedux.sound.value, `redux from ${props}`);
      if(soundRedux.sound.value){
        if(sound){
          soundPlayed(false);
          var myAudio = new Audio(props.path);
          myAudio.play();
          console.log(myAudio);
        }
    }




  })





}

export default SoundPlayer;
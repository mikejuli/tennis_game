import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {setSound} from '../features/sound'
import {useDispatch} from 'react-redux'
import {setItem} from '../features/boughtItems'
import WinCoinCounter from './WinCoinCounter'

const Win = (props) => {

  const [sound, soundPlayed] = useState(true);

  const soundRedux = useSelector((state)=>state)

useEffect(()=>{

  if(soundRedux.sound.value){
    if(sound){

      soundPlayed(false);
      var myAudio = new Audio('sounds/mixkit-win.wav');
      myAudio.play();

    }
  }


})

const dispatch = useDispatch();

dispatch(setItem({onfire:0}))
dispatch(setItem({shooting:0}))
dispatch(setItem({flying:0}))
dispatch(setItem({ball:0}))
dispatch(setItem({bigPlate:0}))

console.log(props.level, props.currentGold)


  return (
<div>
    <div id = 'win'>

      <div style ={{position: 'absolute', top: '20px', justifyContent: 'center', width: '100%'}}>
      You win!
      </div>

<div style ={{position: 'absolute', top: '50px', justifyContent: 'center', width: '100%'}}>

    <WinCoinCounter coin = {props.currentGold}/>




</div>

    <div id = 'buyI' style = {{left: '60px', top: '105px'}}  onClick = {()=>{props.handleOff(props.level, props.currentGold)
    }}>Ok</div>
     </div>

</div>
   )
}

export default Win;
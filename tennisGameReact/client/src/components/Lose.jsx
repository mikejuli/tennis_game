import React, {useState, useEffect} from 'react';
import SoundPlayer from './SoundPlayer'

const Lose = (props) => {

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
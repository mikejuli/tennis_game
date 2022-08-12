import React, {useState, useEffect} from 'react';


const Lose = (props) => {

const [sound, soundPlayed] = useState(true);


  useEffect(()=>{

    if(sound){
      soundPlayed(false);
    var myAudio = new Audio('mixkit-lose.wav');
    myAudio.play();
    }
  })

  return (
<div>
    <div id = 'lose' >LOSE

    <button id = 'winButton' onClick = {()=>{props.handleLose()
    }}>Ok</button>
     </div>

</div>
   )
}

export default Lose;
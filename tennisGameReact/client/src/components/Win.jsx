import React, {useState, useEffect} from 'react';


const Win = (props) => {


console.log(props.level, props.currentGold)

useEffect(()=>{
  var myAudio = new Audio('mixkit-win.wav');


  myAudio.play();

})


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
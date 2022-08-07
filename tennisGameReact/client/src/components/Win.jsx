import React, {useState, userEffect} from 'react';


const Win = (props) => {


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
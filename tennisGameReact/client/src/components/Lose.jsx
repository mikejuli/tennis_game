import React, {useState, userEffect} from 'react';


const Lose = (props) => {




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
import React, {useState} from 'react';


const GameBar = (props) => {

  var color;
  var backgroundImage;

  switch(props.skillButton){

    case 'common' :
      color = 'green'
      backgroundImage = 'SkillButton1.png'
      break;
    case 'rare' :
      color = 'blue'
      backgroundImage = 'SkillButton3.png'
      break;
    case 'legendary' :
      color = 'gold'
      backgroundImage = 'SkillButton4.png'
      break;
    case 'epic' :
      color = '#e422e4'
      backgroundImage = 'SkillButton2.png'
      break;
    case 'mythic' :
      color = '#00BCFB'
      backgroundImage = 'SkillButton5.png'
      break;
    case 'default' :
      color = 'rgb(169 252 74)';
      break;
    default:
      color = 'rgb(169 252 74)';

  }



  return (
    <div className='container'>

      <div id = 'BarMenuIn'>




  <div id = 'skin' style = {{backgroundImage: `url(./${backgroundImage})`, backgroundColor: color, width: '50px', height: '50px', top: '5px', left: '140px', position:'absolute', backgroundSize:'100%',borderRadius:'50%', backgroundRepeat: 'no-repeat'}}></div>


<div style = {{position:'absolute',left:'200px', borderRadius:'50%', webkitBorderRadius: '15px', backgroundColor:'yellow', width: '220px', overflow: 'hidden', top: '15px'}}>

<div id = 'currentLvl' style = {{width: '100px', textAlign: 'left',paddingLeft: '10px', height: '30px', lineHeight:'30px'}}> {props.level}/50</div>


  <div id = 'gold' style = {{width: '110px', textAlign: 'right', lineHeight:'30px'}}> {props.gold}


  <img src="coin1.png"  style = {{width: '20px', height: '20px', top: '5px',position: 'relative'}}></img>
  </div>
</div>

      <div style = {{position: 'absolute',backgroundImage: `url('./${props.character}.png')`, width:'50px', height: '50px',backgroundSize:'100%',borderRadius:'50%', left: '285px', top: '5px'}}></div>



<div id = 'skillsInS' style = {{display:'flex', position: 'absolute', left:'430px', backgroundColor: 'yellow', borderRadius:'50%', webkitBorderRadius: '15px',top: '15px', overflow: 'hidden'}}>

  <div id = 'bigPlate' style = {{backgroundColor:'rgb(255 252 55 / 1)'}}><div>➖</div>{props.platePoint?<div>{props.platePoint}</div>:<div>0</div>}</div>

  <div id = 'bigBall'  style = {{backgroundColor:'rgb(209 206 35)'}}><div>⚪</div> {props.ballPoint?<div>{props.ballPoint}</div>:<div>0</div>}
  </div>

  <div id = 'flying'  style = {{backgroundColor:'rgb(177 175 19)'}}> <div>🚀</div> {props.flight?<div>1</div>:<div>0</div>}
  </div>

  <div id = 'shooting'  style = {{backgroundColor:'rgb(139 137 7)'}}><div>☄</div> {props.gun?<div>1</div>:<div>0</div>}
  </div>

  <div id = 'onFire'  style = {{backgroundColor:'rgb(98 96 2)'}}><div>🏹</div> {props.onFire?<div>1</div>:<div>0</div>}
  </div>
</div>


</div>

    </div>
  );
};

export default GameBar;
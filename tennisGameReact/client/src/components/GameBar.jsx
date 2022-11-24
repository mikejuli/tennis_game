import React, {useState} from 'react';
import SoundsToggle from './SoundsToggle'

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

    <div id = 'soundToggleInGame' ><SoundsToggle fromGame = {true}/></div>

  <div id = 'skin' style = {{backgroundImage: `url(./images/${backgroundImage})`, backgroundColor: color}}></div>


<div id = 'avatarInGame' >

<div id = 'currentLvl' > {props.level}/50</div>


  <div id = 'gold' style = {{width: '110px', textAlign: 'right', lineHeight:'30px'}}> {props.gold}


  <img src="/images/coin1.png"  style = {{ width: '20px', height: '20px', top: '5px',position: 'relative' }}></img>
  </div>
</div>

      <div id = 'avatarPicture' style = {{backgroundImage: `url('./images/${props.character}.png')`, animation: props.ultimate? 'glowing 2s infinite': 'none'}}></div>


<div id = 'skillsInS'>

  <div id = 'bigPlate' style = {{backgroundColor:'rgb(255 252 55 / 1)'}}><div>➖</div>{props.platePoint?<div>{props.platePoint}</div>:<div>0</div>}</div>

  <div id = 'bigBall'  style = {{backgroundColor:'rgb(209 206 35)'}}><div>⚪</div> {props.ballPoint?<div>{props.ballPoint}</div>:<div>0</div>}
  </div>

  <div id = 'flying'  style = {{backgroundColor:'rgb(177 175 19)'}}> <div>🚀</div> {props.flight?<div>1</div>:<div>0</div>}
  </div>

  <div id = 'shooting'  style = {{backgroundColor:'rgb(139 137 7)'}}><div>🏹</div> {props.gun?<div>{props.gun}</div>:<div>0</div>}
  </div>

  <div id = 'onFire'  style = {{backgroundColor:'rgb(98 96 2)'}}><div>☄</div> {props.onFire?<div>1</div>:<div>0</div>}
  </div>
</div>


</div>

    </div>
  );
};

export default GameBar;
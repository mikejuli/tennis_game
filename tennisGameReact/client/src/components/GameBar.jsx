import React, {useState} from 'react';


const GameBar = (props) => {

  const [value, inc] = useState(0);


  React.useEffect(() => {
    window.addEventListener('keydown', (event) => {

      console.log('hello');
      inc(value + 1);

    });
  }, []);


  return (
    <div className='container'>

      <div id = 'BarMenuIn'>

BarMenu

<div id = 'nameAndAvatar'>
  <div id = 'avatar'></div>
  <div id = 'name'>BeaterMike</div>
</div>

<div id = 'baseInfo'>
  <div id = 'gold'> {props.gold} gold &#9748; </div>
<div id = 'currentLvl'>Level 🔝 : {props.level}/50</div>
  <div id = 'skin'>Skin: Common</div>
</div>

<div id = 'skillsIn'>
  <div id = 'bigPlate'>BigPlate ➖</div> {props.platePoint?<div>{props.platePoint}</div>:<div>0</div>}
  <div id = 'bigBall'>bigBall ⚪</div> {props.ballPoint?<div>{props.ballPoint}</div>:<div>0</div>}
  <div id = 'freezing'>frezzing ❄</div>
  <div id = 'flying'>flying 🚀</div> {props.flight?<div>1</div>:<div>0</div>}
  <div id = 'shooting'>shooting☄</div> {props.gun?<div>1</div>:<div>0</div>}
</div>


</div>


    </div>
  );
};

export default GameBar;
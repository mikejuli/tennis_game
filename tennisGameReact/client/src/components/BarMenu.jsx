import React from 'react';


class BarMenu extends React.Component {

  constructor(props){
    super(props);

    this.state = {};

  }



  render(){




    return(<div id = 'BarMenu'>

      BarMenu

      <div id = 'nameAndAvatar'>
        <div id = 'avatar'></div>
        <div id = 'name'>BeaterMike</div>
      </div>

      <div id = 'baseInfo'>
        <div id = 'gold'> {this.props.gold} gold &#9748; </div>
  <div id = 'currentLvl'>Level 🔝 : {this.props.currentLevel}/50</div>
        <div id = 'skin'>Skin: Common</div>
      </div>

      <div id = 'skills'>
        <div id = 'bigPlate'>BigPlate ➖</div>
        <div id = 'bigBall'>bigBall ⚪</div>
        <div id = 'freezing'>frezzing ❄</div>
        <div id = 'flying'>flying 🚀</div>
        <div id = 'shooting'>shooting☄</div>
      </div>


    </div>)

  }


}


export default BarMenu;
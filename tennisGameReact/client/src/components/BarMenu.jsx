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
  <div id = 'name'>BeaterMike {this.props.user}</div>
      </div>
      <button onClick={this.props.handleLogout}>logout</button>
      <div id = 'baseInfo'>
        <div id = 'gold'> {this.props.gold} gold &#9748; </div>
  <div id = 'currentLvl'>Level 🔝 : {this.props.currentLevel}/50</div>
        <div id = 'skin'>Skin: Common</div>
      </div>

      <div id = 'skills'>
        <div id = 'bigPlate'>BigPlate ➖ </div>

        <button class='buttonBuy' onClick={()=>{this.props.buyItem(1000,'bigPlate');

        var next = document.getElementById('scale').firstElementChild;
        for(var i = 0; i < this.props.bigPlate+1;i++){

          next.style.backgroundColor = 'rgb(62, 250, 72)';
          next = next.nextSibling;
        }

        }} > buy 1000</button>

        <div id = 'scale'>
        <div class = 'checkBox' id = 'checkBox4'></div>
        <div class = 'checkBox' id = 'checkBox4'></div>
        <div class = 'checkBox' id = 'checkBox4'></div>
        <div class = 'checkBox' id = 'checkBox4'></div>
        <div class = 'checkBox' id = 'checkBox4'></div>
        </div>

        <div id = 'bigBall'>bigBall ⚪</div>
        <div id = 'freezing'>frezzing ❄</div>


        <div id = 'flying'>flying 🚀</div>
        <button class='buttonBuy' onClick={()=>{this.props.buyItem(5000,'flying'); document.getElementById('checkBox3').style.backgroundColor = 'rgb(62, 250, 72)';
        document.getElementById('checkBox3').style.animation = 'blinkCheckBox 5s infinite'; }} > buy 5000</button>
        <div class = 'checkBox' id = 'checkBox3'></div>

        <div id = 'shooting'>shooting🏹</div>

        <button class='buttonBuy' onClick={()=>{this.props.buyItem(8000,'shooting'); document.getElementById('checkBox1').style.backgroundColor = 'rgb(62, 250, 72)'}} > buy 8000</button>
        <div class = 'checkBox' id = 'checkBox1'></div>


        <div id = 'onFire'>onFire☄</div>

        <button class='buttonBuy' onClick={()=>{this.props.buyItem(10000,'onfire'); document.getElementById('checkBox2').style.backgroundColor = 'rgb(62, 250, 72)'}} > buy 10000</button>

        <div class = 'checkBox' id = 'checkBox2'></div>



      </div>


    </div>)

  }


}


export default BarMenu;
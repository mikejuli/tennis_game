import React from 'react';
import Skin from './Skin'

class BarMenu extends React.Component {

  constructor(props){
    super(props);

    this.state = {};

  }



  render(){


    return(<div id = 'BarMenu'>

      BarMenu

      <div id = 'nameAndAvatar'>
        <div id = 'avatar' style = {{backgroundImage: `url('./${this.props.character}.png')`}}></div>
  <div id = 'name'>{this.props.character} BeaterMike {this.props.user}</div>
      </div>
      <button onClick={this.props.handleLogout}>logout</button>
      <div id = 'baseInfo' style = {{webKitBorderRadius:'15px', borderRadius: '15px 0px 0px 15px'}}>


        <div id = 'gold' style = {{padding:"5px"}}>
        <div>
        <img src = 'coin.png' style = {{marginLeft:'10px',height:'30px', width:'45px', float: 'left'}}></img></div>

           <div id = 'coinIn' style = {{height:'30px', backgroundColor:'gray', borderRadius:'50%',webkitBorderRadius: '15px', fontColor:'gold', color: 'gold', textAlign:'center', lineHeight: '30px'}}>{this.props.gold}</div>
         </div>


         <div>
      <Skin style = {{float: 'left', height:'40px', width: '40px'}}/>
  <div id = 'currentLvl' style = {{float: 'left', height: '30px', width:'30px', left: '50%',position:"absolute"}}>{this.props.currentLevel}/50</div>
  </div>

      </div>

      {/* <div id = 'skills'>
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



      </div> */}

      <div id = 'skills' >
      <div class = 'skillWrap' id = 'bigPlate'>➖</div>
      <div class = 'skillWrap' id = 'bigBall'>⚪</div>
      <div class = 'skillWrap' id = 'flying'>🚀</div>
      <div class = 'skillWrap' id = 'shooting'>🏹</div>
      <div class = 'skillWrap' id = 'onFire'>☄</div>

      </div>



    </div>)

  }


}


export default BarMenu;
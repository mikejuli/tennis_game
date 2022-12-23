import React from 'react';
import Skin from './Skin'
import Features from './Features'
import Ultimate from './Ultimate'
class BarMenu extends React.Component {

  constructor(props){
    super(props);

    this.state = {moveIn: false};

  }

toggle = () => {

  if(this.state.moveIn == true){

    this.setState({moveIn:false});
    document.getElementById('skills').style = 'left: 150px;';


       }else{document.getElementById('skills').style = 'left: -90px;'; this.setState({moveIn:true})}
  }


  render(){


    return(<div id = 'BarMenu'>



      <div id = 'nameAndAvatar'>
        <div id = 'avatar' style = {{backgroundImage: `url('./images/${this.props.character}.png')`}}></div>

        <Ultimate/>


  <div id = 'name' style = {{paddingRight:'30px'}}>{this.props.user}</div>




      <div id = 'baseInfo' style = {{webKitBorderRadius:'15px', borderRadius: '15px 0px 0px 30px'}}>


        <div id = 'gold' style = {{padding:"5px", position :'relative'}}>
        <div>
        <img src = 'images/coin.png' style = {{marginLeft:'10px',height:'30px', width:'45px', float: 'left'}}></img></div>

           <div id = 'coinIn'>{this.props.gold}</div>
         </div>


         <div>
      <Skin style = {{float: 'left', height:'40px', width: '40px'}} buyItem = {this.props.buyItem}/>

  <div id = 'currentLvl' style = {{float: 'left', left: '21.5%', height: '45px', width:'90px',position: 'absolute', textAlign: 'center', lineHeight: '45px', marginTop: '3px'}}>{this.props.currentLevel}/50</div>

  <div id = 'skillsInBox' >

{/*
  <div id = 'skills' style = {{width:'30px', height:'30px', position:'absolute'}} > */}

<Features buyItem = {this.props.buyItem}/>

{/* <nav class="menuS">
  <input class="menu-togglerS" type="checkbox"/>


<ul>
<li class="menu-itemS">
<a class="fas fa-cat">➖</a>
</li>
<li class="menu-itemS">
<a class="fas fa-cookie-bite" >⚪</a>
</li>
<li class="menu-itemS">
<a class="fab fa-earlybirds" >🚀</a>
</li>
<li class="menu-itemS">
<a class="fab fa-fly">🏹</a>
</li>
<li class="menu-itemS">
<a class ="far fa-gem" >☄</a>
</li>
</ul>




</nav> */}



{/* <div class = 'skillWrap' id = 'bigPlate' onClick = {()=>{console.log(this)}}>➖</div>
<div class = 'skillWrap' id = 'bigBall'>⚪</div>
<div class = 'skillWrap' id = 'flying'>🚀</div>
<div class = 'skillWrap' id = 'shooting'>🏹</div>
<div class = 'skillWrap' id = 'onFire'>☄</div> */}

{/* </div> */}


  </div>

  </div>

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





    </div>)

  }


}


export default BarMenu;
import React from 'react'
import Description from './Description'

class SkinInner extends React.Component {

  constructor(props){
    super(props)
    this.state = {cancel: false}
    this.cancelF = this.cancelF.bind(this);
  }

  cancelF (s){

    this.setState({cancel:s})

  }


componentDidUpdate(prevProps, prevState){


  if(this.state.cancel!==false && document.querySelector('.menu-toggler').checked===false){

      this.setState({cancel:false})
  }

}



  render(){

    var color;

    switch(this.props.changer){

      case 'common' :
        color = 'red'
        break;
      case 'rare' :
        color = 'pink'
        break;
      case 'legendary' :
        color = 'white'
        break;
      case 'epic' :
        color = 'orange'
        break;
      case 'mythic' :
        color = 'yellow'
        break;
      case 'default' :
        color = 'rgb(169 252 74)';
        break;
      default:
        color = 'rgb(169 252 74)';

    }


return(<div>

<div >

<nav class="menu">

<input class="menu-toggler" type="checkbox" style = {{backgroundColor: color}} onClick = {()=>{this.cancelF(false)}}/>


<ul>

<li class="menu-item">
<Description skin = {'common'} price = {1000} cancel = {this.state.cancel} cancelFun = {this.cancelF} color = 'red' changer = {this.props.changer}/>
</li>

<li class="menu-item">
<Description skin = {'rare'} price = {5000} cancel = {this.state.cancel} cancelFun = {this.cancelF} top = {'-50px'} color = 'pink' changer = {this.props.changer}/>
</li>

<li class="menu-item">
<Description skin = {'epic'} price = {10000} cancel = {this.state.cancel} cancelFun = {this.cancelF} top = {'-50px'} color = 'orange' changer = {this.props.changer}/>
</li>
<li class="menu-item">
<Description skin = {'legendary'} price = {20000} cancel = {this.state.cancel} cancelFun = {this.cancelF} top = {'-50px'} color = 'white' changer = {this.props.changer}/>
</li>
<li class="menu-item">
<Description skin = {'mythic'} price = {50000} cancel = {this.state.cancel} cancelFun = {this.cancelF} top = {'-96px'} color = 'yellow' changer = {this.props.changer}/>
</li>
</ul>




</nav>

{/* <div id = 'leftDropDown'>
<div id = 'common' style = {skin.skinArray.value.common?{backgroundColor: 'blue'}:{}} onClick = {()=>{ toggleSetSkin('common')}}>common </div>
<div id = 'rare' style = {skin.skinArray.value.rare?{backgroundColor: 'blue'}:{}} onClick = {()=>{ toggleSetSkin('rare')}}>rare </div>
<div id = 'epic' style = {skin.skinArray.value.epic?{backgroundColor: 'blue'}:{}} onClick = {()=>{ toggleSetSkin('epic')}}>epic </div>
<div id = 'legendary' style = {skin.skinArray.value.legendary?{backgroundColor: 'blue'}:{}} onClick = {()=>{ toggleSetSkin('legendary')}}>legendary </div>
<div id = 'mythic' style = {skin.skinArray.value.mythic?{backgroundColor: 'blue'}:{}} onClick = {()=>{ toggleSetSkin('mythic')}}>mythic </div>
</div>

<div id = 'rightDropDown'>
<div id = 'common' onClick = {()=>{toggle('common', 1000)}}> 1000</div>
<div id = 'rare' onClick = {()=>{toggle('rare',10000)}}> 10000</div>
<div id = 'epic' onClick = {()=>{toggle('epic',50000)}}> 50000</div>
<div id = 'legendary' onClick = {()=>{toggle('legendary',100000)}}> 100000</div>
<div id = 'mythic' onClick = {()=>{toggle('mythic',1000000)}}> 1000000</div>
</div> */}




{/* </div>:<div></div>} */}



{/* <div> */}


</div>

</div>)

  }



}

export default SkinInner;
import React from 'react'
import FeaturesDescription from './FeaturesDescription'

class Features extends React.Component {

  constructor(props){

    super(props)

    this.state = { openedMenu: 'false', inner: {id: false, item: false, price: false}}
    this.openedMenu = this.openedMenu.bind(this)
    this.setItems = this.setItems.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  openedMenu(item){

    this.setState({openedMenu: item})
  }


toggle(){

    console.log(this.state.inner.id)
  var listenerItem = (e) => {

    console.log('listenerItem');

       // console.log(document.querySelector('.menu'));
        if (document.querySelector('#menuSCover').contains(e.target)){
          // Clicked in box
        } else{
          // Clicked outside the box
          document.querySelector(".menu-togglerS").checked = false;
          this.setState({inner:{id:false,item:false,price:false}})
          window.removeEventListener('click', listenerItem);
          console.log('listenerItem been removed');
        }



    }


    window.addEventListener('click', listenerItem);



    if(document.querySelector(".menu-togglerS").checked === false && this.state.inner.id!==false){
      this.setState({inner:{id:false,item:false,price:false}})
    }
  }



  setItems (id,item,price){
    if(id === this.state.inner.id){
     // document.querySelector(".menu-togglerS").checked = false;
      this.setState({inner:{id:false,item:false,price:false}})
    }else this.setState({inner:{id:id,item:item,price:price}})
  }

render(){

return (
<div id = 'menuSCover'>
<nav class="menuS">
  <input class="menu-togglerS" type="checkbox" onClick = {()=>{this.toggle()}}/>

{/* <ul>
<li class="menu-itemS">
<FeaturesDescription id = {'plate'} item = {'➖'} buyItem = {this.props.buyItem} price = {1000} menuFun = {this.openedMenu} openedMenu = {this.state.openedMenu}/>
</li>
<li class="menu-itemS">
<FeaturesDescription id = {'ball'} item = {'⚪'} buyItem = {this.props.buyItem} price = {2000} menuFun = {this.openedMenu} openedMenu = {this.state.openedMenu}/>
</li>
<li class="menu-itemS">
<FeaturesDescription id = {'flight'} item = {'🚀'} buyItem = {this.props.buyItem} price = {3000} menuFun = {this.openedMenu} openedMenu = {this.state.openedMenu}/>
</li>
<li class="menu-itemS">
<FeaturesDescription id = {'shooting'} item = {'🏹'} buyItem = {this.props.buyItem} price = {4000} menuFun = {this.openedMenu} openedMenu = {this.state.openedMenu}/>
</li>
<li class="menu-itemS">
<FeaturesDescription id = {'onFire'} item = {'☄'} buyItem = {this.props.buyItem} price = {5000} menuFun = {this.openedMenu} openedMenu = {this.state.openedMenu}/>
</li>
</ul> */}

  <ul>
<li class="menu-itemS">
<a id="bigPlateMenu" onClick = {()=>{this.setItems('bigPlate','➖',1000)}}>➖</a>
</li>
<li class="menu-itemS">
<a id="ballMenu" onClick = {()=>{this.setItems('ball','⚪',2000)}} >⚪</a>
</li>
<li class="menu-itemS">
<a id="flyingMenu" onClick = {()=>{this.setItems('flying','🚀',3000)}}>🚀</a>
</li>
<li class="menu-itemS">
<a id="shootingMenu" onClick = {()=>{this.setItems('shooting','🏹',4000)}}>🏹</a>
</li>
<li class="menu-itemS">
<a id ="onfireMenu" onClick = {()=>{this.setItems('onfire','☄',5000)}}>☄</a>
</li>
</ul>


</nav>

{this.state.inner.id ? <FeaturesDescription id = {this.state.inner.id} item = {this.state.inner.item} buyItem = {this.props.buyItem} price = {this.state.inner.price} /> : <div></div>}

</div>

)

}


}

export default Features
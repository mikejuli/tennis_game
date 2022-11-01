import React, {useState, useEffect} from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSkin } from "../features/skin";
import { buyItem } from "../features/skinCoin";
import $ from 'jquery';

const Description = (props) => {

  const [menu, setMenu] = useState(false);
  const [changer, setChanger] = useState('');


  const toggle = (selector,price) => {

    //***********************/
    //in case if we want to buy
    //set skin once we bought it
    //uncomment lines bellow
    //**********************/
  var g =  props.buyItem(props.price,'noItem');

  if(g){
    setChanger(selector);
    dispatch(setSkin(selector));}
   dispatch(buyItem(price));
   openMenu();
  };


 const toggleSetSkin = (selector)=>{

  if(skin.skinArray.value[selector]){
    setChanger(selector);
    dispatch(setSkin(selector));

  } else return false

 };


 const openMenu = (checkOpenedMenu) => {




  //implemented double click mechanism to close describtion
  if(checkOpenedMenu && menu===true){console.log('fromcheck');setMenu(false); return}
  props.cancelFun(props.skin);
  setMenu(true);
}


  const skin = useSelector((state)=> state);

  const dispatch = useDispatch();


useEffect(()=>{

  if(props.cancel!==props.skin){setMenu(false)}

})

  return (
<div>
{menu?
  <div id = 'bounce' >
  <a class="desc" onClick = {()=>{ if(props.changer===props.skin){openMenu(true)}; if(toggleSetSkin(props.skin)===false){openMenu(true)}} } style = {skin.skinArray.value[props.skin]?{backgroundSize: 'contain',backgroundPosition: '50% 50%',backgroundImage:`url('./images/${props.skillButton}')`,backgroundColor:props.color}:{backgroundSize: 'contain',backgroundPosition: '50% 50%',backgroundImage:`url('./images/${props.skillButton}')`,backgroundColor:props.color, filter: 'grayscale(80%)' }} ></a>

  <div id = 'description' style = {{top: props.top}}>
  <div style = {{textAlign:'left', padding:'10px 0px 0px 10px'}}>{props.skin}</div>
  <div style = {{color: '#ffde1c', textAlign:'left', fontSize: '16px', padding: '5px 0px 0px 10px'}}>{skin.skinArray.description[props.skin]}</div>

  <div id = 'descSet'  onClick = {()=>{ toggleSetSkin(props.skin)}}>Set </div>
  {skin.skinArray.value[props.skin]?<div></div> : <div id = 'descPrice' onClick = {()=>{toggle(props.skin, props.price)}}><div style = {{position: 'relative', width: '55px', float: 'left'}}>{props.price}</div> <img src = 'images/coin1.png' width = '20px' height = '20px' style= {{marginTop: '3px'}}></img> </div>}


  </div>
  </div>

:
<div>
<a class="desc" style = {skin.skinArray.value[props.skin]?{backgroundSize: 'contain',backgroundPosition: '50% 50%',backgroundImage:`url('./images/${props.skillButton}')`,backgroundColor:props.color, border: 'greenyellow 2px solid'}:{backgroundSize: 'contain',backgroundPosition: '50% 50%',backgroundImage:`url('./images/${props.skillButton}')`,backgroundColor:props.color, filter: 'grayscale(100%)'}} onClick = {()=>{ openMenu(true)}}  onMouseEnter = {()=>{openMenu()}}></a>


</div>


}
</div>

  )

  }

export default Description;
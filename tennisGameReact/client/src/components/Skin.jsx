import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSkin } from "../features/skin";
import { buyItem } from "../features/skinCoin";


const Skin = () => {
  const [changer, setChanger] = useState("default");
  const [menu, setMenu] = useState(false);


  const toggle = (selector,price) => {


    setChanger(selector);
    dispatch(setSkin(selector));
    dispatch(buyItem(price));

  };


  const openMenu = () => {
      setMenu(!menu);
  }

  const skin = useSelector((state)=> state);

  useEffect(() => {
    console.log(skin, '<_!!!!');


  });

  const dispatch = useDispatch();



//const checkBuy = (x) => { skin.some((y)=>y===x)}

console.log(skin, 'from Skin');

  return (
    <div>
      <div id = 'dropDownMenu' style = {{cursor:'pointer'}}onClick = {openMenu}>
        Skin: {changer}
        </div>
        {menu?<div id = 'dropDown' >

        <div id = 'leftDropDown'>
        <div id = 'common' style = {skin.skinArray.value.common?{backgroundColor: 'blue'}:{}}>common </div>
        <div id = 'rare' style = {skin.skinArray.value.rare?{backgroundColor: 'blue'}:{}}>rare </div>
        <div id = 'epic' style = {skin.skinArray.value.epic?{backgroundColor: 'blue'}:{}}>epic </div>
        <div id = 'legendary' style = {skin.skinArray.value.legendary?{backgroundColor: 'blue'}:{}}>legendary </div>
        <div id = 'mythic' style = {skin.skinArray.value.mythic?{backgroundColor: 'blue'}:{}}>mythic </div>
        </div>

        <div id = 'rightDropDown'>
        <div id = 'common' onClick = {()=>{toggle('common', 1000)}}> 1000</div>
        <div id = 'rare' onClick = {()=>{toggle('rare',10000)}}> 10000</div>
        <div id = 'epic' onClick = {()=>{toggle('epic',50000)}}> 50000</div>
        <div id = 'legendary' onClick = {()=>{toggle('legendary',100000)}}> 100000</div>
        <div id = 'mythic' onClick = {()=>{toggle('mythic',1000000)}}> 1000000</div>
        </div>




        </div>:<div>no</div>}



<div>


</div>


    </div>
  );
};

export default Skin;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSkin } from "../features/skin";
import { buyItem } from "../features/skinCoin";
import Description from './Description';
import SkinInner from './SkinInner'

const Skin = () => {
  const [changer, setChanger] = useState('');
  const [menu, setMenu] = useState(false);

  const toggle = (selector,price) => {

    setChanger(selector);
    dispatch(setSkin(selector));
    dispatch(buyItem(price));
    openMenu();
  };


 const toggleSetSkin = (selector)=>{

  if(skin.skinArray.value[selector]){
    setChanger(selector);
    dispatch(setSkin(selector));
    openMenu();
  }

 };


  const openMenu = () => {
      setMenu(!menu);
  }


  const skin = useSelector((state)=> state);

  const initialCheck = () => {

    if(skin.skin.value!==changer){
      setChanger(skin.skin.value)
    }

  }


  useEffect(() => {
    console.log(skin.skin.value, '<_!!!!');
    initialCheck();

  });

  const dispatch = useDispatch();



//const checkBuy = (x) => { skin.some((y)=>y===x)}

console.log(skin, 'from Skin');

  return (
    <div style = {{width:'30px', height:'30px', position:'absolute'}}>
      {/* <div id = 'dropDownMenu' style = {{cursor:'pointer'}}onClick = {openMenu}>
   {changer}  { menu? <h7>🔼</h7>:<h7>🔽</h7> }
        </div> */}
        {/* {menu? */}
      <SkinInner menu = {menu}/>


    </div>
  );
};

export default Skin;

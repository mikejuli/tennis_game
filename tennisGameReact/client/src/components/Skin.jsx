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

  useEffect(() => {
    console.log(changer);
  });

  const dispatch = useDispatch();

  //  const skin = useSelector((state)=> state);



  return (
    <div>
      <div id = 'dropDownMenu' style = {{cursor:'pointer'}}onClick = {openMenu}>
        Skin: {changer}
        </div>
        {menu?<div id = 'dropDown' >

        <div id = 'leftDropDown'>
        <div id = 'common' >common </div>
        <div id = 'rare' >rare </div>
        <div id = 'epic' >epic </div>
        <div id = 'legendary' >legendary </div>
        <div id = 'mythic' >mythic </div>
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

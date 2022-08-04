import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSkin } from "../features/skin";

const Skin = () => {
  const [changer, setChanger] = useState("default");
  const [menu, setMenu] = useState(false);

  const toggle = (selector) => {


    setChanger(selector);
    dispatch(setSkin(selector));
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

        <div id = 'common' onClick = {()=>{toggle('common')}}>common</div>
        <div id = 'rare' onClick = {()=>{toggle('rare')}}>rare</div>
        <div id = 'epic' onClick = {()=>{toggle('epic')}}>epic</div>
        <div id = 'legendary' onClick = {()=>{toggle('legendary')}}>legendary</div>
        <div id = 'mythic' onClick = {()=>{toggle('mythic')}}>mythic</div>




        </div>:<div>no</div>}



<div>


</div>


    </div>
  );
};

export default Skin;

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSkin } from "../features/skin";

const Skin = () => {
  const [changer, setChanger] = useState("default");
  const [menu, setMenu] = useState(false);

  const toggle = () => {
    var g = document.getElementById("selectSkin").options[
      document.getElementById("selectSkin").selectedIndex
    ].text;

    setChanger(g);
    dispatch(setSkin(g));
  };


  const openMenu = () => {
      setMenu(!menu);
  }

  useEffect(() => {
    console.log(changer);
  });

  const dispatch = useDispatch();

  //const skin = useSelector((state)=> state.skin.value);

  return (
    <div>
      <div id = 'dropDownMenu' onClick = {openMenu}>
        Skin: {changer}
        </div>
        {menu?<div>

          <option>common</option>
        <option>rare</option>
        <option>epic</option>
        <option>legendary</option>
        <option>mythic</option>



        </div>:<div>no</div>}



<div>


</div>


    </div>
  );
};

export default Skin;

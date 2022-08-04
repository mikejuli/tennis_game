import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux';

const Skin = () => {
  const [changer, setChanger] = useState("default");

  const toggle = () => {
    var g = document.getElementById("selectSkin").options[
      document.getElementById("selectSkin").selectedIndex
    ].text;
    setChanger(g);
  };

  useEffect(() => {
    console.log(changer);
  });

  const skin = useSelector((state)=> state.skin.value);
console.log(skin)
  return (
    <div>
      Skin: {skin}
      <select id="selectSkin" onChange={toggle}>
        <option>common</option>
        <option>rare</option>
        <option>epic</option>
        <option>legendary</option>
        <option>mythic</option>
      </select>
    </div>
  );
};

export default Skin;

import React, { useState, useEffect } from "react";
import AppGame from "./AppGame";
import axios from "axios";

const AppCharacter = (props) => {
  const [character, setCharacter] = useState("wizard");
  const [start, setStart] = useState(false);

  const switchCharacter = (character) => {
    setCharacter(character);
  };

  useEffect(()=>{

  //  checkCharacter();

  })

  //if localUser has user -> fetch and check if user has picked user.
  async function getCharacter() {
    var user = localStorage.getItem("user");
    console.log('here');
    axios
      .post(`http://localhost:9000/getUserCharacter`, {
        user: user,
        character: character,
      })
      .then((response) => {
        setStart(true);
        console.log(response.data[0].activeCharacter );
      });

    //setCharacter(response);
    //console.log(response);
  }

  async function checkCharacter() {
    var user = localStorage.getItem("user");
console.log('here');
    axios
      .get(`http://localhost:9000/checkUserCharacter`, {
        params: { user: user },
      })
      .then((response) => {
        if(response.data[0].activeCharacter !== 'none'){
        setStart(true)}
      });

    //setCharacter(response);
    //console.log(response);
  }

  return (
    <div>


      {start ? (
        <AppGame handleLogout={props.handleLogout} character={character} />
      ) : (
        <div>
          {" "}
          <div id="character">{character}</div>
          <div
            id="button"
            onClick={() => {
              switchCharacter("wizard");
            }}
          >
            Wizard
          </div>
          <div
            id="button"
            onClick={() => {
              switchCharacter("golem");
            }}
          >
            Golem
          </div>
          <div
            id="button"
            onClick={() => {
              switchCharacter("gunners");
            }}
          >
            Gunners
          </div>
          <div
            id="next"
            onClick={() => {
              getCharacter();
            }}
          >
            {" "}
            Start the game
          </div>
        </div>
      )}
    </div>
  );
};

export default AppCharacter;

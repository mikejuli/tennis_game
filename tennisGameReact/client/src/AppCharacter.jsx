import React, { useState, useEffect } from "react";
import AppGame from "./AppGame";
import axios from "axios";
import story from './story'
const AppCharacter = (props) => {
  const [character, setCharacter] = useState("wizard");
  const [start, setStart] = useState(false);

  const [text, setText] = useState('');

  const switchCharacter = (character) => {
    setCharacter(character);

    var all = document.getElementsByClassName('sel');

    for (var g of all){
      g.setAttribute('style','border: none')
    }

    document.getElementById(`${character}Button`).setAttribute('style','border: 3px solid gold')

    // var story = {
    //   golem:'golem story',
    //   wizard: 'wizard story',
    //   gunners: 'gunners story'
    // }
    document.getElementById('characterText').setAttribute('style','visibility: visible')

    setText(story[character])
  };

  useEffect(() => {
    //  checkCharacter();
  });

  //if localUser has user -> fetch and check if user has picked user.
  async function getCharacter() {
    var user = localStorage.getItem("user");
    console.log("here");
    axios
      .post(`http://localhost:9000/getUserCharacter`, {
        user: user,
        character: character,
      })
      .then((response) => {
        setStart(true);
        console.log(response.data[0].activeCharacter);
      });

    //setCharacter(response);
    //console.log(response);
  }

  async function checkCharacter() {
    var user = localStorage.getItem("user");
    console.log("here");
    axios
      .get(`http://localhost:9000/checkUserCharacter`, {
        params: { user: user },
      })
      .then((response) => {
        if (response.data[0].activeCharacter !== "none") {
          setStart(true);
        }
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
          <div id="character">
            <div id = 'characterText'>

            &emsp;&emsp;{text}
            </div>

          </div>
          <div id = 'grid'>
          <div
             class = 'sel' id="wizardButton"
            onClick={() => {
              switchCharacter("wizard");

            }}
          >
            {/* Wizard */}
          </div>
          <div
            class = 'sel' id="golemButton"
            onClick={() => {
              switchCharacter("golem");
            }}
          >
            {/* Golem */}
          </div>
          <div
            class = 'sel' id="gunnersButton"
            onClick={() => {
              switchCharacter("gunners");
            }}
          >
            {/* Gunners */}
          </div>
          </div>
          <div id = "nextWrap">
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
        </div>
      )}
    </div>
  );
};

export default AppCharacter;

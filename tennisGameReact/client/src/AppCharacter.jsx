import React, { useState, useEffect } from "react";
import AppGame from "./AppGame";
import axios from "axios";
import story from './story'
const AppCharacter = (props) => {
  const [character, setCharacter] = useState("");
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

    if(character!==''){

    var user = localStorage.getItem("user");
    console.log("here");
    axios
      .post(`https://arcanepong.com:9000/getUserCharacter`, {
        user: user,
        character: character,
      })
      .then((response) => {
        setStart(true);
        console.log(response.data[0].activeCharacter);
      });

    } else {

      var message = document.createElement('div');
      message.setAttribute('id','noEnoughGoldMessage');



      message.setAttribute('style','width: 140px; height: 40px; top: 90%;position: absolute; background-color: #f1d90d; line-height: 40px');
      message.style.left = 'calc(50% - (70px))';
      message.textContent = 'select character'




      var g = document.getElementById('nextWrap');

      g.appendChild(message);



      setTimeout(()=>{ g.removeChild(message);
      },5000)



    }
    //setCharacter(response);
    //console.log(response);
  }

  async function checkCharacter() {
    var user = localStorage.getItem("user");
    console.log("here");
    axios
      .get(`https://arcanepong.com:9000/checkUserCharacter`, {
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
    <div style = {{background: 'linear-gradient(-45deg, #28bebe, #4cc8ee, #23a6d5, #23d5ab)', borderRadius: '10px'}}>
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


          <div id="next" onClick={() => {
              getCharacter();
            }}
          >
            {" "} Start the game
          </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default AppCharacter;

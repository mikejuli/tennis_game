import React, {useState, useEffect} from 'react'


const events = [
  "load",
  "mousemove",
  "mousedown",
  "click",
  "scroll",
  "keypress",
];

const AppLogout = ({children}) => {
  let timer;
  let message;
  let time = 120;

  var messages = document.createElement('div');
  messages.setAttribute('id','logoutMessage');



  messages.setAttribute('style','width: 500px; height: 40px; top: 75%;position: absolute; background-color: #f1d90d; line-height: 40px; text-align: center;  animation-duration: 5s; ');
  messages.style.left = 'calc(50% - (250px))';
  messages.textContent = `You are going to be automatically logout in ${time} minutes`




  var g = document.querySelector('.App');

  var f;

const timerBack = () => {
  time = 60;
  if(f){clearInterval(f)};

   f = setInterval(()=>{
     time = time-1;
    messages.textContent = `You are going to be automaticaly logout in ${time} second`
    //console.log(time)
  },1000)

}


// this function sets the timer that logs out the user after 10 secs
const handleLogoutTimer = () => {

  timer = setTimeout(() => {
    // clears any pending timer.
    resetTimer();
    // Listener clean up. Removes the existing event listener from the window
    Object.values(events).forEach((item) => {
      window.removeEventListener(item, fun);
    });
    clearTimeout(message);


    if(f){clearInterval(f)};
  children.props.handleLogout();
  }, 600000);


  message = setTimeout (()=>{



    g.appendChild(messages);

    }, 540000)



};

// this resets the timer if it exists.
const resetTimer = () => {
  timerBack();
  if (timer) clearTimeout(timer);
  if(message) clearTimeout(message)


  if(g.querySelector('#logoutMessage')) {
    console.log(g.hasChildNodes('messages'));
    g.removeChild(messages);
  }

};

const fun = () => {

  resetTimer();
  handleLogoutTimer();


}

useEffect(() => {



  Object.values(events).forEach((item) => {
    window.addEventListener(item, fun);
  });



}, []);

return children;

};

export default AppLogout;
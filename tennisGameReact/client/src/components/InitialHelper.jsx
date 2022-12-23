import React, {useState, useEffect} from 'react'


const InitialHelper = () => {

  const [clicked, setClicked] = useState(false);
  const [step, setStep] = useState(0);
  const [checked,setChecked] = useState(true);
  const [allowNext,setAllowNext] = useState(true);
  const [desc, setDesc] = useState('Let\'s quickly go through learning')

  const listenerIn1 = () => {

    setAllowNext(true);
    setChecked(false);
    console.log(checked);
    console.log('clicked');
    document.getElementsByClassName('menu-toggler')[0].removeEventListener('click',listenerIn1);

   }

   const listenerIn2 = () => {

    setAllowNext(true);
     setChecked(false);
     console.log(checked);
     console.log('clicked')
     document.getElementsByClassName('menu-toggler')[0].removeEventListener('click',listenerIn2);
    }

  useEffect(()=>{


    switch(step){

      case 1 :

      setAllowNext(false);
      document.getElementById('skinInBox').style.zIndex = '6'
      setDesc('In order to be able to improve your plate use this button and buy skin you preffer. The better skins the more expensive they are.')
      break;


      case 2 :


      setAllowNext(false);
      setChecked(true);
      document.getElementById('skinInBox').style.zIndex = 'auto'
      document.getElementById('skillsInBox').style.zIndex = '6'

      setDesc('Before every singe match you start don\'t forget to stock up on some useful stuff. Buying these features you significantly increase your odds to win.')
      break;

      case 3 :


      document.getElementById('skillsInBox').style.zIndex = 'auto'
      document.getElementById('circlePanel').style.zIndex = '6';
      document.getElementById('circlePanel').style.backgroundColor = 'rgb(247 255 47)';

setDesc('There\'s important one. Every singe brick you get rid of brings score to your ultimate scale. Once you filled it up you get the ultimate that your character owns.')
      break;

      case 4 :
      document.getElementById('circlePanel').style.zIndex = 'auto';
      document.getElementById('circlePanel').style.backgroundColor = 'rgb(107 156 157)';

      document.getElementById('coinIn').style.backgroundColor = 'rgb(252 255 0)';
      document.getElementById('coinIn').style.color = 'black';
      document.getElementById('gold').style.zIndex = '6';

setDesc('Here is just how much gold you have :)')

      break;


      case 5 :

      document.getElementById('gold').style.zIndex = 'auto';
      document.getElementById('coinIn').style.backgroundColor = 'gray';
      document.getElementById('coinIn').style.color = 'gold';

setDesc('All set! Now let\'s play!')

      break;

      case 6 :

      setClicked(true);

      break;


    }


  }, [step]);

  useEffect(()=>{

   var button1 = document.getElementsByClassName('menu-toggler');
   var button2 = document.getElementsByClassName('menu-togglerS');




    button1[0].addEventListener('click', listenerIn1);
    button2[0].addEventListener('click', listenerIn2);

    return ()=>{

  };

  },[])


  const nextStep = () => {

    setStep(step+1);

  }


return (

<div>


{!clicked? <div><div style = {{width: '100%', height: '100%', backgroundColor: 'gray', opacity: '0.7', position: 'absolute', zIndex: '5'}}></div>



<div style = {{zIndex: '5', position: 'absolute', width: '300px', height: '300px', top: '150px', left: '80px', backgroundColor: '#e2e4a1'}}>


{allowNext? <div id = 'buyI' style = {{top: '240px'}}  onClick = {()=> nextStep()}>Next ↠</div> : <div></div>}

<div style = {{ padding:'30px'}}>{desc}</div>

</div>


{step ===1 && checked ? <div id = 'tapIcon' style = {{top: '335px', left: '665px'}}></div> :<div></div>}
{step === 2 && checked ? <div id = 'tapIcon' style = {{top: '335px', left: '765px'}}></div> :<div></div>}






</div>


:<div></div>}


</div>


)


}


export default InitialHelper;
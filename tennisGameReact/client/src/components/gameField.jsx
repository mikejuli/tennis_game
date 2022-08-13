import React, { useState, useEffect } from "react";
import LevelGrid from './levelGrid';
import pattern from './brickPattern';
import GameBar from './GameBar';
import $ from 'jquery';
import Win from './Win';
import Lose from './Lose';
import variables from '../variables.scss';

  class Field extends React.Component {


    constructor(props){
      super(props);

    this.state = ({field:true, level: undefined, pattern: this.props.pattern, gold: 0, attribute: undefined, plate: 100, platePoint:0, ball: 10, ballPoint:0, onfire: false, flight: false, gun: false, flightActual:false, win: false, lose: false})

    this.addGold = this.addGold.bind(this);
    this.addAttribute = this.addAttribute.bind(this);
    this.plateFun = this.plateFun.bind(this);
    this.ballFun = this.ballFun.bind(this);
    this.onfireFun = this.onfireFun.bind(this);
    this.gunFun = this.gunFun.bind(this);
    this.flightBackState = this.flightBackState.bind(this);
    this.flightActual = this.flightActual.bind(this);
    this.loseFun = this.loseFun.bind(this);
  }

    plateFun (cb){ cb(this.state.plate);};
    ballFun(cb) {cb(this.state.ball)}
    onfireFun(cb){cb(this.state.onfire)}
    gunFun(cb){cb(this.state.gun)}
    loseFun(cb){cb(this.state.lose)}

  flightActual(){

    this.setState({flightActual:true});

  }

    addGold(value){

      this.setState({gold: this.state.gold + value})

    }

    addAttribute(value){
      this.setState({attribute: value})
    }





    flightBackState(){
      this.setState({flight:false});

    }

//changed from componentDidmount
    componentDidMount(){

        this.setState({onfire: this.props.onfire})
        this.setState({flight: this.props.flying})
        this.setState({gun: this.props.shooting})
        this.setState({platePoint: this.props.bigPlate, plate: this.state.plate + (this.props.bigPlate*20)})

      if(this.props.skin === 'rare'){
        // document.getElementById('plate').style.background = 'orange'

        document.getElementById('plate').style.background = 'linear-gradient(-135deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)';

          document.getElementById('plate').style.border = 'solid 1px aqua'

      }

    }

    componentDidUpdate( prevProps, prevState){


      if(prevState.attribute!==this.state.attribute){

        if(this.state.attribute==='plate'){
          this.setState({plate:this.state.plate + 20, platePoint:this.state.platePoint+1})
        }

        if(this.state.attribute==='ball'){
          this.setState({ball: this.state.ball + 10, ballPoint:this.state.ballPoint+1});
        }

        if(this.state.attribute==='onfire'){
          this.setState({onfire: true})

        }

        if(this.state.attribute==='flight'){
          this.setState({flight: true , flightActual: true})
        }

        if(this.state.attribute==='gun'){
          this.setState({gun:true})
        }

        if(this.state.attribute==='tnt'){
          this.setState({lose:true})
        }

      }

      var plate = this.state.plate;
      document.getElementById('plate').style.width = plate + 'px';




      if(prevState.plate!==this.state.plate){

        var plate = this.state.plate;
        document.getElementById('plate').style.width = plate + 'px';
      }




      if(prevProps.pattern!== this.props.pattern){




        console.log(prevProps.pattern, this.props.pattern)



      this.setState({level:this.props.level})


      console.log('check');




console.log(pattern);

var height = 480;
var width = 640;





var speed = 4;

var tops = 400;
var lefts = 250;
var cof = 0.8;


Math.Sin = function(w){
  return parseFloat(Math.sin(w).toFixed(5));
};
Math.Cos = function(w){
return parseFloat(Math.cos(w).toFixed(5));
};

var switcherTop = Math.Cos(Math.PI * cof)* speed;
var switcherLeft = Math.Sin(Math.PI * cof)* speed;
var pos = 50;
var coeff = 1;
var firstEnter;
var inMove = 0;

var posY = height-12;


var bulletX, bulletY;



var startDropItem = function(topI,leftI,attributeI){

if(attributeI!==undefined){
  var drop = document.createElement('div');
  var wall = document.getElementById('box');
  wall.appendChild(drop);

var df = setInterval(()=>{


drop.setAttribute('id', 'drop');
drop.setAttribute('style', `top: ${topI}px ; left:${leftI}px; width: 10px; height: 10px `);

if(attributeI==='gun'){
drop.setAttribute('style', `top: ${topI}px ; left:${leftI}px; width: 10px; height: 10px; background-color: white; `);
}

if(attributeI==='onfire'){
drop.textContent = '☄';
}

if(attributeI==='ball'){
drop.textContent = '⚪';
}

if(attributeI==='plate'){
drop.textContent = '➖';
}

if(attributeI==='flight'){
drop.textContent = '🚀';
}

if(attributeI === 'tnt'){
  drop.textContent = '💣';
}



//  drop.textContent = '⚪';
topI = topI + 2;
//leftI = leftI + 1;

    if(topI===500){
      clearInterval(df);
      drop.parentNode.removeChild(drop);
}

    if(leftI>=pos && leftI<=pos+plate  && topI>=posY-5 && topI<=posY){
      clearInterval(df);

      var topInew = topI+10;
      var leftInew = leftI+10;

      if(attributeI === 'tnt'){
        console.log('BOOOOM!',topI,leftI);
        var boom = document.createElement('div');
        boom.setAttribute('id', 'boom');
        boom.setAttribute('style', `top: ${topInew}px ; left:${leftInew}px`);
        var wall = document.getElementById('box');
        wall.appendChild(boom);


        var myAudio = new Audio('mixkit-explosion.wav');
      myAudio.play();


        document.removeEventListener('mousemove',mousemove);
        setTimeout(()=>{addAttribute(attributeI);
        },1000);
      }else {


        addAttribute(attributeI);

      }





      console.log('got it',);

      drop.parentNode.removeChild(drop);

    }


},16.6666667)
}

}


var colorChanger = function (currentBrick){

  var myAudio = new Audio('mixkit.wav');

  //myAudio.play();
  switch (currentBrick.health){

    case 1: currentBrick.style.background = variables.background1; break;
    case 2: currentBrick.style.background = variables.background2; break;
    case 3: currentBrick.style.background = variables.background3; break;
    case 4: currentBrick.style.background = variables.background4; break;
    case 5: currentBrick.style.background = variables.background5; break;


  }


}


var bulletRunning = function(clear,flightBackState){



  var clearBullet = ()=>{
    clearInterval(bul);

    bullet.setAttribute('id','emptyB');

    var elem = document.getElementById("emptyB");
    if(elem){
    elem.parentNode.removeChild(elem);
    }
  }

  var bullet = document.createElement('div');
  var wall = document.getElementById('box');
  if(wall){wall.appendChild(bullet)};


  var bulletX = pos + (plate/2);
  var bulletY = posY;

  var bul = setInterval(()=>{
    //console.log(pos,posY)
  bullet.setAttribute('id', 'bullet');
  bullet.setAttribute('style', `top: ${bulletY}px ; left:${bulletX}px; width: 5px; height: 5px `);



  bulletY = bulletY - 8;



  brickBouncerBullet(bulletX,bulletY,pat,clear,clearBullet,flightBackState);

  if(bulletY<0){
    clearBullet();
  }

  },16.6666667)

};



var ballRunning = function(pat, handleOff,plateFun,ball,ballFun,onfire,onfireFun, gunFun,flightBackState, loseFun){





  var shooting = false;


  inMove = 1;





  var shootingInt;


  var r = setInterval ( ()=>{

   // console.log(shootingInt, 'shootingInt');

    //have to find the way to change it
    var lose;
    loseFun((x)=>{lose =x})
    plateFun( (x) => {plate = x;});
    ballFun((x)=> {ball =x;})
    onfireFun((x)=>{onfire=x;})
    gunFun((x)=>{if(x & (shooting===false)){shooting = true; shootingInt = setInterval( ()=>

      {
         bulletRunning(

          ()=>{ clearInterval(shootingInt); clearInterval(r);}, flightBackState

          )},200)
  }})




    function clear() {document.removeEventListener ('mousemove', mousemove);clearInterval(r);clearInterval(shootingInt)}


  tops = tops+switcherTop;
  lefts = lefts + switcherLeft;

  //  here is suppose to be the way to figure out if the component on fire????? here is some block to prevent errors
if(document.getElementById('ball')){

  document.getElementById('ball').style.height = ball + 'px';
  document.getElementById('ball').style.width = ball + 'px';

  document.getElementById('ball').style.left = lefts + 'px';
  document.getElementById('ball').style.top = tops + 'px';
}

  if(onfire){

    document.getElementById('ball').style.animation = 'blink 1s infinite';

  }


  //some changes
  // if((tops >= height-12-ball) && (pos < lefts + (ball/2)) && (pos + plate > lefts + (ball/2)) ) {

    if((tops >= posY - ball) && (pos < lefts + (ball/2)) && (pos + plate > lefts + (ball/2)) ) {


     // console.log(tops);
    // refactoring this section to async function
    // 1) eventlistener ->-> removelistener -> switcherTop value


    //  var funcEnter = ( (e)=> {


      if(tops >= posY-ball-3 && tops <= posY+2-ball){
       //   console.log(tops);
        firstEnter = pos;}



        // var powerOfTouching = lefts - pos;
        // if(powerOfTouching>=90){ powerOfTouching = 90;}



        if(tops >= posY - ball +6 && tops <= posY-ball+12){

          console.log(pos, firstEnter);
          var powerOfTouching = firstEnter - pos;

          console.log(powerOfTouching, 'powerOfTouching');


          Math.Sin = function(w){
            return parseFloat(Math.sin(w).toFixed(5));
        };
          Math.Cos = function(w){
          return parseFloat(Math.cos(w).toFixed(5));
        };



        if(powerOfTouching <= -30) {

          coeff = 0.6;

          switcherLeft = Math.Sin(Math.PI * coeff )* speed;
          switcherTop = Math.Cos(Math.PI * coeff  )* speed;

        }  else if(powerOfTouching <= -15) {

          coeff = 0.8;

          switcherLeft = Math.Sin(Math.PI * coeff )* speed;
          switcherTop = Math.Cos(Math.PI * coeff )* speed;

        } else if (powerOfTouching >= 30){

          coeff = 1.40;

          switcherLeft = Math.Sin(Math.PI * coeff )* speed;
          switcherTop = Math.Cos(Math.PI * coeff )* speed;

        } else if (powerOfTouching >= 15){

          coeff = 1.20;

          switcherLeft = Math.Sin(Math.PI * coeff )* speed;
          switcherTop = Math.Cos(Math.PI * coeff )* speed;

        }


        else {
          console.log('here-1');
          switcherTop = - switcherTop;


        }


        }


   // switcherTop = -1;

    //document.addEventListener('mousemove', funcEnter)



  //  setTimeout(()=>{ document.removeEventListener('mousemove', func) },500)




 }

  //  if(tops > 380 && (pos < lefts && pos +50 > lefts) ) { switcherTop = -3;}


  //remover after testing
  // if (tops >= 200) {

  //   switcherTop = - Math.sqrt(2);
  //   switcherLeft = 0;




  // }

  if (tops >= height || lose === true){
    //
    //
    //Lose game
    //
    //
    clearInterval (r);
    flightBackState();clear();
    handleLose();
    console.log('lose')}

  if (tops <= 0 ) {
    tops =0;
      switcherTop = -switcherTop;
  }

  if (lefts >= width-ball){
    lefts = width-ball;
    switcherLeft = -switcherLeft;
  }

  if (lefts <= 0) {
    lefts =  0;
    switcherLeft = -switcherLeft;
  }


  brickBouncer(tops,lefts,pat,clear,onfire,1,flightBackState);



} , 16.6666667);



};



var mousemove = (e) => {

  //if e.curenttatget is not box do calculate

  //if(e.clientY>50){var y = e.clientY} else {var y = 50}
  //if(e.clientX>50){var x = e.clientX} else {var x = 50}
   var y = e.clientY ;
   var x = e.clientX -100;


  // if(e.target.id==='box'){

  var flightActual = this.state.flight;
  var flightActualD = this.state.flightActual;


  if(x<=0){pos = 0} else
  if(x<width-plate){
    pos = x;
  }else { pos = width-plate}

  if(flightActual && flightActualD){
  if(y<height-10){
    posY = y;
  }else {
   posY = height-10;
  }
  }

  if(document.getElementById('plate')){
  document.getElementById('plate').style.left = pos + 'px';

  if(flightActual){
  document.getElementById('plate').style.top = posY + 'px';
  }
  }

  if(!inMove){
    document.getElementById('ball').style.left = pos +(plate/2)-(ball/2) + 'px';
    document.getElementById('ball').style.top = height-10-ball + 'px';

    document.getElementById('ball').style.height = ball + 'px';
    document.getElementById('ball').style.width = ball + 'px';



    tops = height-10-ball;
    lefts = pos + (plate/2)-(ball/2);

  }

  // }else{

  //   var y = e.clientY
  //   var x = e.clientX

  //   var flightActual = this.state.flight;
  //   var flightActualD = this.state.flightActual;

  //   if(x<width-plate){
  //     pos = x;
  //   }else { pos = width-plate}

  //   if(flightActual && flightActualD){
  //   if(y<height-10){
  //     posY = y;
  //   }else {
  //    posY = height-10;
  //   }
  //   }

  //   if(document.getElementById('plate')){
  //   document.getElementById('plate').style.left = pos + 'px';

  //   if(flightActual){
  //   document.getElementById('plate').style.top = posY + 'px';
  //   }
  //   }

  //   if(!inMove){
  //     document.getElementById('ball').style.left = pos +(plate/2)-(ball/2) + 'px';
  //     document.getElementById('ball').style.top = height-10-ball + 'px';

  //     document.getElementById('ball').style.height = ball + 'px';
  //     document.getElementById('ball').style.width = ball + 'px';



  //     tops = height-10-ball;
  //     lefts = pos + (plate/2)-(ball/2);

  // }
  // //console.log(pos);

  // }
}

document.addEventListener ('mousemove', mousemove)



var plateFun = this.plateFun;
var ballFun = this.ballFun;
var pat = this.props.pattern;
var handleOff = () => {  this.setState({win: true});  };
var handleLose = () => { this.setState({lose: true});};
var lvl = this.props.level;
var addGold = this.addGold;
var currentGold = this.state.gold;
var addAttribute = this.addAttribute;
var ball = this.state.ball;
var onfire = this.state.onfire;
var onfireFun = this.onfireFun;
var gunFun = this.gunFun;
var updateGold = () => currentGold = this.state.gold;
var flightBackState = this.flightBackState;

var flightActual = this.flightActual;
var loseFun = this.loseFun;

console.log('here is lvl ',lvl);
//console.log(this.props.pattern , 'hereee')



//to prevent immidite fire the ball by click
setTimeout(()=>{



  document.addEventListener('click', function(){

    flightActual();

    if(inMove === 0){
    ballRunning(pat,undefined,plateFun,ball,ballFun,onfire,onfireFun,gunFun,flightBackState,loseFun);

  }






  })


},1000)


var creatingBrick = function (arr){

  //arr[0] is a top value ; arr[1] is a left value

  var newBrick = document.createElement('div');
  newBrick.health = arr[3];
  newBrick.gold = arr[4];
  newBrick.attribute = arr[5];
  newBrick.setAttribute('id', 'brick');

  var background;
  switch (newBrick.health){

    case 1: background = variables.background1; break;
    case 2: background = variables.background2; break;
    case 3: background = variables.background3; break;
    case 4: background = variables.background4; break;
    case 5: background = variables.background5; break;
  }


  newBrick.setAttribute('style', `top: ${arr[0]}px ; left:${arr[1]}px; background: ${background}`);
  // newBrick.textContent = newBrick.health;
  var wall = document.getElementById('wall');
  wall.appendChild(newBrick);

}


var creatingWall = function(pattern){

  for(let x of pattern){

    creatingBrick(x);

  }

}

creatingWall(this.props.pattern);

// document.getElementById('brick').style.top = 140;
// document.getElementById('brick').style.left = 200;




var brickBouncer = function (top,left,bricksArray,clear,onfire, clearBullet,flightBackState){

  //console.log(bulletX,bulletY,'bullet');
  //to prevent the ball go through 2 bricks the same time.
  var switcherLeftWasChanged = false;
  var switcherTopWasChanged = false;

  //console.log('top:',top, '  left:',left);



  var wasChangedDirection = false;



  for( var x=0 ; x< bricksArray.length;x++){

    //if(wasChangedDirection){console.log('break');break;}

    //top side of the brick //-2 moved touch line
    if ((top >= bricksArray[x][0]-ball  && top <= bricksArray[x][0]-ball + 5) &&
        left >= bricksArray[x][1]-ball && left <= bricksArray[x][1]+ 40 + ball/2  )
        {if (switcherTop>0){

          if(!onfire){
          if(!switcherTopWasChanged){
            if(!wasChangedDirection){
            switcherTop = -switcherTop;
            switcherTopWasChanged = true;
            wasChangedDirection = true;
            }
          }
        }

          var currentBrick =  document.getElementById('wall').childNodes[bricksArray[x][2]];

          currentBrick.health--;



        colorChanger(currentBrick);

          //wrong way to change colors
          // currentBrick.textContent = currentBrick.health;

          if(currentBrick.health === 0){
            // currentBrick.textContent = '';
            // console.log('addgold top');

            addGold(currentBrick.gold);

            currentBrick.setAttribute('id', 'empty');


            var topI = bricksArray[x][0];
            var leftI = bricksArray[x][1];;
            var attributeI = bricksArray[x][5];


            bricksArray.splice(x,1);

            startDropItem (topI,leftI,attributeI);
            //if this brick has an item
            //run component



          }


         if(bricksArray.length === 0) {flightBackState();clear();updateGold();handleOff(lvl, currentGold); }
        }


        } else





        ////////////////////////////////////

    //bottom side of the brick  //+2 moved touch line
    if ((top <= bricksArray[x][0]+20 && top >= bricksArray[x][0]+20 - 5) &&
        left >= bricksArray[x][1]-ball && left <= bricksArray[x][1]+ 40 )
        {
          if(switcherTop<0){

          if(!onfire){
          if(!switcherTopWasChanged){
            if(!wasChangedDirection){
            switcherTop = -switcherTop;
            switcherTopWasChanged = true;
            wasChangedDirection = true;
          }
        }
        }




        var currentBrick =  document.getElementById('wall').childNodes[bricksArray[x][2]];

        currentBrick.health--;



      colorChanger(currentBrick);

        //wrong way to change colors
        // currentBrick.textContent = currentBrick.health;

        if(currentBrick.health === 0){
          // currentBrick.textContent = '';
          // console.log('addgold top');

          addGold(currentBrick.gold);

          currentBrick.setAttribute('id', 'empty');

          var topI = bricksArray[x][0];
          var leftI = bricksArray[x][1];;
          var attributeI = bricksArray[x][5];


          bricksArray.splice(x,1);

          startDropItem (topI,leftI,attributeI);
          //if this brick has an item
          //run component

          // in (top,left)

        }




        if(bricksArray.length === 0) {flightBackState();clear();updateGold();handleOff(lvl, currentGold);}
      }
         } else


    //left side of the brick
    if (top >= bricksArray[x][0]-ball && top <= bricksArray[x][0]+20 &&
        (left >= bricksArray[x][1]-ball-5 && left <= bricksArray[x][1]-ball) ) //moved touch line a bit left, to prevent the ball through move
        {
          if(switcherLeft>0){
          if(!onfire){
          if(!switcherLeftWasChanged){
            if(!wasChangedDirection){
            switcherLeft = -switcherLeft;
            switcherLeftWasChanged = true;
            wasChangedDirection = true;
            }
          }
        }



        var currentBrick =  document.getElementById('wall').childNodes[bricksArray[x][2]];

        currentBrick.health--;



      colorChanger(currentBrick);

        //wrong way to change colors
        // currentBrick.textContent = currentBrick.health;

        if(currentBrick.health === 0){
          // currentBrick.textContent = '';
          // console.log('addgold top');

          addGold(currentBrick.gold);

          currentBrick.setAttribute('id', 'empty');

          var topI = bricksArray[x][0];
          var leftI = bricksArray[x][1];;
          var attributeI = bricksArray[x][5];


          bricksArray.splice(x,1);

          startDropItem (topI,leftI,attributeI);
          //if this brick has an item
          //run component

          // in (top,left)

        }



         if(bricksArray.length === 0) {flightBackState();clear();updateGold();handleOff(lvl, currentGold);}
      }
         } else

    //right side of the brick //+2 moved touch line
    if (top >= bricksArray[x][0]-ball && top <= bricksArray[x][0]+20 &&
        (left <= bricksArray[x][1]+40+5 && left >= bricksArray[x][1]+40) )
        {
if(switcherLeft<0){
          if(!onfire){
          if(!switcherLeftWasChanged){
            if(!wasChangedDirection){
            switcherLeft = -switcherLeft;
            switcherLeftWasChanged = true;
            wasChangedDirection = true;
            }
          }
        }

        var currentBrick =  document.getElementById('wall').childNodes[bricksArray[x][2]];

        currentBrick.health--;



      colorChanger(currentBrick);

        //wrong way to change colors
        // currentBrick.textContent = currentBrick.health;

        if(currentBrick.health === 0){
          // currentBrick.textContent = '';
          // console.log('addgold top');

          addGold(currentBrick.gold);

          currentBrick.setAttribute('id', 'empty');

          var topI = bricksArray[x][0];
          var leftI = bricksArray[x][1];;
          var attributeI = bricksArray[x][5];


          bricksArray.splice(x,1);

          startDropItem (topI,leftI,attributeI);
          //if this brick has an item
          //run component

          // in (top,left)

        }


         if(bricksArray.length === 0) {flightBackState();clear();updateGold();handleOff(lvl, currentGold);}
      }
         }



  }

  //console.log(bricksArray);



        //creating the same conditions for all the rest sides, depending where the ball coming from. 4 conditions.

        //adding the way multiply bricks



 // console.log(top, left, x);
}


var brickBouncerBullet = function (bulletX,bulletY,bricksArray,clear,clearBullet,flightBackState){

 // console.log('from brickbouncerbullet');
         //here is squized a shooting module//
        /////////////////////////////////////

        for( var x=0 ; x< bricksArray.length;x++){


        if(bulletY < 0){clearBullet();}


        if ((bulletY <= bricksArray[x][0]+20 && bulletY >= bricksArray[x][0]) &&
        bulletX >= bricksArray[x][1]-2 && bulletX <= bricksArray[x][1]+ 40+2 ){

          clearBullet();

          var currentBrick = document.getElementById('wall').childNodes[bricksArray[x][2]];

          currentBrick.health--;

          colorChanger(currentBrick);

          //console.log(currentBrick.health);

          //  document.getElementById('wall').childNodes[bricksArray[x][2]].textContent = document.getElementById('wall').childNodes[bricksArray[x][2]].health;

          if(currentBrick.health === 0){

           // currentBrick.textContent = '';
           addGold(currentBrick.gold);

           currentBrick.setAttribute('id', 'empty');

           var topI = bricksArray[x][0];
           var leftI = bricksArray[x][1];;
           var attributeI = bricksArray[x][5];


           bricksArray.splice(x,1);

           startDropItem (topI,leftI,attributeI);



          }


        if(bricksArray.length === 0) {document.removeEventListener('mousemove',mousemove);console.log(currentGold);flightBackState();clear();updateGold();handleOff(lvl, currentGold);}


        }

        }


}




    }







        }

    render(){





      return(

        <div>
          GAME!

          <div> level: {this.state.level} </div>

      <div>gold: {this.state.gold}</div>
        <div id = 'inside'>

<div id  = 'boxCover'>
        <div>{this.state.win?<Win handleOff = {this.props.handleOff} level = {this.props.level} currentGold = {this.state.gold} />:<div></div>}</div>
      <div>{this.state.lose?<Lose handleLose = {this.props.handleLose}/>:<div></div>}</div>
        <div id = 'boxS'>
        <div id = 'box'>
            <div id = 'wall'></div>
            <div id = 'ball'></div>
            <div id = 'plate'></div>
        </div></div>
</div>
        <div id ='gamebar'>
          <GameBar character = {this.props.character} gold = {this.state.gold} level = {this.state.level} flight = {this.state.flight} gun = {this.state.gun} ballPoint = {this.state.ballPoint} platePoint = {this.state.platePoint } onFire = {this.state.onfire} user = {this.props.user}/>
        </div>

        </div>

        </div>

      )

    }



  }


  export default Field;
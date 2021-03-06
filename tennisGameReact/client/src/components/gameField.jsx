import React, { useState, useEffect } from "react";
import LevelGrid from './levelGrid';
import pattern from './brickPattern';
import GameBar from './GameBar';
import $ from 'jquery';


  class Field extends React.Component {


    constructor(props){
      super(props);

    this.state = ({field:true, level: undefined, pattern: this.props.pattern, gold: 0, attribute: undefined, plate: 100, platePoint:0, ball: 10, ballPoint:0, onfire: false, flight: false, gun: false, flightActual:false})

    this.addGold = this.addGold.bind(this);
    this.addAttribute = this.addAttribute.bind(this);
    this.plateFun = this.plateFun.bind(this);
    this.ballFun = this.ballFun.bind(this);
    this.onfireFun = this.onfireFun.bind(this);
    this.gunFun = this.gunFun.bind(this);
    this.flightBackState = this.flightBackState.bind(this);
    this.flightActual = this.flightActual.bind(this);

  }

    plateFun (cb){ cb(this.state.plate);};
    ballFun(cb) {cb(this.state.ball)}
    onfireFun(cb){cb(this.state.onfire)}
    gunFun(cb){cb(this.state.gun)}



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


    componentDidMount(){

        this.setState({onfire: this.props.onfire})
        this.setState({flight: this.props.flying})
        this.setState({gun: this.props.shooting})
        this.setState({platePoint: this.props.bigPlate, plate: this.state.plate + (this.props.bigPlate*20)})



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





var speed = 1;

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






var bulletRunning = function(clear,flightBackState){



  var clearBullet = ()=>{
    clearInterval(bul);
    bullet.setAttribute('id','empty');
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

  },20)

};



var ballRunning = function(pat, handleOff,plateFun,ball,ballFun,onfire,onfireFun, gunFun,flightBackState){





  var shooting = false;


  inMove = 1;





  var shootingInt;


  var r = setInterval ( ()=>{

   // console.log(shootingInt, 'shootingInt');

    //have to find the way to change it
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


      console.log(tops);
    // refactoring this section to async function
    // 1) eventlistener ->-> removelistener -> switcherTop value


    //  var funcEnter = ( (e)=> {


      if(tops >= posY-ball && tops <= posY+1-ball){
          console.log(tops);
        firstEnter = pos;}



        // var powerOfTouching = lefts - pos;
        // if(powerOfTouching>=90){ powerOfTouching = 90;}



        if(tops >= posY - ball +6 && tops <= posY-ball+8){

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


  if (tops >= height){ clearInterval (r);}

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



} , 1);




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
var handleOff = this.props.handleOff;
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

console.log('here is lvl ',lvl);
//console.log(this.props.pattern , 'hereee')



//to prevent immidite fire the ball by click
setTimeout(()=>{



  document.addEventListener('click', function(){

    flightActual();

    if(inMove === 0){
    ballRunning(pat,undefined,plateFun,ball,ballFun,onfire,onfireFun,gunFun,flightBackState);

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
  newBrick.setAttribute('style', `top: ${arr[0]}px ; left:${arr[1]}px`);
  newBrick.textContent = newBrick.health;
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

  for( var x=0 ; x< bricksArray.length;x++){


    //top side of the brick //-2 moved touch line
    if ((top >= bricksArray[x][0]-ball  && top <= bricksArray[x][0]-ball +1) &&
        left >= bricksArray[x][1]-ball && left <= bricksArray[x][1]+ 40)
        {

          if(!onfire){
          if(!switcherTopWasChanged){

            switcherTop = -switcherTop;
            switcherTopWasChanged = true;

          }
        }



          document.getElementById('wall').childNodes[bricksArray[x][2]].health--;

          document.getElementById('wall').childNodes[bricksArray[x][2]].textContent = document.getElementById('wall').childNodes[bricksArray[x][2]].health;

          if(document.getElementById('wall').childNodes[bricksArray[x][2]].health === 0){
            document.getElementById('wall').childNodes[bricksArray[x][2]].textContent = '';
            console.log('addgold top');
            addGold(document.getElementById('wall').childNodes[bricksArray[x][2]].gold);

            document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');



            var topI = bricksArray[x][0];
            var leftI = bricksArray[x][1];;
            var attributeI = bricksArray[x][5];

            bricksArray.splice(x,1);

            //if this brick has an item
            //run component

            // in (top,left)
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
    // drop.setAttribute('style', `top: ${topI}px ; left:${leftI}px; width: 10px; height: 10px; background-color: orange; `);
    drop.textContent = '???';
  }

  if(attributeI==='ball'){
    // drop.setAttribute('style', `top: ${topI}px ; left:${leftI}px; width: 10px; height: 10px; background-color: green; `);
    drop.textContent = '???';
  }

  if(attributeI==='plate'){
    // drop.setAttribute('style', `top: ${topI}px ; left:${leftI}px; width: 10px; height: 10px; background-color: yellow; `);
    drop.textContent = '???';
  }

  if(attributeI==='flight'){
    // drop.setAttribute('style', `top: ${topI}px ; left:${leftI}px; width: 10px; height: 10px; background-color: black; `);
    drop.textContent = '????';
  }



          //  drop.textContent = '???';
topI = topI + 1;
//leftI = leftI + 1;

              if(topI===500){clearInterval(df)}

              if(leftI>=pos && leftI<=pos+plate  && topI>=posY-5 && topI<=posY){
                clearInterval(df);


                addAttribute(attributeI);


                console.log('got it',);

                drop.setAttribute('id','empty');

              }


          }, 10)

          }


         if(bricksArray.length === 0) {flightBackState();clear();updateGold();handleOff(lvl, currentGold); }



        } else





        ////////////////////////////////////

    //bottom side of the brick  //+2 moved touch line
    if ((top <= bricksArray[x][0]+20 && top >= bricksArray[x][0]+20 - 1) &&
        left >= bricksArray[x][1]-ball && left <= bricksArray[x][1]+ 40 )
        {

          if(!onfire){
          if(!switcherTopWasChanged){

            switcherTop = -switcherTop;
            switcherTopWasChanged = true;

          }
        }





          console.log(bricksArray[x][2]);



          document.getElementById('wall').childNodes[bricksArray[x][2]].health--;

          document.getElementById('wall').childNodes[bricksArray[x][2]].textContent = document.getElementById('wall').childNodes[bricksArray[x][2]].health;

          if(document.getElementById('wall').childNodes[bricksArray[x][2]].health === 0){
            document.getElementById('wall').childNodes[bricksArray[x][2]].textContent = '';
            console.log('addgold bottom');
            addGold(document.getElementById('wall').childNodes[bricksArray[x][2]].gold);

            document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');

            bricksArray.splice(x,1);
          }


          //  document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('style', document.getElementById('wall').childNodes[bricksArray[x][2]].getAttribute('style')+`;background: rgb(45, ${ 159 - (3-document.getElementById('wall').childNodes[bricksArray[x][2]].health) * 20}, 253)` );





        //   document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');

        //   console.log(bricksArray[x][2]);
        //  bricksArray.splice(x,1)


        if(bricksArray.length === 0) {flightBackState();clear();updateGold();handleOff(lvl, currentGold);}

         } else


    //left side of the brick
    if (top >= bricksArray[x][0]-ball && top <= bricksArray[x][0]+20 &&
        (left >= bricksArray[x][1]-ball-2 && left <= bricksArray[x][1]-ball-1) ) //moved touch line a bit left, to prevent the ball through move
        {

          if(!onfire){
          if(!switcherLeftWasChanged){

            switcherLeft = -switcherLeft;
            switcherLeftWasChanged = true;

          }
        }



          document.getElementById('wall').childNodes[bricksArray[x][2]].health--;

          document.getElementById('wall').childNodes[bricksArray[x][2]].textContent = document.getElementById('wall').childNodes[bricksArray[x][2]].health;

          if(document.getElementById('wall').childNodes[bricksArray[x][2]].health === 0){
            document.getElementById('wall').childNodes[bricksArray[x][2]].textContent = '';
            console.log('addgold left');
            addGold(document.getElementById('wall').childNodes[bricksArray[x][2]].gold);

            document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');

            bricksArray.splice(x,1);
          }


         if(bricksArray.length === 0) {flightBackState();clear();updateGold();handleOff(lvl, currentGold);}

         } else

    //right side of the brick //+2 moved touch line
    if (top >= bricksArray[x][0]-ball && top <= bricksArray[x][0]+20 &&
        (left <= bricksArray[x][1]+40+2 && left >= bricksArray[x][1]+40+1) )
        {

          if(!onfire){
          if(!switcherLeftWasChanged){

            switcherLeft = -switcherLeft;
            switcherLeftWasChanged = true;

          }
        }

document.getElementById('wall').childNodes[bricksArray[x][2]].health--;

          document.getElementById('wall').childNodes[bricksArray[x][2]].textContent = document.getElementById('wall').childNodes[bricksArray[x][2]].health;

          console.log(document.getElementById('wall').childNodes[bricksArray[x][2]].gold);

          if(document.getElementById('wall').childNodes[bricksArray[x][2]].health === 0){
            document.getElementById('wall').childNodes[bricksArray[x][2]].textContent = '';

            addGold(document.getElementById('wall').childNodes[bricksArray[x][2]].gold);
            console.log('addgold right', document.getElementById('wall').childNodes[bricksArray[x][2]].gold);
            document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');

            bricksArray.splice(x,1);
          }

         if(bricksArray.length === 0) {flightBackState();clear();updateGold();handleOff(lvl, currentGold);}

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


          document.getElementById('wall').childNodes[bricksArray[x][2]].health--;

          // document.getElementById('wall').childNodes[bricksArray[x][2]].textContent = document.getElementById('wall').childNodes[bricksArray[x][2]].health;

          if(document.getElementById('wall').childNodes[bricksArray[x][2]].health === 0){

            document.getElementById('wall').childNodes[bricksArray[x][2]].textContent = '';
            addGold(document.getElementById('wall').childNodes[bricksArray[x][2]].gold);

            document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');

            bricksArray.splice(x,1);

            clearBullet();

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
        <div id = 'boxS'>
        <div id = 'box'>
            <div id = 'wall'></div>
            <div id = 'ball'></div>
            <div id = 'plate'></div>
        </div></div>
</div>
        <div id ='gamebar'>
          <GameBar gold = {this.state.gold} level = {this.state.level} flight = {this.state.flight} gun = {this.state.gun} ballPoint = {this.state.ballPoint} platePoint = {this.state.platePoint } onFire = {this.state.onfire} user = {this.props.user}/>
        </div>

        </div>

        </div>

      )

    }



  }


  export default Field;
import React from 'react';
import LevelGrid from './levelGrid';
import pattern from './brickPattern';

  class Field extends React.Component {


    constructor(props){
      super(props);

    this.state = ({field:true, level: undefined, pattern: this.props.pattern, gold: 0, attribute: undefined, plate: 100, ball: 10, onfire: false, flight: false})

    this.addGold = this.addGold.bind(this);
    this.addAttribute = this.addAttribute.bind(this);
    this.plateFun = this.plateFun.bind(this);
    this.ballFun = this.ballFun.bind(this);
    this.onfireFun = this.onfireFun.bind(this);

  }

    plateFun (cb){ cb(this.state.plate);};
    ballFun(cb) {cb(this.state.ball)}
    onfireFun(cb){cb(this.state.onfire)}



    addGold(value){

      this.setState({gold: this.state.gold + value})

    }

    addAttribute(value){

      this.setState({attribute: value})

      if(this.state.attribute==='plate'){
        this.setState({plate:this.state.plate + 100})
      }

      if(this.state.attribute==='ball'){
        this.setState({ball: this.state.ball + 10});
      }

      if(this.state.attribute==='onfire'){
        this.setState({onfire: true})

      }

      if(this.state.attribute==='flight'){
        this.setState({flight: true})
      }
    }


    componentDidUpdate( prevProps, prevState){

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


var ballRunning = function(pat, handleOff,plateFun,ball,ballFun,onfire,onfireFun){

  inMove = 1;

  var r = setInterval ( ()=>{

    //have to find the way to change it
    plateFun( (x) => {plate = x;});
    ballFun((x)=> {ball =x;})
    onfireFun((x)=>{onfire=x;})


  function clear() { clearInterval(r);}

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


  brickBouncer(tops,lefts,pat,clear,onfire);


} , 5);




};




document.addEventListener ('mousemove', e => {


if(e.offsetX<width-plate){
  pos = e.offsetX;
}else { pos = width-plate}

if(this.state.flight){
if(e.offsetY<height-10){
  posY = e.offsetY;
}else {
  posY = height-10;
}
}

if(document.getElementById('plate')){
document.getElementById('plate').style.left = pos + 'px';

if(this.state.flight){
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


//console.log(pos);

})

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
var updateGold = () => currentGold = this.state.gold;

console.log('here is lvl ',lvl);
//console.log(this.props.pattern , 'hereee')



//to prevent immidite fire the ball by click
setTimeout(()=>{



  document.addEventListener('click', function(){
    if(inMove === 0){
    ballRunning(pat,undefined,plateFun,ball,ballFun,onfire,onfireFun);

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




var brickBouncer = function (top,left,bricksArray,clear,onfire){


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
  if(attributeI==='flight'){
    drop.setAttribute('style', `top: ${topI}px ; left:${leftI}px; width: 10px; height: 10px; background-color: yellow; `);
  }

  if(attributeI==='onfire'){
    drop.setAttribute('style', `top: ${topI}px ; left:${leftI}px; width: 10px; height: 10px; background-color: orange; `);
  }



          //  drop.textContent = '⚪';
topI = topI + 1;
//leftI = leftI + 1;

              if(topI===500){clearInterval(df)}

              if(leftI>=pos && leftI<=pos+plate  && topI>=465 && topI<=470){
                clearInterval(df);


                addAttribute(attributeI);

                console.log('got it',);

                drop.setAttribute('id','empty');

              }


          }, 10)

          }


         if(bricksArray.length === 0) {clear();updateGold();handleOff(lvl, currentGold);}



        } else



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

            addGold(document.getElementById('wall').childNodes[bricksArray[x][2]].gold);

            document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');

            bricksArray.splice(x,1);
          }


          //  document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('style', document.getElementById('wall').childNodes[bricksArray[x][2]].getAttribute('style')+`;background: rgb(45, ${ 159 - (3-document.getElementById('wall').childNodes[bricksArray[x][2]].health) * 20}, 253)` );





        //   document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');

        //   console.log(bricksArray[x][2]);
        //  bricksArray.splice(x,1)


        if(bricksArray.length === 0) {console.log(currentGold);clear();updateGold();handleOff(lvl, currentGold);}

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

            addGold(document.getElementById('wall').childNodes[bricksArray[x][2]].gold);

            document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');

            bricksArray.splice(x,1);
          }


         if(bricksArray.length === 0) {console.log(currentGold);clear();updateGold();handleOff(lvl, currentGold);}

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


            addGold(document.getElementById('wall').childNodes[bricksArray[x][2]].gold);

            document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');

            bricksArray.splice(x,1);
          }

         if(bricksArray.length === 0) {console.log(currentGold);clear();updateGold();handleOff(lvl, currentGold);}

         }
  }

  //console.log(bricksArray);



        //creating the same conditions for all the rest sides, depending where the ball coming from. 4 conditions.

        //adding the way multiply bricks



 // console.log(top, left, x);
}

    }







        }

    render(){





      return(

        <div>
          GAME!

          <div> level: {this.state.level} </div>

      <div>gold: {this.state.gold}</div>

        <div>

        <div id = 'box'>
            <div id = 'wall'></div>
            <div id = 'ball'></div>
            <div id = 'plate'></div>
        </div>

        </div>

        </div>

      )

    }



  }


  export default Field;
console.log('check');

import pattern from '/brickPattern.js';

console.log(pattern);

var tops = 400;
var lefts = 250;
var switcherTop = -1;
var switcherLeft = 1;
var pos = 50;
var coeff = 1;
var firstEnter;
var inMove = 0;


var ballRunning = function(){

  inMove = 1;

  var r = setInterval ( ()=>{

  tops = tops+switcherTop;
  lefts = lefts + switcherLeft;

    console.log(tops,lefts);

  document.getElementById('ball').style.left = lefts + 'px';

  document.getElementById('ball').style.top = tops + 'px';

  //some changes
  if(tops >= 378 && (pos < lefts && pos +100 > lefts) ) {


    // refactoring this section to async function
    // 1) eventlistener ->-> removelistener -> switcherTop value


    //  var funcEnter = ( (e)=> {
      if(tops >= 378 && tops <= 379){
        console.log(tops);
      firstEnter = pos;}



      // var powerOfTouching = lefts - pos;

      // if(powerOfTouching>=90){ powerOfTouching = 90;}



        if(tops >= 385 && tops <= 386){

          var powerOfTouching = firstEnter - pos;

          console.log(powerOfTouching);


          Math.Sin = function(w){
            return parseFloat(Math.sin(w).toFixed(5));
        };
          Math.Cos = function(w){
          return parseFloat(Math.cos(w).toFixed(5));
        };



        if(powerOfTouching <= -30) {

          coeff = 0.6;

          switcherLeft = Math.Sin(Math.PI * coeff );
          switcherTop = Math.Cos(Math.PI * coeff  );

        }  else if(powerOfTouching <= -15) {

          coeff = 0.8;

          switcherLeft = Math.Sin(Math.PI * coeff );
          switcherTop = Math.Cos(Math.PI * coeff );

        } else if (powerOfTouching >= 30){

          coeff = 1.40;

          switcherLeft = Math.Sin(Math.PI * coeff );
          switcherTop = Math.Cos(Math.PI * coeff );

        } else if (powerOfTouching >= 15){

          coeff = 1.20;

          switcherLeft = Math.Sin(Math.PI * coeff );
          switcherTop = Math.Cos(Math.PI * coeff );

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


  if (tops >= 400){ clearInterval (r);}

  if (tops <= 0 ) {
    tops =0;
      switcherTop = -switcherTop;
  }

  if (lefts >= 490){
    lefts = 490;
    switcherLeft = -switcherLeft;
  }

  if (lefts <= 0) {
    lefts =  0;
    switcherLeft = -switcherLeft;
  }


  brickBouncer(tops,lefts,pattern);


} , 5);

};
//const box = document.getElementById ('box');


document.addEventListener ('mousemove', e => {


if(e.offsetX<400){
  pos = e.offsetX;
}else { pos = 400}

document.getElementById('plate').style.left = pos + 'px';

if(!inMove){
  document.getElementById('ball').style.left = pos +45 + 'px';
  document.getElementById('ball').style.top = 380;

  tops = 380;
  lefts = pos + 45;

}


//console.log(pos);

})


document.addEventListener('click', function(){

if(inMove === 0){

  ballRunning();

}


})


var creatingBrick = function (arr){

  //arr[0] is a top value ; arr[1] is a left value

  var newBrick = document.createElement('div');
  newBrick.setAttribute('id', 'brick');
  newBrick.setAttribute('style', `top: ${arr[0]} ; left:${arr[1]}`)
  newBrick.textContent = arr[2];
  var wall = document.getElementById('wall');
  wall.appendChild(newBrick);

}


var creatingWall = function(pattern){

  for(let x of pattern){

    creatingBrick(x);

  }

}

creatingWall(pattern);

// document.getElementById('brick').style.top = 140;
// document.getElementById('brick').style.left = 200;




var brickBouncer = function (top,left,bricksArray){

  //console.log('top:',top, '  left:',left);

  for( var x=0 ; x< bricksArray.length;x++){


    //top side of the brick //-2 moved touch line
    if ((top >= bricksArray[x][0]-10 -2 && top <= bricksArray[x][0]-10 -1) &&
        left >= bricksArray[x][1]-10 && left <= bricksArray[x][1]+ 60)
        { switcherTop = -switcherTop;


         document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');
         console.log(bricksArray[x][2]);

         bricksArray.splice(x,1)


          if(bricksArray.length === 0) { alert("You Win!")}



        } else



    //bottom side of the brick  //+2 moved touch line
    if ((top <= bricksArray[x][0]+30 + 2 && top >= bricksArray[x][0]+30 + 1) &&
        left >= bricksArray[x][1]-10 && left <= bricksArray[x][1]+ 60 )
        { switcherTop = -switcherTop;


          document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');

          console.log(bricksArray[x][2]);
         bricksArray.splice(x,1)


         if(bricksArray.length === 0) { alert("You Win!")}

         } else


    //left side of the brick
    if (top >= bricksArray[x][0]-10 && top <= bricksArray[x][0]+30 &&
        (left >= bricksArray[x][1]-10-2 && left <= bricksArray[x][1]-10-1) ) //moved touch line a bit left, to prevent the ball through move
        { switcherLeft = -switcherLeft;

          document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');

          console.log(bricksArray[x][2]);
         bricksArray.splice(x,1) //indebricksArray[x]of

         if(bricksArray.length === 0) { alert("You Win!")}

         } else

    //right side of the brick //+2 moved touch line
    if (top >= bricksArray[x][0]-10 && top <= bricksArray[x][0]+30 &&
        (left <= bricksArray[x][1]+60+2 && left >= bricksArray[x][1]+60+1) )
        { switcherLeft = -switcherLeft;

          document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');

          console.log(bricksArray[x][2]);
         bricksArray.splice(x,1)

         if(bricksArray.length === 0) { alert("You Win!")}

         }
  }

  //console.log(bricksArray);



        //creating the same conditions for all the rest sides, depending where the ball coming from. 4 conditions.

        //adding the way multiply bricks



 // console.log(top, left, x);
}
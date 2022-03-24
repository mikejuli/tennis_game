console.log('check');

import pattern from '/brickPattern.js';

console.log(pattern);

var tops = 0;
var lefts = 0;
var switcherTop = 0;
var switcherLeft = 0;
var pos = 50;

var r = setInterval ( ()=>{

  tops = tops+switcherTop;
  lefts = lefts + switcherLeft;

  document.getElementById('ball').style.left = lefts + 'px';

  document.getElementById('ball').style.top = tops + 'px';

  //some changes
   if(tops > 380 && (pos < lefts && pos +50 > lefts) ) { switcherTop = -1;}


  if (tops === 400){ clearInterval (r);}

  if (tops === 0) {switcherTop = 1;}

  if (lefts === 470){ switcherLeft = -1;}
  if (lefts === 0) {switcherLeft = 1;}


  brickBouncer(tops,lefts,pattern);


} , 5);


//const box = document.getElementById ('box');


document.addEventListener ('mousemove', e => {


if(e.offsetX<450){
  pos = e.offsetX;
}else { pos = 450}

document.getElementById('plate').style.left = pos + 'px';



//console.log(pos);

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
    if ((top == bricksArray[x][0]-10 -2) &&
        left >= bricksArray[x][1]-10 && left <= bricksArray[x][1]+ 60)
        { switcherTop = -1;

          // document.getElementById('wall').childNodes[bricksArray[x][2]].style.backgroundColor = 'green';
          // var d = document.getElementById('wall').removeChild(document.getElementById('wall').childNodes[bricksArray[x][2]]);

         document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');
         console.log(bricksArray[x][2]);

         bricksArray.splice(x,1)


          if(bricksArray.length === 0) { alert("You Win!")}



        } else



    //bottom side of the brick  //+2 moved touch line
    if ((top == bricksArray[x][0]+30 + 2) &&
        left >= bricksArray[x][1]-10 && left <= bricksArray[x][1]+ 60 )
        { switcherTop = 1;


          document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');

          console.log(bricksArray[x][2]);
         bricksArray.splice(x,1)


         if(bricksArray.length === 0) { alert("You Win!")}

         } else


    //left side of the brick
    if (top >= bricksArray[x][0]-10 && top <= bricksArray[x][0]+30+10 &&
        (left == bricksArray[x][1]-10-2) ) //moved touch line a bit left, to prevent the ball through move
        { switcherLeft = -1;

          document.getElementById('wall').childNodes[bricksArray[x][2]].setAttribute('id', 'empty');

          console.log(bricksArray[x][2]);
         bricksArray.splice(x,1) //indebricksArray[x]of

         if(bricksArray.length === 0) { alert("You Win!")}

         } else

    //right side of the brick //+2 moved touch line
    if (top >= bricksArray[x][0]-10 && top <= bricksArray[x][0]+30 &&
        (left === bricksArray[x][1]+60+2) )
        { switcherLeft = 1;

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
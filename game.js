console.log('check');

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

  if(tops > 355 && (pos-40 > lefts || pos +40 < lefts) ) { clearInterval (r);}

  if (tops === 365){ switcherTop = -1;}
  if (tops === 0) {switcherTop = 1;}

  if (lefts === 470){ switcherLeft = -1;}
  if (lefts === 0) {switcherLeft = 1;}


brickBouncer(tops,lefts,[49,100]);


} , 5);


//const box = document.getElementById ('box');


document.addEventListener ('mousemove', e => {


if(e.offsetX<450){
  pos = e.offsetX;

}else { pos = 450}

document.getElementById('plate').style.left = pos + 'px';



console.log(pos);

})



var brickBouncer = function (top,left,bricksArray){

  console.log('top:',top, '  left:',left);

  //top side of the brick
  if ((top == bricksArray[0]-10) &&
      left >= bricksArray[1]-10 && left <= bricksArray[1]+ 60)
      { switcherTop = -1;
        document.getElementById('brick').style.backgroundColor = 'green';}

  //bottom side of the brick
  if ((top == bricksArray[0]+30) &&
      left >= bricksArray[1]-10 && left <= bricksArray[1]+ 60 )
      { switcherTop = 1;
        document.getElementById('brick').style.backgroundColor = 'green';}


  //left side of the brick
  if (top >= bricksArray[0]-10 && top <= bricksArray[0]+30+10 &&
      (left == bricksArray[1]-10) )
      { switcherLeft = -1;
        document.getElementById('brick').style.backgroundColor = 'green';}


  //right side of the brick
  if (top >= bricksArray[0]-10 && top <= bricksArray[0]+30+10 &&
      (left === bricksArray[1]+60) )
      { switcherLeft = 1;
        document.getElementById('brick').style.backgroundColor = 'green';}




        //creating the same conditions for all the rest sides, depending where the ball coming from. 4 conditions.

        //adding the way multiply bricks



  console.log(top, left, bricksArray);
}
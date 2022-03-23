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

  if (tops === 365){ switcherTop = -5;}
  if (tops === 0) {switcherTop = 5;}

  if (lefts === 470){ switcherLeft = -5;}
  if (lefts === 0) {switcherLeft = 5;}


brickBouncer(tops,lefts,[215,230]);


} , 30);


//const box = document.getElementById ('box');


document.addEventListener ('mousemove', e => {


if(e.offsetX<450){
  pos = e.offsetX;

}else { pos = 450}

document.getElementById('plate').style.left = pos + 'px';



console.log(pos);

})



var brickBouncer = function (top,left,bricksArray){


  if (top > bricksArray[0]-30 && top < bricksArray[0]+30 &&
      left > bricksArray[1]-45  && left < bricksArray[1]+ 45)
      { switcherTop = -5;
        document.getElementById('brick').style.backgroundColor = 'green';}


  console.log(top, left, bricksArray);
}
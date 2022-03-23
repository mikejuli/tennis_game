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


} , 30);


const box = document.getElementById ('box');


box.addEventListener ('mousemove', e => {

document.getElementById('plate').style.left = e.offsetX + 'px';

pos = e.offsetX;

console.log(e.offsetX);

})
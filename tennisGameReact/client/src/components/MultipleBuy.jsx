import React, {useEffect,useState} from 'react'


const MultipleBuy = (props) => {

const [point, setPoint] = useState(0);

const r = () => {

  var s = document.querySelectorAll('#circleInM')
  if(point<s.length){s[point].style.backgroundColor = 'rgb(255, 29, 206)';}
  setPoint(point+1)
}

return (
<div>
<div id = 'buyI' style = {{width: '20px', height: '20px', backgroundColor: 'red'}} onClick = {()=>{r()}}></div>
<div id = 'mainWrap'>
<div id = 'main'>
<div id = 'circleInM'></div>
<div id = 'circleInM'></div>
<div id = 'circleInM'></div>
<div id = 'circleInM'></div>
<div id = 'circleInM'></div>
<div id = 'circleInM'></div>
<div id = 'circleInM'></div>
<div id = 'circleInM'></div>
<div id = 'circleInM'></div>
</div>
</div>
<div>{point}</div>
</div>
)


}


export default MultipleBuy;
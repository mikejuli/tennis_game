import React, {useEffect,useState} from 'react'


const MultipleBuy = (props) => {

const [point, setPoint] = useState(0);

const r = () => {

  var s = document.querySelectorAll('#circleInM')
  if(point<s.length){s[point].style.backgroundColor = 'rgb(255, 29, 206)';}
  setPoint(point+1)
  document.getElementById('mainWrap').style = `transform: rotate(-${40*point}deg)`

  props.buyItem(props.price,props.id);

    document.getElementById(`${props.id}Menu`).style.backgroundColor = 'pink';

}

return (
<div>
<div id = 'buyI' onClick = {()=>{r()}}>

<div style = {{position: 'relative', width: '55px', float: 'left'}}>{props.price}</div> <img src = 'coin1.png' width = '20px' height = '20px' style= {{marginTop: '3px'}}></img> </div>


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
<div id = 'mainIn'>➖</div>

<div id = 'titleFeature'>{props.id}{point}</div>
</div>
)


}


export default MultipleBuy;
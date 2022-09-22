import React, {useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {setItem} from '../features/boughtItems'

const MultipleBuy = (props) => {

const [point, setPoint] = useState(0);


const item = useSelector((state)=> state.item.value[props.id].value);

const max = useSelector((state)=> state.item.value[props.id].max);

const desc = useSelector((state)=>state.item.value[props.id].description)

useEffect(()=>{

console.log(max)

  setPoint(item)

  var s = document.querySelectorAll('#circleInM')

    for(var i = 0; i< s.length;i++){


      s[i].style.backgroundColor = 'rgb(221 176 211)';
    }


  if(point<=s.length){

    for(var i =0; i<point;i++){

      s[i].style.backgroundColor = 'rgb(0 253 63)';
    }

  }

  //dispatch(setItem({[props.id]:point+1}))

  document.getElementById('mainWrap').style = `transform: rotate(-${(360/max)*point}deg)`
  document.getElementById('mainIn').style = `
  background: linear-gradient(0deg, rgb(0 253 63) ${(point*(100/max))-5}% ,  rgb(122 122 180) ${(point*(100/max))+20}% ) ;`


})

console.log(item);

const dispatch = useDispatch();

const r = () => {

  if(point<max){

    var ifHaveEnoughCredit  = props.buyItem(props.price,props.id);

    if(ifHaveEnoughCredit){
    dispatch(setItem({[props.id]:point+1}))

    document.getElementById(`${props.id}Menu`).style.backgroundColor = 'pink';
    }
  }
}

// var circle = [];


// for(var i=0;i<max;i++){

//   circle.push(<div id = 'circleInM'></div>)

// }

return (
<div>
<div id = 'buyI' onClick = {()=>{r()}}>

<div style = {{position: 'relative', width: '55px', float: 'left'}}>{props.price}</div> <img src = 'coin1.png' width = '20px' height = '20px' style= {{marginTop: '3px'}}></img> </div>


<div id = 'mainWrap'>
<div id = 'main'>


  {[...Array(max)].map((e, i) => <span  id = 'circleInM' style= {{ transform: `rotate(${i*(360/max)}deg) translateY(35px) `}} key={i}></span>)}

</div>
</div>
<div id = 'mainIn'>{props.item}</div>

<div id = 'titleFeature'>{props.id}</div>
<div style ={{position: 'absolute', top: '30px', fontSize: '16px', color: 'aqua', textAlign: 'left', marginLeft:'10px'}}>{desc}</div>
</div>
)


}


export default MultipleBuy;
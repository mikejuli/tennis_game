import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {setUltimate} from '../features/ultimateCounter'

const Ultimate = (props) => {

  const [arr, setArr] = useState([0,0,0,0,0])

  const ultimate = useSelector((state)=> state);

  const dispatch = useDispatch();

  useEffect(()=>{
    console.log(ultimate.ultimate.value);
    if(props.value){
    dispatch(setUltimate(ultimate.ultimate.value + props.value));
    }
    arrCount(arr);
  },[props.value])

  var arrCount = (arr) => {

   var s = Math.floor(ultimate.ultimate.value/1000);
    console.log(s);
    setArr(arr.map(x=>{ if(s>0) {s--; return 1} else return 0 }).reverse())


  }


return ( <div>

<div id = 'circlePanel'>
{/* {ultimate.ultimate.value} */}

{arr.every(x=>x===1)?arr.map(x=><div id = 'circleGolden'></div>): arr.map(x=>x===1?<div id = 'circle'></div>:<div id = 'circleEmpty'></div>) }



{/* <div id = 'circleEmpty'></div>
<div id = 'circle'></div>
<div id = 'circle'></div>
<div id = 'circle'></div>
<div id = 'circle'></div> */}
</div>




   </div>)
}

export default Ultimate;
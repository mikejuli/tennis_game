import React, {useState, useEffect} from 'react'
import MultipleBuy from './MultipleBuy'

const FeaturesDescription = (props) => {



useEffect(()=>{



})

  return (
  <div>
    <div id = 'featuresDescription'>

      {/* <div>here is description for {props.item}
</div> */}

<MultipleBuy price = {props.price} buyItem = {props.buyItem} id = {props.id} item = {props.item}/>


    {/* {props.id==='bigPlate'? <MultipleBuy price = {props.price} buyItem = {props.buyItem} id = {props.id}/> :
    <div>
    <div id = 'titleFeature'>{props.id}</div>
    <div id = 'buyI' onClick={()=>{

      props.buyItem(props.price,props.id);

       document.getElementById(`${props.id}Menu`).style.backgroundColor = 'pink';


      }}>

<div style = {{position: 'relative', width: '55px', float: 'left'}}>{props.price}</div> <img src = 'coin1.png' width = '20px' height = '20px' style= {{marginTop: '3px'}}></img>

</div>
    </div> } */}





    </div>

  </div>



  )


}

export default FeaturesDescription;
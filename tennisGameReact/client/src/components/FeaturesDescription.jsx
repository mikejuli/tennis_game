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

    {props.id==='bigPlate'? <MultipleBuy/> : <div></div> }


  <button class='buttonBuy' onClick={()=>{

   props.buyItem(props.price,props.id);

    document.getElementById(`${props.id}Menu`).style.backgroundColor = 'pink';


  }} > buy {props.price}</button>


    </div>

  </div>



  )


}

export default FeaturesDescription;
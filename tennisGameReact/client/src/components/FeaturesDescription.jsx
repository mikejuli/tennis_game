import React, {useState, useEffect} from 'react'


const FeaturesDescription = (props) => {



useEffect(()=>{



})

  return (
  <div>
    <div id = 'featuresDescription'>here is description for {props.item}

  <button class='buttonBuy' onClick={()=>{

   props.buyItem(props.price,props.id);

    document.getElementById(`${props.id}Menu`).style.backgroundColor = 'pink';


  }} > buy {props.price}</button>


    </div>

  </div>



  )


}

export default FeaturesDescription;
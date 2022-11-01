import React, {useState,useEffect} from 'react';


const WinCoinCounter = (props) => {

  const [coin, setCoin] = useState(0);

  var count = (coin) => {


    //var time = Math.ceil(2000/props.count)


      setCoin(coin+1)




  }


  useEffect(()=>{

    if(coin<props.coin){

      count(coin)

    }


  })

  return (

    <div>

    {coin}


    <img src="images/coin1.png" style={{width: '20px', height: '20px', top: '3px', position: 'relative'}}></img>
    </div>


  )


}

export default WinCoinCounter;
import React, {useState, useEffect} from 'react'
import axios from 'axios';
const LeaderBoard = () => {

  const [data, setData] = useState([])

useEffect(()=>{

  axios.get('http://localhost:9000/getLeaderList').then((response)=>{

    console.log(response.data);
    setData(response.data);


  });


}, [])




return (

<div id = 'leaderBoard' style = {{position: 'absolute', left: '200px', top: '200px', width: '300px', height: '300px', backgroundColor: 'khaki'}}><div>User Level Gold</div>{data[0]?data.map(item=>

<div>{item.user} {item.level} {item.gold} {item.activeCharacter}</div>):<div></div>}</div>

)


}

export default LeaderBoard;
import React, {useState, useEffect} from 'react'
import axios from 'axios';
const LeaderBoard = (props) => {

  const [data, setData] = useState([])

useEffect(()=>{

  axios.get('http://localhost:9000/getLeaderList').then((response)=>{

    console.log(response.data);
    setData(response.data);


  });


}, [])




return (
<div>

<div id = 'coverMainMenu' onClick = {()=>props.openLeaderBoard()} style = {{width:'800px', height:'640px', position: 'absolute', backgroundColor: 'black', zIndex: '4', opacity: '0.5'}}></div>

<div id = 'leaderBoard' style = {{zIndex:'5',position: 'absolute', left: '250px', top: '70px', width: '300px', height: '460px', backgroundColor: 'khaki'}}><div style = {{height: '30px', display: 'flex', lineHeight:'40px',textAlign: 'center'}}>

<div style = {{width:'80px'}}>

</div>

<div style = {{width:'65px'}}>
User
</div>
<div style = {{width: '90px'}}>
Level
</div>
<div style = {{width: '50px'}}>
Gold
</div>


  </div>


  {data[0]?data.map((item,index)=>

<div style = {{display: 'flex', lineHeight: '40px', textAlign: 'center', margin:'2px' ,backgroundColor:'pink',borderRadius:'25px'}}>

<div style = {{width:'20px'}}>
{index+1}
</div>
{<div style = {{backgroundImage : `url('./${item.activeCharacter}.png')`, width: '40px', height: '40px', backgroundPosition: '50%', backgroundSize:'100%', borderRadius: '50%' }}></div>}

<div style = {{width:'100px'}}>
{item.user}
</div>
<div style = {{width: '60px'}}>
{item.level}
</div>
<div style = {{width: '70px'}}>
{item.gold}
</div>
  </div>):<div></div>}</div>

</div>

)


}

export default LeaderBoard;
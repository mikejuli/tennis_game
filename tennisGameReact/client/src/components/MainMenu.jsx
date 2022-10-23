import React, {useState, useEffect} from 'react'


const MainMenu = (props) => {

return(
<div>
<div id = 'coverMainMenu' onClick = {()=>props.openLogOutMenu()} style = {{width:'800px', height:'640px', position: 'absolute', backgroundColor: 'black', zIndex: '4', opacity: '0.5'}}></div>

<div id = 'mainMenu' style = {{zIndex:'5'}}>

<div style = {{position: 'absolute',top: '30px', left: '40px'}}>
 Are you sure?
</div>
<div id = 'buyI' style = {{position: 'absolute', top: '70%', left: '20px',width: '70px', height: '30px', cursor: 'pointer'}} onClick = {()=>props.handleLogout()}> Yes</div>

<div id = 'buyI' style = {{position: 'absolute', top: '70%', left: '110px', width: '70px', height: '30px',cursor: 'pointer'}} onClick = {()=>props.openLogOutMenu()}> No</div>
</div>
</div>
)


}

export default MainMenu;
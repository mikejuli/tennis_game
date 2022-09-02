import React, {useState, useEffect} from 'react'


const MainMenu = (props) => {

return(
<div>
<div id = 'coverMainMenu' onClick = {()=>props.openLogOutMenu()} style = {{width:'800px', height:'640px', position: 'absolute', backgroundColor: 'black', zIndex: '4', opacity: '0.5'}}></div>

<div id = 'mainMenu' style = {{zIndex:'5'}}>

 Are you sure?

<div id = 'menuButtonIn' style = {{position: 'absolute', top: '50%', cursor: 'pointer'}} onClick = {()=>props.handleLogout()}> Yes</div>

<div id = 'menuButtonIn' style = {{position: 'absolute', top: '50%', left: '50%', width: '40px', height: '30px',cursor: 'pointer'}} onClick = {()=>props.openLogOutMenu()}> No</div>
</div>
</div>
)


}

export default MainMenu;
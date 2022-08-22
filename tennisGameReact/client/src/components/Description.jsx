import React, {useState, useEffect} from 'react'


const Description = (props) => {

  const [menu, setMenu] = useState(false);



  const openMenu = () => {
    props.cancelFun(props.skin);
    setMenu(true);
}

useEffect(()=>{

  if(props.cancel!==props.skin){setMenu(false)}

})

  return (
<div>
{menu?
  <div id = 'bounce' >
  <a class="common"></a>

  <div id = 'description' style = {{top: props.top}}>
  {props.skin}
  </div>
  </div>

:
<div>
<a class="common" onMouseEnter = {()=>{openMenu()}}></a>


</div>


}
</div>

  )

  }

export default Description;
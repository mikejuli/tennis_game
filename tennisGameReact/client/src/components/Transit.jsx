import React, {setState} from 'react'
import BackgroundImage from './BackgroundImage'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const Transit = (props) => {




return (
  <div>
    <TransitionGroup>
       <CSSTransition
        in = {true}
         classNames={props.changeArrow===1?"backgroundF":'backgroundB'}
         timeout={props.timeout}
         key = {props.page}

       >
       <BackgroundImage page={props.page} key={props.page} arrow = {props.arrow} arrS = {props.arrS} />
       </CSSTransition>
       </TransitionGroup>
</div>


)

}


export default Transit;
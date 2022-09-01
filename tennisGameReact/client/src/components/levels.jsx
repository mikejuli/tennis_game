import React from 'react';
import Level from './level';
import TenLevels from './tenlevels';
import BarMenu from './BarMenu';
import $ from 'jquery';
import grass from './grass.png';
import snow from './snow.jpeg'

import CSSTransition from 'react-transition-group/CSSTransitionGroup'
import BackgroundImage from './BackgroundImage';


class Levels extends React.Component {

  constructor(props){
    super(props)

    this.state = {selected: false , active: [],arrow:this.props.arrow, turn:0, changeArrow: 0 , openedMenu: false, inProcess: false, transitionTime: 3000}

    this.changeLevels = this.changeLevels.bind(this)
  }


  // componentDidMount(){
  //   console.log('WAS MOUNT');
  //   $.ajax({method: 'GET',
  //   url: `http://localhost:9000/active`,
  //   success: result => this.setState({active: result})

  // })

  //   }





  changeLevels(arrow){
  if(this.state.inProcess === false){
    this.setState({inProcess: true})

    console.log(this.state.arrow);
    if(arrow === 1){
      var g = this.state.arrow+1;
      this.setState({arrow:g, changeArrow: 1})
    }

    if(arrow === -1){
      var g = this.state.arrow-1;
      this.setState({arrow:g, changeArrow: -1})
    }

    setTimeout(()=>{this.setState({inProcess: false})},this.state.transitionTime)
  }

  }



  componentDidUpdate( prevProps, prevState){
    if(prevProps.active!== this.props.active){
      this.setState({active:this.props.active})
    }




    if(prevProps.arrow !== this.props.arrow){
      this.setState({arrow: this.props.arrow, changeArrow: 1})
    }

    }


    componentDidMount(){
      this.setState({active:this.props.active, arrow:this.props.arrow})
    }


//       $.ajax({method: 'GET',
//       url: `http://localhost:9000/active`,
//       success: result => this.setState({active: result})

//     })


//     }
// }


  render() {
   // console.log(this.state.active);
    var arr = [];
    var arrS = [];
    var s = 0;

    for(var i=0; i<5; i++){



      //created filtred just in case if we get data from server not in the strict order (1,4,3,2) istead of (1,2,3,4)
     var filtred = this.state.active.sort((a,b)=>a.level-b.level);


      arr = [];
      for(var j = 0; j<10; j++){
        s++;
        arr.push( <Level level = {s} handle = {this.props.handle} fitLevel = {this.props.fitLevel} passed = {filtred[s-1]}/> );

        //passed = this.state.active.filter(level[s-1]) smth like this

      }

      var style = {
        backgroundImage: `url(${grass})`,
        backgroundSize: '100%',
        backgroundPosition: '0% 4%'
      }

      if(i==1){
         style = {
          backgroundImage: `url(${grass})`,
        backgroundSize: '100%',
        backgroundPosition: '0% 27.6%'
        }
        console.log(style.backgroundImage)

      }


      if(i==2){
        style = {
         backgroundImage: `url(${grass})`,
       backgroundSize: '100%',
       backgroundPosition: '0% 51.14%'
       }
       console.log(style.backgroundImage)

     }


     if(i==3){
      style = {
       backgroundImage: `url(${grass})`,
     backgroundSize: '100%',
     backgroundPosition: '0% 74.75%'
     }
     console.log(style.backgroundImage)

   }


   if(i==4){
    style = {
     backgroundImage: `url(${grass})`,
   backgroundSize: '100%',
   backgroundPosition: '0% 98.3%'
   }
   console.log(style.backgroundImage)

 }


      arrS.push(<div class= 'tenLevels' style = {style}><TenLevels arr = {arr} number = {i+1} picked = {this.state.arrow}/></div>);



    }
    if(this.state.arrow===1){var page = 'first'} else
    if(this.state.arrow===2) {var page = 'second'} else
    if(this.state.arrow===3) {var page = 'third'} else
    if(this.state.arrow===4) {var page = 'fourth'} else
    if(this.state.arrow===5) {var page = 'fifth'}


    if(this.state.changeArrow===1){

       var rend = <CSSTransition
        transitionName="background"
        transitionEnterTimeout={this.state.transitionTime}
        transitionLeaveTimeout={this.state.transitionTime}


      >
      <BackgroundImage page={page} key={page} arrow = {this.state.arrow} arrS = {arrS} />
      </CSSTransition>

    } else {

      var rend =  <CSSTransition
      transitionName="backgroundBack"
      transitionEnterTimeout={this.state.transitionTime}
      transitionLeaveTimeout={this.state.transitionTime}

    >
    <BackgroundImage page={page} key={page} arrow = {this.state.arrow} arrS = {arrS} />
    </CSSTransition>

    }




    return(<div id = 'levels'>


{page!== 'first' ? <button class = 'back' onClick = {()=>{this.changeLevels(-1); }}></button> : <div></div>}


      <table id = 'level' >

      {rend}

        </table>


    <BarMenu character = {this.props.character} currentLevel = {this.props.currentLevel} gold = {this.props.gold} buyItem = {this.props.buyItem} bigPlate = {this.props.bigPlate} handleLogout = {this.props.handleLogout} user = {this.props.user} />

     {page!== 'fifth' ? <button class = 'next' onClick = {()=>this.changeLevels(1)}></button> : <div></div> }

      </div>

      );

  }





}

export default Levels;
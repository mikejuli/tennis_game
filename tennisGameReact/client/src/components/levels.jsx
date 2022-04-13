import React from 'react';
import Level from './level';
import TenLevels from './tenlevels'
import $ from 'jquery';

import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import BackgroundImage from './BackgroundImage';

class Levels extends React.Component {

  constructor(props){
    super(props)

    this.state = {selected: false , active: [],arrow:1, turn:0}

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
    console.log(this.state.arrow);
    if(arrow === 1){
      var g = this.state.arrow+1;
      this.setState({arrow:g})
    }

    if(arrow === -1){
      var g = this.state.arrow-1;
      this.setState({arrow:g})
    }

  }



  componentDidUpdate( prevProps, prevState){
    if(prevProps.active!== this.props.active){

      this.setState({active:this.props.active})

    }}


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
        arr.push(<td > <Level level = {s} handle = {this.props.handle} fitLevel = {this.props.fitLevel} passed = {filtred[s-1]}/> </td>);

        //passed = this.state.active.filter(level[s-1]) smth like this

      }


      arrS.push(<div class= 'tenLevels'><TenLevels arr = {arr} number = {i+1} picked = {this.state.arrow}/></div>);



    }
    if(this.state.arrow===1){var page = 'home'} else {var page = 'about'}

    return(<div id = 'levels'>


<button class = 'back' onClick = {()=>{this.changeLevels(-1); }}>back arrow</button>


      <table id = 'level'>

      <ReactCSSTransitionGroup
          transitionName="background"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={5000}
        >
        <BackgroundImage page={page} key={page} comp = {this.state.arrow} />
        </ReactCSSTransitionGroup>

        </table>






      <button class = 'next' onClick = {()=>this.changeLevels(1)}>down arrow</button>

      </div>

      );

  }





}

export default Levels;
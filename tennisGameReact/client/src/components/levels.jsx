import React from 'react';
import Level from './Level';
import TenLevels from './tenlevels';
import BarMenu from './BarMenu';
import $ from 'jquery';
import MainMenu from './MainMenu'
import SoundsToggle from './SoundsToggle'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
//import { CSSTransition } from 'react-transition-group';

import BackgroundImage from './BackgroundImage';
import SoundPlayer from './SoundPlayer'
import Player from './Player'
import axios from 'axios'
import LeaderBoard from './LeaderBoard'
import {useSelector} from 'react-redux'
import Transit from './Transit'
import FullScreenMode from './FullScreenMode'
import Ultimate from './Ultimate'
import InitialHelper from './InitialHelper'

class Levels extends React.Component {

  constructor(props){
    super(props)

    this.state = {selected: false , active: [],arrow:this.props.arrow, turn:0, changeArrow: 0 , openedMenu: false, inProcess: false, transitionTime: 2900, openLogOutMenu: false,openLeaderBoard: false, soundToggle: true, arrowDirect: 0, ultimate: false}

    this.changeLevels = this.changeLevels.bind(this)
    this.openLogOutMenu = this.openLogOutMenu.bind(this)
    this.openLeaderBoard = this.openLeaderBoard.bind(this)
  }


  openLeaderBoard(){

    this.setState({
      openLeaderBoard: !this.state.openLeaderBoard
    })

  }


  openLogOutMenu(){
    this.setState({
      openLogOutMenu: !this.state.openLogOutMenu
    })
  }


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


    setTimeout(()=>{this.setState({inProcess: false})},this.state.transitionTime + 300)
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



      this.setState({active:this.props.active, arrow:this.props.arrow});

      var loadingIn = this.props.loaderChanger;

      var imageList = [

        ['loading backgroundImage...', '/images/forest.png'],
        ['loaded snow background...', '/images/snow.jpeg'],
        ['loaded water background...', '/images/water.jpeg'],
        ['loaded sand background...', '/images/sand.jpg'],
        ['loaded hell background...', '/images/hell.jpeg']
      ]


      loadingIn('loading image list...', imageList);


      // var backgroundImageLoading = new Image();
      // backgroundImageLoading.src = '/grass.png';
      // backgroundImageLoading.onload = function() {

      //   // loadingIn('loading backgroundImage...');

      // console.log('loaded backgroundImageLoading');
      // }

      // var forestImage = new Image();
      // forestImage.src = '/forest.jpg';
      // forestImage.onload = function() {
      //   this.props.loaderChanger();

      //   loadingIn('loaded forest');

      // console.log('loaded forest');
      // }



      // var snowImage = new Image();
      // snowImage.src = '/snow.jpeg';
      // snowImage.onload = function() {

      //   loadingIn('loaded snow background...');

      //   console.log('loaded snow');
      // }



        // const cacheName = 'pic'
        // var url = '/snow.jpeg'

        // caches.open(cacheName).then( cache => {
        //   cache.add(url).then( () => {
        //       console.log("Data cached ")

        //        loadingIn('loaded snow background...');
        //       console.log('loaded snow');
        //     });
        // });



      // var riverImage = new Image();
      // riverImage.src = '/river.jpeg';
      // riverImage.onload = function() {

      //   loadingIn('loaded river background...');

      // console.log('loaded river');
      // }


      // var url = '/river.jpeg'

      // caches.open('pic').then( cache => {
      //   cache.add('/river.jpeg').then( () => {
      //       console.log("Data cached ")


      //       console.log('loaded river');
      //     });
      // });





      // var sandImage = new Image();
      // sandImage.src = '/sand.jpg';
      // sandImage.onload = function() {

      //   loadingIn('loaded sand background...');

      // console.log('loaded sand');
      // }

      // caches.open(cacheName).then( cache => {
      //   cache.add('/sand.jpg').then( () => {
      //       console.log("Data cached ")

      //        loadingIn('loaded sand background...');
      //       console.log('loaded sand');
      //     });
      // });





      // var hellImage = new Image();
      // hellImage.src = '/hell.jpeg';
      // hellImage.onload = function() {

      //   loadingIn('loaded hell background...');

      // console.log('loaded hell');
      // }
    //   $( document ).ready(function() {
    //     console.log( "ready!" );
    //  });

  //    $( document ).load(function() {
  //     console.log( "ready load!" );
  //  });


    }


//       $.ajax({method: 'GET',
//       url: `https://3.213.179.128:9000/active`,
//       success: result => this.setState({active: result})

//     })


//     }
// }


  render() {


    console.log('lLEVEEVEVEVevels was rendered')

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



      // <img src= '/grass.png'/>

      var style = {
        backgroundImage: `url('./images/grass.png')`,
        backgroundSize: '100%',
        backgroundPosition: '0% 4%'
      }

      if(i==1){
         style = {
          backgroundImage: `url('./images/grass.png')`,
        backgroundSize: '100%',
        backgroundPosition: '0% 27.6%'
        }




      }


      if(i==2){
        style = {
         backgroundImage: `url('./images/grass.png')`,
       backgroundSize: '100%',
       backgroundPosition: '0% 51.14%'
       }




     }


     if(i==3){
      style = {
        backgroundImage: `url('./images/grass.png')`,
      //  backgroundImage: `image(${backgroundImageLoading})`,
     backgroundSize: '100%',
     backgroundPosition: '0% 74.75%'
     }


   }


   if(i==4){
    style = {
      backgroundImage: `url('./images/grass.png')`,
   backgroundSize: '100%',
   backgroundPosition: '0% 98.3%'
   }


 }


      arrS.push(<div class= 'tenLevels' style = {style}><TenLevels arr = {arr} number = {i+1} picked = {this.state.arrow}/></div>);



    }
    if(this.state.arrow===1){var page = 'first'

    document.body.style.background = `url('./images/forest.jpg') no-repeat center center fixed`
    document.body.style.backgroundSize = `cover`

  } else
    if(this.state.arrow===2) {var page = 'second';

    document.body.style.background = `url('./images/snow.jpeg') no-repeat center center fixed`
    document.body.style.backgroundSize = `cover`



}

    else if(this.state.arrow===3) {var page = 'third';



    document.body.style.background = `url('./images/water.jpeg') no-repeat center center fixed`
    document.body.style.backgroundSize = `cover`

  } else
    if(this.state.arrow===4) {var page = 'fourth';

    document.body.style.background = `url('./images/sand.jpg') no-repeat center center fixed`
    document.body.style.backgroundSize = `cover`

  } else
    if(this.state.arrow===5) {var page = 'fifth';

    document.body.style.background = `url('./images/hell.jpeg') no-repeat center center fixed`
    document.body.style.backgroundSize = `cover`

  } else
    if(this.state.arrow===6) {var page = 'final';
    document.body.style.background = `url('./images/river.jpeg') no-repeat center center fixed`
    document.body.style.backgroundSize = `cover`

  }
  var rend;

    if(this.state.changeArrow===1){
      console.log(this.state.changeArrow, 'thisARROW')
        rend =    <TransitionGroup childFactory={child => React.cloneElement(
          child,
          {classNames: "backgroundF", timeout: this.state.transitionTime}
        )}>
        <CSSTransition
          in = {true}
          classNames="backgroundF"
          timeout={this.state.transitionTime}
          key = {page}
          unmountOnExit
        >
        <BackgroundImage page={page} key={page} arrow = {this.state.arrow} arrS = {arrS} />
        </CSSTransition>
        </TransitionGroup>

    } else {
        console.log(this.state.changeArrow, 'thisARROW')
       rend =  <TransitionGroup childFactory={child => React.cloneElement(
        child,
        {classNames: "backgroundB", timeout: this.state.transitionTime}
      )}>
       <CSSTransition
         in = {true}
         classNames="backgroundB"
         timeout={this.state.transitionTime}
         key = {page}
         unmountOnExit

       >
       <BackgroundImage page={page} key={page} arrow = {this.state.arrow} arrS = {arrS} />
       </CSSTransition>
       </TransitionGroup>

    }




    return(<div id = 'levels'>

{/* if initialHelperPassed */}
    {!this.props.initialHelperPassed ? <InitialHelper user = {this.props.user} initialHelperPassedF = {this.props.initialHelperPassedF}/> : <div></div>}





{page!== 'first' ? <button class = 'back' onClick = {()=>{this.changeLevels(-1) }}></button> : <div></div>}


      <div id = 'level' >

    {rend}
       {/* <Transit timeout = {this.state.transitionTime} changeArrow = {this.state.changeArrow} page={page} key={page} arrow = {this.state.arrow} arrS = {arrS}/> */}
      {/* {backgroundImageLoading} */}
        </div>



    {page!=='final'?<BarMenu character = {this.props.character} currentLevel = {this.props.currentLevel} gold = {this.props.gold} buyItem = {this.props.buyItem} bigPlate = {this.props.bigPlate} user = {this.props.user} />:<div id = 'finalPage' style = {{position: 'absolute' }}>

      Thank you for this little adventure!<br/>

      It was a genual pleasure to have you playing this game!<br/>
    <br/>
      Your final score: {this.props.gold}<br/>
      <br/>
      Web-developer: Mikhail Zhulev <br/>
      Web-design: Mikhail Zhulev <br/>
      Ilustrator: Olga Zhuleva <br/>
    <br/>
      Fell free to check git-hub repository:<br/>
      https://github.com/mikejuli/tennis_game
      Me on linkedIn:<br/>
      https://www.linkedin.com/in/mikhail-zhulev
    <br/>
      Devoted to our Father🧡<br/>

    </div>}

     {page!== 'fifth' && page!== 'final' ? <button class = 'next' onClick = {()=>this.changeLevels(1)}></button> : <div></div> }


     {this.state.openLogOutMenu ? <MainMenu handleLogout = {this.props.handleLogout} openLogOutMenu = {this.openLogOutMenu}/> : <div></div>}

      <FullScreenMode/>


<div style = {{position: 'absolute', float: 'left', top: '90%', left: '82%', width:'140px', fontSize:'30px',display: 'flex', justifyContent: 'space-around'}}>



      <SoundsToggle/>

     <div id = 'menuButton' onClick={()=>this.openLeaderBoard()}>🏆</div>


     <div id = 'menuButton' onClick={()=>this.openLogOutMenu()}>🚪</div>
</div>

      {this.state.openLeaderBoard ? <LeaderBoard openLeaderBoard = {this.openLeaderBoard}/> : <div></div>}

      <Player url = 'sounds/backgroundmusic.mp3'/>

      </div>

      );

  }





}

export default Levels;
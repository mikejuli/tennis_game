import React from 'react';
import logo from './logo.svg';
import './App.css';
import Levels from './components/levels';
import Field from './components/gameField';
import $ from 'jquery'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {levelChosen:false, level: 0 , pattern: [], active:[]};
    this.handle = this.handle.bind(this);
    this.handleOff = this.handleOff.bind(this);
    this.fitLevel = this.fitLevel.bind(this);
  }


  handle(){
this.setState({levelChosen:true})
  }


  handleOff(level){
    console.log('invoked handleOff +', level)
    this.setState({levelChosen:false, level:0})

    $.ajax({method: 'POST',
    url: `http://localhost:9000/active`,
    data: {level: level+1},
    success: (result) => {

      console.log(result,'from success')

      this.setState({active: result})

      }

    })

  }

  fitLevel(level){

    this.setState({level: level})

  }

   componentDidMount(){
    console.log('WAS MOUNT');
    $.ajax({method: 'GET',
    url: `http://localhost:9000/active`,
    success: result => this.setState({active: result})

  })

    }




  componentDidUpdate( prevProps, prevState){

    //instead of this request we should change it on just retriving data(pattern) from active by using level as an index


    if(prevState.level!== this.state.level){


      if(this.state.level){
      var filtred = this.state.active.sort((a,b)=>a.level-b.level);

      var createPattern = filtred[this.state.level-1].pattern.split('').map(x=>parseInt(x));


      var top = 42;
var left = 2;
var count = 0;
var num = -1;
createPattern = createPattern.map( (x) => {


  if(count===13)

    {top+= 22; left = 2;count=0;}

    count++;

  if(x===0)
    {left += 42;return 0} else

    if (x===1)
      {
        num++;
        left += 42;
        return [top,left,num] }


})


 createPattern = createPattern.filter(x=>x!==0);


      this.setState({pattern: createPattern, patternChosen: true})

      // $.ajax({method: 'GET',
      // url: `http://localhost:9000/api?level=${this.state.level}`,
      // success: result => this.setState({pattern: result, patternChosen: true})})

      // console.log('update');
      }
    }


  }


render(){

  var popUp;

  if(this.state.levelChosen){

   popUp = <div><Field level = {this.state.level} pattern = {this.state.pattern} handleOff = {this.handleOff}/> <div>{this.state.level}</div></div>

  } else { popUp = <Levels handle = {this.handle} fitLevel = {this.fitLevel} active = {this.state.active}/>}




  return (

    <div className="App">

    <div>{popUp}</div>



    </div>

  );
}
}

export default App;

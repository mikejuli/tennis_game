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
    this.setState({levelChosen:false})

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
    if(prevState.level!== this.state.level){


      $.ajax({method: 'GET',
      url: `http://localhost:9000/api?level=${this.state.level}`,
      success: result => this.setState({pattern: result, patternChosen: true})})

      console.log('update');

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

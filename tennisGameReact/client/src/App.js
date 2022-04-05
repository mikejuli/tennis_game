import React from 'react';
import logo from './logo.svg';
import './App.css';
import Levels from './components/levels';
import Field from './components/gameField';
import $ from 'jquery'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {levelChosen:false, level: 0 , pattern: undefined};
    this.handle = this.handle.bind(this);
    this.fitLevel = this.fitLevel.bind(this);
  }


  handle(level){

this.setState({levelChosen:true})



  }

  fitLevel(level){

    this.setState({level: level})

  }

  componentDidMount(){

    console.log('was mounter');

    $.ajax({method: 'GET',
    url: `http://localhost:9000/api?level=${this.state.level}`,
    success: result => this.setState({pattern: result})})

  }




render(){

  var popUp;

  if(this.state.levelChosen){

   popUp = <div><Field level = {this.state.level} pattern = {this.state.pattern}/> <div>{this.state.level}</div></div>

  } else { popUp = <Levels handle = {this.handle} fitLevel = {this.fitLevel}/>}




  return (

    <div className="App">

    <div>{popUp}</div>



    </div>

  );
}
}

export default App;

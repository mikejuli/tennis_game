import React from 'react';
import logo from './logo.svg';
import './App.css';
import Levels from './components/levels';
import Field from './components/gameField'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {levelChosen:false, level: 0 };
    this.handle = this.handle.bind(this);
    this.fitLevel = this.fitLevel.bind(this);
  }


  handle(){

this.setState({levelChosen:true})
  }

  fitLevel(level){

    this.setState({level: level})
  }

  // componentDidUpdate(){

  //   if(this.state.levelChosen === true){

  //     console.log('pressed from App');

  //   }

  // }




render(){

  var popUp;

  if(this.state.levelChosen){

   popUp = <div><Field/> <div>{this.state.level}</div></div>

  } else { popUp = <Levels handle = {this.handle} fitLevel = {this.fitLevel}/>}




  return (

    <div className="App">

    <div>{popUp}</div>

    </div>

  );
}
}

export default App;

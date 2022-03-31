import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {button:false};
    this.handle = this.handle.bind(this);
  }


  handle(){

this.setState({button:true})
  }


  componentDidUpdate(){

    if(this.state.button=== true){


    }

  }




render(){

  var popUp;

  if(this.state.button){

    popUp = <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
  </header>

  } else { popUp = ""}




  return (

    <div className="App">

    <div>{popUp}</div>

      <button id = 'button' onClick={()=>this.handle()}>{'START'}</button>

    </div>

  );
}
}

export default App;

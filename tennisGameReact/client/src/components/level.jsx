import React from 'react';
import $ from 'jquery';

class Level extends React.Component {

  constructor(props) {
    super(props);

    this.state = { pressed: false, pattern: [], passed: this.props.passed}
    this.gettingPlay = this.gettingPlay.bind(this);
  }


  componentDidUpdate( prevProps, prevState){
    if(prevProps.passed!== this.props.passed){

      this.setState({passed: this.props.passed})


    }

  }


  //   $.ajax({

  //     method: 'GET',
  //     url: `http://localhost:9000/api?level=${this.props.level}`,
  //     success: result => this.setState({pattern: result, pressed: true})
  // })






  gettingPlay(){



    this.setState({pressed: true})
    console.log('here');


}






  render(){

    var pr;

    if(this.state.pressed){

      console.log(this.props.level);
      this.props.fitLevel(this.props.level);
      this.props.handle();
    console.log('pressedfromField');



     } else {

      if(this.state.passed){

      if (this.state.passed.passed){

        pr = <div id = {`s${this.props.level}`}><button class='button' onClick={()=>this.gettingPlay(this)} >Level {this.props.level}</button></div>


      } else {

        pr = <div id = {`s${this.props.level}`}><button class='disButton' disabled onClick={()=>this.gettingPlay(this)} >Level {this.props.level}</button></div>


      }

    }

    }

    return(
      <div>{pr}</div>


    )

  }

}

export default Level;
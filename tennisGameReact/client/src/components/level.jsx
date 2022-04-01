import React from 'react';


class Level extends React.Component {

  constructor(props) {
    super(props);

    this.state = { pressed: false}
    this.gettingPlay = this.gettingPlay.bind(this);
  }

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
    pr = <button onClick={()=>this.gettingPlay(this)} >Level {this.props.level}</button>
    }

    return(
      <div>{pr}</div>


    )

  }

}

export default Level;
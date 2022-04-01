import React from 'react';
import Level from './level';

class Levels extends React.Component {

  constructor(props){
    super(props)

    this.state = {selected: false}

  }


  render() {

    var arr = [];
    var arrS = [];
    var s = 0;

    for(var i=0; i<5; i++){

      arr = [];
      for(var j = 0; j<10; j++){
        s++;
        arr.push(<td > <Level level = {s} handle = {this.props.handle} fitLevel = {this.props.fitLevel}/> </td>);
      }


      arrS.push(<tr>{arr}</tr>);



    }

    return(<div>


      <table id = 'levels'>


      {arrS}


        </table>

      </div>);

  }





}

export default Levels;
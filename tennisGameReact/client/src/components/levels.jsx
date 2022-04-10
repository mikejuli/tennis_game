import React from 'react';
import Level from './level';
import $ from 'jquery';

class Levels extends React.Component {

  constructor(props){
    super(props)

    this.state = {selected: false , active: []}

  }


  componentDidMount(){

    $.ajax({method: 'GET',
    url: `http://localhost:9000/active`,
    success: result => this.setState({active: result})

  })

    }





  render() {

    var arr = [];
    var arrS = [];
    var s = 0;

    for(var i=0; i<5; i++){

      arr = [];
      for(var j = 0; j<10; j++){
        s++;
        arr.push(<td > <Level level = {s} handle = {this.props.handle} fitLevel = {this.props.fitLevel} passed = {this.state.active[s-1]}/> </td>);
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
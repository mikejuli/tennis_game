import React from 'react';
import Level from './level';
import $ from 'jquery';

class Levels extends React.Component {

  constructor(props){
    super(props)

    this.state = {selected: false , active: []}

  }


  // componentDidMount(){
  //   console.log('WAS MOUNT');
  //   $.ajax({method: 'GET',
  //   url: `http://localhost:9000/active`,
  //   success: result => this.setState({active: result})

  // })

  //   }




  componentDidUpdate( prevProps, prevState){
    if(prevProps.active!== this.props.active){

      this.setState({active:this.props.active})

    }}


//       $.ajax({method: 'GET',
//       url: `http://localhost:9000/active`,
//       success: result => this.setState({active: result})

//     })


//     }
// }


  render() {
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
        arr.push(<td > <Level level = {s} handle = {this.props.handle} fitLevel = {this.props.fitLevel} passed = {filtred[s-1]}/> </td>);

        //passed = this.state.active.filter(level[s-1]) smth like this

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
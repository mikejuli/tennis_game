import React from 'react';


class TenLevels extends React.Component {

  constructor(props){
    super(props);
    this.state = {showed:false}
  }



  componentDidMount(){

    if(this.props.picked === this.props.number){
      this.setState({showed: true})
    }
  }

  componentDidUpdate(prevProps,prevState){

    if(prevProps.picked!== this.props.picked){

      if(this.props.picked === this.props.number){
        this.setState({showed: true})
      } else {

        this.setState({showed: false})


      }

    }

  }






  render(){




return (


// <div>{this.state.showed?this.props.arr:<div></div>}</div>

<div>{this.props.arr}</div>

)

  }


}

export default TenLevels;
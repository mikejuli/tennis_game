import React from 'react';


class BackgroundImage extends React.Component {

  constructor(props){
    super(props);
    this.state = ({})
  }





  render() {



    const urls = {
      first: this.props.arrS[0],
      second: this.props.arrS[1],
      third: this.props.arrS[2],
      fourth: this.props.arrS[3],
      fifth: this.props.arrS[4]
    };

    const style = {
      position: 'absolute'
    };

  //  if(this.props.arrow===1){
  //    console.log(this.props.arrow)
  //     src = urls.first;
  //  } else if (this.props.arrow ===2){
  //     src = urls.second;
  //  }
// console.log(this.props.arrow)
// console.log(src)

let src = urls[this.props.page]

  return <div id = 'some' style = {style}>{src}</div>;
  }
}
export default BackgroundImage;
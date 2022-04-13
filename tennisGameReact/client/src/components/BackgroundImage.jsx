import React from 'react';
class BackgroundImage extends React.Component {
  render() {
    const urls = {
      home: 'http://i.imgur.com/kJXRAZH.jpg',
      about: 'http://i.imgur.com/TaA1gj9.png'
    };
    const style = {
      position: 'absolute',
      backgroundColor: '#FFFEF4',
      height: '100%'
    };
   let src = urls[this.props.page];

  return <img src={src} style={style} />;
  }
}
export default BackgroundImage;
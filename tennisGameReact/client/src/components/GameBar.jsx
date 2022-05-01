import React from 'react';

const GameBar = (props) => {
  React.useEffect(() => {
    window.addEventListener('keydown', (event) => {
      console.log('hello');
    });
  }, []);

  var s = '1234';

  return (
    <div className='container'>
      <h1>{s}Welcome to the Keydown Listening Component</h1>
    </div>
  );
};

export default GameBar;
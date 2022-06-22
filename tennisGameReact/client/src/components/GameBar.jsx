import React, {useState} from 'react';

const GameBar = (props) => {

  const [value, inc] = useState(0);

  React.useEffect(() => {
    window.addEventListener('keydown', (event) => {

      console.log('hello');
      inc(value + 1);

    });
  }, []);


  return (
    <div className='container'>
      <h1>{value}Welcome to the Keydown Listening Component</h1>
    </div>
  );
};

export default GameBar;
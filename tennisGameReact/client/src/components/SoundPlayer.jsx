import React, {useEffect, useState} from 'react'
import {setSound} from '../features/sound'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import Player from './Player';

const SoundPlayer = (props) => {

  const [sound, soundPlayed] = useState(true);
  const [audio] = useState(new Audio(props.path));

  const soundRedux = useSelector((state)=>state)

    useEffect(()=>{

      if(!props.background){

      console.log(soundRedux.sound.value, `redux from ${props}`);

      if(soundRedux.sound.value){
        if(sound){
          soundPlayed(false);
          audio.play();
        }
    }
  } else {

    if(soundRedux.sound.value){

      audio.play();


    }else{
      audio.pause();
    }


  }



  })


}

export default SoundPlayer;


// const useAudio = url => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(false);

//   //const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//       playing ? audio.play() : audio.pause();
//     },
//     [playing]
//   );

//   useEffect(() => {
//     audio.addEventListener('ended', () => setPlaying(false));
//     return () => {
//       audio.removeEventListener('ended', () => setPlaying(false));
//     };
//   }, []);

//   return [playing, toggle];
// };

// const Player = ({ url }) => {
//   const [playing, toggle] = useAudio(url);

//   return (
//     <div style = {{position: 'absolute'}}>
//       {/* <button onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
//     </div>
//   );
// };
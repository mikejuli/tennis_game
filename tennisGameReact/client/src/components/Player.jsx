import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux'

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);
  const soundRedux = useSelector((state)=>state)


  useEffect(()=>{

    setPlaying(soundRedux.sound.value);

  })

  useEffect(() => {


      playing ? audio.play() : audio.pause();


   return () => { audio.pause();}



    },
    [playing]
  );

  // useEffect(() => {
  //   audio.addEventListener('ended', () => setPlaying(false));
  //   return () => {
  //     audio.pause();
  //     console.log('from removeeventlistener')
  //     audio.removeEventListener('ended', () => setPlaying(false));
  //   };
  // }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  // return (
  //   <div style = {{position: 'absolute'}}>
  //     <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
  //   </div>
  // );
};

export default Player;
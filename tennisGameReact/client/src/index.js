import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import skinReducer from './features/skin'
import skinReducerCoin from './features/skinCoin'
import skinReducedUpdate from './features/availiableSkin'
import soundReducer from './features/sound'
import itemReducer from './features/boughtItems'
import loaderReducer from './features/loader'
import loaderMessageReducer from './features/loaderMessage'

const store = configureStore({


  reducer:{
    skin: skinReducer,
    gold: skinReducerCoin,
    skinArray: skinReducedUpdate,
    sound: soundReducer,
    item: itemReducer,
    loader: loaderReducer,
    loaderMessage: loaderMessageReducer,
  }

})

console.log(store);

const container = document.getElementById('root')
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Provider store = {store}><App /></Provider>);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//add reference to Music by <a href="https://pixabay.com/users/nojisuma-23737290/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=109881">nojisuma</a> from <a href="https://pixabay.com/music//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=109881">Pixabay</a>
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

const store = configureStore({


  reducer:{
    skin: skinReducer,
    gold: skinReducerCoin,
    skinArray: skinReducedUpdate
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

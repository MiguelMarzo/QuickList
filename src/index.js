import React from "react";
import ReactDOM from "react-dom";
import { App } from "./views/App.tsx";
import { FirebaseContext, Firebase } from './firebase'
import 'typeface-roboto';
import "core-js/stable";
import "regenerator-runtime/runtime";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

const rootNode = document.querySelector('#root')

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>,
    rootNode
  )
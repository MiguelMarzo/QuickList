import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App.tsx";
import { FirebaseContext, Firebase } from './firebase'

const rootNode = document.querySelector('#root')

ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>,
    rootNode
  )
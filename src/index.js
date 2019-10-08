/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Firebase, { FirebaseContext } from './components/Firebase';

//ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>,
    document.getElementById('root'),
  );
registerServiceWorker()

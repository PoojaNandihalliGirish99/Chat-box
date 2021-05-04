import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { Provider} from 'react-redux'
import store from './store'

var firebaseConfig = {
  apiKey: "AIzaSyCmRNvsskpX6OJ1YCO-LUTLcWskw0ZstOs",
  authDomain: "chat-box-76829.firebaseapp.com",
  projectId: "chat-box-76829",
  storageBucket: "chat-box-76829.appspot.com",
  messagingSenderId: "884208089560",
  appId: "1:884208089560:web:a917b732694598dd8adaad"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(

  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

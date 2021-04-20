import React from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import 'react-toastify/dist/ReactToastify.css';
import AllReducers from './Store/Reducers';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

toast.configure({
  autoClose: 4000,
  draggable: false,
  position: toast.POSITION.TOP_RIGHT,
  hideProgressBar: true,
  pauseOnFocusLoss: false,
});

const store = createStore(AllReducers, applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

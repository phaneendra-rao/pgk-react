import React from 'react';
import ReactDOM from 'react-dom';
import { toast } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import Provider from 'react-redux/es/components/Provider';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import 'react-toastify/dist/ReactToastify.css';
import AllReducers from './Store/Reducers';
import {webportalAppRootSaga} from './Store/Sagas';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import history from './@history';

toast.configure({
  autoClose: 4000,
  draggable: false,
  position: toast.POSITION.TOP_RIGHT,
  hideProgressBar: true,
  pauseOnFocusLoss: false,
});

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

const store = createStore(AllReducers, composeWithDevTools(applyMiddleware(sagaMiddleware, thunk)));
// const store = createStore(AllReducers, applyMiddleware(thunk));

sagaMiddleware.run(webportalAppRootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}  basename="/corporate">
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

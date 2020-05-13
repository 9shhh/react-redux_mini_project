import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import {Provider} from 'react-redux'; // react-redux를 사용하기 위함
import store from './store'; // redux store

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);



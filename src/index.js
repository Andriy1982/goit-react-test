import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

console.log(store);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root'),
);

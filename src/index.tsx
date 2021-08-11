import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { StylesProvider } from '@material-ui/core/styles';
import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import '../src/styles/normalize.scss';
import './index.css';
import '../src/styles/base.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <PersistGate persistor={persistor}>
          <StylesProvider injectFirst>
            <App />
          </StylesProvider>
        </PersistGate>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

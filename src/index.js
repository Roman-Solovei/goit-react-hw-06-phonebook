import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

// import { App } from './App';

const theme = {};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>     
      <ThemeProvider theme={theme}>
         <App />
      </ThemeProvider>      
    </Provider>
  </React.StrictMode>
);



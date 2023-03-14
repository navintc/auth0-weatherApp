import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import store from './redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* Auth0 provider */}
    <Auth0Provider
      domain="dev-nk0wwwiyiofesb78.us.auth0.com"
      clientId="SzHCg1LOOuGSqCFeLL1sVVnzepH8V9AM"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      {/* redux provider */}
      <Provider store={store}>
        <App />
      </Provider>
      
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

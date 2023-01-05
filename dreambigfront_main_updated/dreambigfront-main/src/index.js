import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChatContextProvider } from './store/ChatContext';
import { AuthContextProvider } from './store/AuthContext';
import store from "../src/screens/Quiz/redux/store"
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <ChatContextProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </ChatContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
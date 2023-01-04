import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChatContextProvider } from './store/ChatContext';
import { AuthContextProvider } from './store/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <ChatContextProvider>
    <App />
    </ChatContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
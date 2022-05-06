import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirebaseAppProvider from '@firebase/app-provider';
import firebaseConfig from './firebaseconfig';
import { Suspense } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/AuthProvider';
import { ProjectProvider } from './providers/ProjectProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ProjectProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
    </ProjectProvider>
  </BrowserRouter>
);


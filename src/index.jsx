import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

// import 'bootstrap/dist/css/bootstrap.min.css';

import '@coreui/coreui/dist/css/coreui.min.css'

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

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


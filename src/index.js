import 'rsuite/dist/rsuite-no-reset.min.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import App from './App';
import './styles/app.css';
import "./styles/navbar.css";

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

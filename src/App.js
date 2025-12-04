import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PlayerPage from './pages/PlayerPage';
import NavBar from "./components/NavBar";
import "./styles/app.css";
import "./styles/navbar.css";


export default function App(){
    return (
        <div className="app">
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/player/:id" element={<PlayerPage />} />
                </Routes>
            </main>
        </div>
    );
}

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PlayerPage from './pages/PlayerPage';

export default function App(){
    return (
        <div className="app">
            <header className="app-header">
                <Link to="/" className="brand">zentraTV</Link>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/player/:id" element={<PlayerPage />} />
                </Routes>
            </main>
        </div>
    );
}

import React from "react";
import "./../styles/navbar.css";

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="logo-text">zentraTV</span>
            </div>

            <div className="navbar-links">
                <a href="/">Home</a>
                <a href="/">Movies</a>
                <a href="/">Series</a>
            </div>
        </nav>
    );
}

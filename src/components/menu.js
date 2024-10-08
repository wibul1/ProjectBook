// src/components/Menu.js
import React from 'react';
import '../styles/Menu.css';

function Menu({ onMenuClick }) {
    return (
        <div className="menu-container">
            <ul className="menu-list">
                <li><a href="#" onClick={() => onMenuClick("newBookAll")}>New Book</a></li>
                <li><a href="#" onClick={() => onMenuClick("Business")}>Business Books</a></li>
                <li><a href="#" onClick={() => onMenuClick("Lifestyle")}>Lifestyle Books</a></li>
                <li><a href="#" onClick={() => onMenuClick("Education")}>Education Books</a></li>
            </ul>
        </div>
    );
}

export default Menu;

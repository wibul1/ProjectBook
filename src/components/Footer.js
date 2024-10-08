// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css'; // Import CSS

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} BookStore. All rights reserved.</p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </footer>
    );
}

export default Footer;
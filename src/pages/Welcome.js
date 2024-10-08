import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Welcome.css'

function Welcome() {
    const navigate = useNavigate();

    const handleProfileClick = () => {
        navigate('/profile');
    };

    const handleBookSaleClick = () => {
        navigate('/home');
    };

    return (
        <div className="div">
            <h1>Welcome to the Website</h1>
            <button className="button-welcome" name="Profile" onClick={handleProfileClick}>Go to Profile</button>
            <button className="button-welcome" name="Book"  onClick={handleBookSaleClick}>Go to Book Sale</button>
        </div>
    );
}

export default Welcome;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import '../styles/Header.css';

function Header() {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="header">
            <h1>Book Store</h1>
            <div className="cart-info">
                {cartItems.length > 0 ? (
                    <Link to="/cart" className="view-cart-button">
                        ดูตะกร้า ({cartItems.length})
                    </Link>
                ) : (
                    <span>ตะกร้าว่างเปล่า</span>
                )}
            </div>
        </div>
    );
}

export default Header;

import React, { useState } from 'react';
import '../styles/CartPopup.css';
import { useNavigate } from 'react-router-dom';

function CartPopup({ book, onAddToCart, onClose }) {
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        onAddToCart(quantity);
        onClose();
        navigate('/home');
    };

    return (
        <div className="cart-popup-overlay">
            <div className="cart-popup">
                <h3>{book.name}</h3>
                <div className="quantity-control">
                    <button onClick={decreaseQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increaseQuantity}>+</button>
                </div>
                <button onClick={handleAddToCart}>ยืนยัน</button>
                <button onClick={onClose}>ยกเลิก</button>
            </div>
        </div>
    );
}

export default CartPopup;

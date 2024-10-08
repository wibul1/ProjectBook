import React, { useState } from 'react';
import '../styles/CartPopup.css';
import { useNavigate } from 'react-router-dom';

function CartPopupPayment({ book, onAddToCart, onClose }) {
    const [Quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    // คำนวณราคาทั้งหมดตามจำนวนสินค้า
    const totalPrice = book.price * Quantity;

    const handleAddToCart = () => {
        onAddToCartquantity(Quantity,totalPrice);
        onClose();
    };

    return (
        <div className="cart-popup-overlay">
            <div className="cart-popup">
                <h3>{book.name}</h3>
                <h3>ราคา: {totalPrice} บาท</h3> {/* แสดงราคาที่คำนวณได้ */}
                <div className="quantity-control">
                    <button onClick={decreaseQuantity}>-</button>
                    <span>{Quantity}</span>
                    <button onClick={increaseQuantity}>+</button>
                </div>
                <button onClick={handleAddToCart}>ยืนยัน</button>
                <button onClick={onClose}>ยกเลิก</button>
            </div>
        </div>
    );
}

export default CartPopupPayment;

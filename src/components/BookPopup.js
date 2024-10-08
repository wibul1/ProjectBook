import React from 'react';
import '../styles/BookPopup.css';

function BookPopup({ book, onClose }) {
    const handlePopupClick = (e) => {
        e.stopPropagation(); // ป้องกันการส่งต่อเหตุการณ์คลิกไปที่องค์ประกอบอื่น
        
    };

    const handleOverlayClick = (e) => {
        if (e.target.className.includes('popup-overlay')) {
            onClose(); // ปิดป๊อบอัพเมื่อคลิกที่พื้นหลัง
        }
    };

   return (
        <div className="popup-overlay show" onClick={handleOverlayClick}>
            <div className="popup-content" onClick={handlePopupClick}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <img src={book.img} alt={book.name} className="popup-img" />
                <h2>{book.name}</h2>
                <p>{book.description}</p>
                <p>{book.price} ดอลล่า</p>
                <button className="select-button">เลือกหนังสือ</button>
            </div>
        </div>
    );
}

export default BookPopup;

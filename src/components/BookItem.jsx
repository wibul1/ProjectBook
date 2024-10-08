import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BookItem.css';

function BookItem({ book }) {
    const navigate = useNavigate();

    const handleDetailClick = (e) => {
        e.stopPropagation(); // ป้องกันไม่ให้คลิกที่ปุ่มส่งผลต่อองค์ประกอบอื่น
        navigate(`/book/${book._id}`); // ส่ง id ของหนังสือไปใน URL
    };

    return (
        <div className="book-item" onClick={handleDetailClick}>
            <img name="item"  valu={book.name} src={book.img} alt={book.name} />
            <h3>{book.name}</h3>
            <h3>{book.price} บาท</h3>
            <h3>{book.book_depository_stars} คะแนน</h3>
        </div>
    );
}

export default BookItem;

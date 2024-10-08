import React, { useState, useEffect } from 'react';
import BookItem from './BookItem';
import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate
import '../styles/BookCategoryGroup.css';

function BookCategoryGroup({ title, category }) {
    const [books, setBooks] = useState([]);
    // const navigate = useNavigate(); // Use useNavigate instead of useHistory

    useEffect(() => {
        let apiUrl = '';

        // ตรวจสอบหมวดหมู่ที่ถูกเลือกและกำหนด URL ของ API
        if (category === "newBookAll") {
            apiUrl = `https://product-ten-theta.vercel.app/product/newBookAll`;
        } else {
            apiUrl = `https://product-ten-theta.vercel.app/product/book?category=${category}`;
        }

        // เรียกใช้ API ตามหมวดหมู่ที่เลือก
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setBooks(data.data);
                }
                // console.log(data.data);
            })
            .catch(error => console.error('Error fetching books:', error));

    }, [category]);  // เมื่อ category เปลี่ยน useEffect จะทำงานอีกครั้ง


    return (
        <div>
            <h2>{title}</h2>
            <div className="main-content-category">
                
                {books.map((book) => (
                    <div key={book._id} className="book-item">
                        <img src={book.img} alt={book.name} />
                        <h3>{book.name}</h3>
                        <p>{book.price} บาท</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookCategoryGroup;

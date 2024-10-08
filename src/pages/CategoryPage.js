import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/CategoryPage.css'

function CategoryPage({ booksData }) {
    const { category } = useParams();

    const books = booksData.filter(book => book.category === category);

    return (
        <div>
            <h2>{category} Books</h2>
            <div className="book-grid">
                {books.map((book, index) => (
                    <div className="book-item" key={index}>
                        <img src={book.img} alt={book.name} />
                        <p>{book.name}</p>
                        <p>{book.price} ดอลลาร์</p>
                        <p>{book.rating} คะแนน</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;

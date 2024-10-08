import React, { useState, useEffect } from 'react';
import BookItem from './BookItem';
import { useNavigate } from 'react-router-dom'; // Replace useHistory with useNavigate
import '../styles/BookCategory.css';

function BookCategory({ title, category }) {
    const [books, setBooks] = useState([]);
    // const navigate = useNavigate(); // Use useNavigate instead of useHistory

    useEffect(() => {
        fetch(`https://product-ten-theta.vercel.app/product/book?category=${category}`)
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setBooks(data.data);
                }
            })
            .catch(error => console.error('Error fetching books:', error));
    }, [category]);

    // const handleViewMore = () => {
    //     navigate(`/category/${category}`); // Use navigate to redirect
    // };

    return (
        <div className="book-category">
            <h2>{title}</h2>
            <div className="book-category-scroll"> {/* Use a scrollable container */}
                {books.slice(0, 10).map(book => (
                    <BookItem key={book._id} book={book} />
                ))}
            </div>
            {/* {books.length > 5 && (
                <button onClick={handleViewMore} className="view-more-button">
                    View More
                </button>
            )} */}
        </div>
    );
}

export default BookCategory;

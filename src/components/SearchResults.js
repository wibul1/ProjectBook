import React from 'react';
import BookItem from './BookItem';
import '../styles/SearchResults.css'; // คุณสามารถสร้างและใช้สไตล์แยกสำหรับผลลัพธ์การค้นหาได้

function SearchResults({ results }) {
    return (
        <div className="search-results">
            {results.length > 0 ? (
                results.map(book => (
                    <BookItem key={book._id} book={book} />
                ))
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
}

export default SearchResults;

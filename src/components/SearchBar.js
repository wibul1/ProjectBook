import React, { useState } from 'react';
import '../styles/SearchBar.css'

function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://product-ten-theta.vercel.app/product/searchbook?namebook=${query}`);
            const data = await response.json();
            if (data && Array.isArray(data.data)) {
                onSearch(data.data); // ส่งผลลัพธ์การค้นหากลับไปที่ BookList
            } else {
                onSearch([]); // ถ้าไม่พบผลลัพธ์ ให้ส่ง Array ว่างกลับไป
            }
        } catch (error) {
            console.error('Error fetching search results:', error);
            onSearch([]); // ในกรณีที่เกิดข้อผิดพลาด
        }
    };

    return (
        <form onSubmit={handleSearch}>
            <div className="search-bar">
                <input
                    className="search-bar input"
                    name="search"
                    type="text"
                    placeholder="Search books..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="search-bar button" name="buttonSearch" type="submit">Search</button>
            </div>
        </form>
    );
}

export default SearchBar;

import React, { useState } from 'react';
import Header from './Header';
import Carousel from './CustomCarousel';
import SearchBar from './SearchBar';
import BookCategory from './BookCategory';
import BookCategoryGroup from './BookCategoryGroup';
import Footer from './Footer';
import SearchResults from './SearchResults';
import '../styles/BookList.css'
import Menu from './menu'

function BookList() {
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        { title: "Business Books", category: "Business" },
        { title: "Lifestyle Books", category: "Lifestyle" },
        { title: "Education Books", category: "Education" },
    ];

    const handleSearch = (results) => {
        setSearchResults(results); // เก็บผลลัพธ์การค้นหาใน state
        setIsSearching(true); // ตั้งค่า state เพื่อแสดงว่าอยู่ในโหมดการค้นหา
    };

    const handleMenuClick = (category) => {
        setSelectedCategory(category);
        setIsSearching(false); // ออกจากโหมดการค้นหาเมื่อเลือกเมนู
    };

    return (
        <div className="app-container">
            <div className="Header">
                <Header/>
            </div>
            <div className="Carousel">
                <Carousel/>
            </div>
            <div className="main-content">
                <div>
                    <SearchBar onSearch={handleSearch} /> {/* ส่ง handleSearch ไปที่ SearchBar */}
                </div>
                <div className="container">
                    <div className="left-side">
                    <Menu onMenuClick={handleMenuClick} />
                    </div>
                    <div className="right-side">
                        <div className="categories">
                            {isSearching ? (
                                <SearchResults results={searchResults} /> // แสดงผลลัพธ์ที่ค้นหาได้
                            ) :  selectedCategory ? (
                                <BookCategoryGroup
                                    title={`${selectedCategory} `}
                                    category={selectedCategory}
                                />
                            ) : (
                                categories.map((category, index) => (
                                    <BookCategory
                                        key={index}
                                        title={category.title}
                                        category={category.category}
                                    />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default BookList;

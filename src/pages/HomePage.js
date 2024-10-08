import React from 'react';
import BookList from '../components/BookList';

function HomePage() {
    return (
        <div>
            <BookList />
        </div>
    );
}

export default HomePage;

// import React from 'react';
// import Header from '../components/Header';
// import Carousel from '../components/Carousel';
// import SearchBar from '../components/SearchBar';
// import BookCategory from '../components/BookCategory';
// import Footer from '../components/Footer';
// import { Routes, Route } from 'react-router-dom';

// function BookList() {
//     return (
//         <div className="app-container">
//             <Header />
//             <Carousel />
//             <div className="main-content">
//                 <SearchBar />
//                 <div className="categories">
//                     <Routes>
//                         <Route path="/" element={
//                             <>
//                                 <BookCategory title="Business Books" category="Business" />
//                                 <BookCategory title="Lifestyle Books" category="Lifestyle" />
//                                 <BookCategory title="Education Books" category="Education" />
//                                 {/* Add other categories as needed */}
//                             </>
//                         } />
//                     </Routes>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default BookList;

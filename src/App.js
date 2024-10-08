import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import BookDetailPage from './pages/BookDetailPage';
import CategoryPage from './pages/CategoryPage';
import { CartProvider } from './CartContext'; // นำเข้า CartProvider
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import Slide from './profilepages/slide';
import Certificate from './profilepages/certificate';
import Performance from './profilepages/performance';
import LoginPage from './pages/loginPage';

function App() {
    return (
        <CartProvider> {/* ห่อหุ้มด้วย CartProvider */}
            <Router>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/slide" element={<Slide />} />
                    <Route path="/certificate" element={<Certificate />} />
                    <Route path="/performance" element={<Performance />} />
                    <Route path="/book/:id" element={<BookDetailPage />} />
                    <Route path="/category/:category" element={<CategoryPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/payment/:paymentId" element={<PaymentPage />} />
                    <LoginPage onLoginSuccess={handleLoginSuccess} />
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;

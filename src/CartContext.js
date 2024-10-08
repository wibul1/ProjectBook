import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // ฟังก์ชันดึงข้อมูลจาก API ตาม userId
        const fetchCartItems = async () => {
            try {
                const userId = "66e15868bd6e6fa8a5493a9a"; // ต้องแทนที่ด้วย user id ที่แท้จริง
                const status = "pending";
                const response = await fetch(`https://product-ten-theta.vercel.app/order/getOrdersByUser?userId=${userId}&status=${status}`);
                const data = await response.json();
                // console.log(data.data); // ตรวจสอบว่า data.data มีข้อมูลถูกต้อง

                if (data && Array.isArray(data.data)) { // ตรวจสอบว่า data.data เป็นอาร์เรย์
                    setCartItems(data.data); // ตั้งค่า cartItems จาก data.data
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
    }, []);

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    );
};

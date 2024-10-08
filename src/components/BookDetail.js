import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../CartContext';
import CartPopup from './CartPopup';
import CartPopupPayment from './CartPopupPayment.js';
import '../styles/BookDetail.css';

function BookDetail({ id , onOrderCreated }) {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showAddToCartPopup, setShowAddToCartPopup] = useState(false);
    const [showPaymentPopup, setShowPaymentPopup] = useState(false);

    useEffect(() => {
        fetch(`https://product-ten-theta.vercel.app/product?id=${id}`)
            .then(response => response.json())
            .then(data => {
                setBook(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching book details:', error);
                setLoading(false);
            });
    }, [id]);

    const handleAddToCart = async (quantity) => {
        try {
            const response = await fetch('https://product-ten-theta.vercel.app/order/createOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: "66e15868bd6e6fa8a5493a9a", 
                    productId: id,
                    quantity: quantity,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Order created:', data);
                onOrderCreated(data.data._id); // ส่ง orderId กลับไป
            } else {
                console.error('Failed to create order');
            }
        } catch (error) {
            console.error('Error:', error);
        }

        setShowPopup(false);
    };

    if (loading) {
        return <div className="textcenter">กำลังโหลด...</div>;
    }

    if (!book) {
        return <div className="textcenter">ไม่พบข้อมูลหนังสือ</div>;
    }

    const handleAddToCartpayment = async (Quantity,totalPrice) => {
        const response = await fetch('https://product-ten-theta.vercel.app/payment/createPayment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: "66e15868bd6e6fa8a5493a9a", 
                orderId: "-", // ส่งเฉพาะ _id ของ orders
                // orderId: ["66c2f3ea0b6ba7142abf2332","66c2f98b0b6ba7142abf243a"], // ส่งเฉพาะ _id ของ orders
                paymentMethod: "QR Code", // ตัวอย่าง method การชำระเงิน
                quantity: Quantity,
                amount: totalPrice, // ใช้ totalPrice ที่คำนวณแล้ว
            }),
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Payment created:', data);
            onOrderCreated(data.data._id); // ส่ง orderId กลับไป
        } else {
            console.error('Failed to create Payment');
        }
    }

    return (
        <div className="book-detail">
            <img src={book.img} alt={book.name} />
            <h2>{book.name}</h2>
            {/* <p>{book.description}</p> */}
            <p>{book.price} ดอลล่า</p>
            <button onClick={() => setShowAddToCartPopup(true)}>เพิ่มลงตะกร้า</button>
<button onClick={() => setShowPaymentPopup(true)}>ซื้อเลย</button>

{showAddToCartPopup && <CartPopup book={book} onAddToCart={handleAddToCart} onClose={() => setShowAddToCartPopup(false)} />}
{showPaymentPopup && <CartPopupPayment book={book} onAddToCart={handleAddToCartpayment} onClose={() => setShowPaymentPopup(false)} />}
            </div>
    );
}


export default BookDetail;

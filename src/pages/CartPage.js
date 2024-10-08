import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import '../styles/CartPage.css';
import Order from '../components/order';
import { useNavigate } from 'react-router-dom'; // ใช้ useNavigate แทน useHistory

function CartPage() {
    const { cartItems } = useContext(CartContext);
    const [selectedOrders, setSelectedOrders] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate(); // ใช้ useNavigate แทน useHistory

    const handleSelectOrder = (orders) => {
        setSelectedOrders(orders);
        const total = orders.reduce((acc, order) => acc + parseFloat(order.sumPrice), 0);
        setTotalPrice(total.toFixed(2));
    };

    const handlePayment = async () => {
        if (selectedOrders.length === 0) {
            alert('กรุณาเลือกออเดอร์ที่ต้องการชำระเงิน');
            return;
        }

        const response = await fetch('https://product-ten-theta.vercel.app/payment/createPayment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: "66e15868bd6e6fa8a5493a9a", 
                orderId: selectedOrders.map(order => order._id), // ส่งเฉพาะ _id ของ orders
                // orderId: ["66c2f3ea0b6ba7142abf2332","66c2f98b0b6ba7142abf243a"], // ส่งเฉพาะ _id ของ orders
                paymentMethod: "QR Code", // ตัวอย่าง method การชำระเงิน
                quantity: 1,
                amount: totalPrice, // ใช้ totalPrice ที่คำนวณแล้ว
            }),
        });
        // console.log(response);
        if (response.ok) {
            const data = await response.json();
            console.log('Payment ID:', data.data._id); 
            console.log('Payments created:', data);
            alert('การชำระเงินเสร็จสิ้น');
            navigate(`/payment/${data.data._id}`); // เปลี่ยนหน้าไปยัง PaymentPage พร้อมกับส่ง paymentId
        } else {
            console.error('Failed to create payment');
        }
    };

    return (
        <div className="cart-page">
            <h2 className="textcenter">ตะกร้าของคุณ</h2>
            <Order onSelectOrder={handleSelectOrder} />
            <div>ราคาสุทธิของออเดอร์ที่เลือก: {totalPrice} บาท</div>
            <button className="pay-button" onClick={handlePayment}>ชำระเงิน</button>
        </div>
    );
}

export default CartPage;

// BookDetailPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import Order from '../components/order';
import Payment from '../components/payment';

function BookDetailPage() {
    const { id } = useParams();
    const [orderId, setOrderId] = useState(null); // เพิ่ม state สำหรับเก็บ orderId
    const userId = "66e15868bd6e6fa8a5493a9a"; // ถ้าเปลี่ยนเป็น login ไฟล์ที่ต้องปรับมี 5 ไฟล์ ไฟล์นี้ cartPage BookDetail order CartContext

    const handleOrderCreated = (newOrderId) => {
        setOrderId(newOrderId);
    };

    return (
        <div>
            <h1>รายละเอียดหนังสือ</h1>
            <BookDetail id={id} onOrderCreated={handleOrderCreated} />
            {orderId && <Order bookId={id} userId={userId} />}
            {orderId && <Payment userId={userId} orderId={orderId} />}
        </div>
    );
}

export default BookDetailPage;

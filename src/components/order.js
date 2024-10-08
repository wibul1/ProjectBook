// นำเข้า useEffect, useState, PropTypes 
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 
import '../styles/order.css';


function Order({ onSelectOrder }) {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedOrderIds, setSelectedOrderIds] = useState([]);
    

    useEffect(() => {
        const userId = "66e15868bd6e6fa8a5493a9a";
        const status = "pending";
        fetch(`https://product-ten-theta.vercel.app/order/getOrdersByUser?userId=${userId}&status=${status}`)
            .then(response => response.json())
            .then(data => {
                setOrders(data.data || []);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        // ส่งข้อมูล order ที่เลือกกลับไปให้ CartPage 
        const selectedOrders = orders.filter(order => selectedOrderIds.includes(order._id));
        if (selectedOrders.length !== 0) {
        onSelectOrder(selectedOrders);
        }
    }, [selectedOrderIds]);
    
    const handleSelectOrder = (orderId) => {
        if (selectedOrderIds.includes(orderId)) {
            setSelectedOrderIds(selectedOrderIds.filter(id => id !== orderId));
        } else {
            setSelectedOrderIds([...selectedOrderIds, orderId]);
        }
    };

    const handleDeleteOrder = async (orderId) => {
        try {
            const response = await fetch('https://product-ten-theta.vercel.app/order/deleteOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ idorder: orderId }),
            });

            if (response.ok) {
                setOrders(orders.filter(order => order._id !== orderId));
                console.log('Order deleted:', orderId);
                
            } else {
                console.error('Failed to delete order');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    

    if (loading) {
        return <div>กำลังโหลด...</div>;
    }

    return (
        <ul className="order-list">
            {orders.map(order => (
                <li key={order._id}>
                    <input
                        type="checkbox"
                        checked={selectedOrderIds.includes(order._id)}
                        onChange={() => handleSelectOrder(order._id)}
                    />
                    <img src={order.productId.img} alt={order.productId.name} />
                    <div>ชื่อหนังสือ: {order.productId.name}</div>
                    <div>จำนวน: {order.quantity}</div>
                    <div>ราคา: {order.sumPrice}</div>
                    <div className={`order-status ${order.status.toLowerCase()}`}>
                        {order.status === "Completed" ? "เสร็จสิ้น" :
                            order.status === "Pending" ? "กำลังดำเนินการ" :
                                order.status === "Canceled" ? "ยกเลิก" : order.status}
                    </div>
                    <button className="deleteOrder" onClick={() => handleDeleteOrder(order._id)}>ลบ</button>
                </li>
            ))}
        </ul>
    );
}

Order.propTypes = {
    onSelectOrder: PropTypes.func.isRequired,
};

export default Order;

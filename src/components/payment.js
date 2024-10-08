// PaymentComponent.js
import React, { useState } from 'react';

function PaymentComponent({ userId, orderId }) {
    const [paymentMethod, setPaymentMethod] = useState('credit');
    const [message, setMessage] = useState('');

    const handlePayment = async () => {
        try {
            const response = await fetch('https://product-ten-theta.vercel.app/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId,
                    orderId: orderId,
                    paymentMethod: paymentMethod,
                    amount: 100, // สมมติว่าชำระเงิน 100 ดอลล่า
                }),
            });

            const data = await response.json();
            if (response.status === 201) {
                setMessage('Payment recorded successfully!');
            } else {
                setMessage(`Error: ${data.message}`);
            }
        } catch (error) {
            setMessage(`Error: ${error.message}`);
        }
    };

    return (
        <div>
            <h3>Payment</h3>
            <div>
                <label>Payment Method:</label>
                <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                    <option value="credit">Credit Card</option>
                    <option value="paypal">PayPal</option>
                </select>
            </div>
            <button onClick={handlePayment}>Pay Now</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default PaymentComponent;

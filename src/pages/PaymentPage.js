import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import QRCode from 'qrcode.react'; // Library สำหรับสร้าง QR Code
import '../styles/PaymentPage.css'; // นำเข้าไฟล์ CSS
import { useNavigate } from 'react-router-dom';

function PaymentPage() {
    const { paymentId } = useParams(); // รับ paymentId จาก URL params
    const [paymentInfo, setPaymentInfo] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        // Fetch รายละเอียดการชำระเงินจาก API โดยใช้ paymentId
        fetch(`https://product-ten-theta.vercel.app/payment/paymentsDetail?paymentId=${paymentId}`)
            .then(response => response.json())
            .then(data => {
                if (data.data) {
                    setPaymentInfo(data.data);
                }
            })
            .catch(error => console.error('Error fetching payment details:', error));
    }, [paymentId]);

    const handleCompletePayment = async () => {
        try {
            const response = await fetch(`https://product-ten-theta.vercel.app/payment/completePayment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    paymentId: paymentId, // ส่ง paymentId ไปยัง API
                }),
            });

            if (response.ok) {
                alert('การชำระเงินเสร็จสิ้นและคำสั่งซื้อถูกอัปเดตแล้ว');
                navigate(`/home`);
                // คุณสามารถเปลี่ยนหน้าไปที่อื่นได้ที่นี่
            } else {
                console.error('Failed to complete payment');
            }
        } catch (error) {
            console.error('Error completing payment:', error);
        }
    };

    if (!paymentInfo) {
        return <div>กำลังโหลด...</div>;
    }

    return (
        <div className="payment-page">
            <h2>ชำระเงิน</h2>
            <div className="payment-details">
                <p>ยอดชำระทั้งหมด: {paymentInfo.amount} บาท</p>
                <div className="qrcode">
                    <QRCode value={paymentInfo.transactionId} /> {/* ใช้ transactionId หรือข้อมูลที่เกี่ยวข้องสำหรับสร้าง QR Code */}
                </div>
                <p>สแกน QR code เพื่อชำระเงิน</p>
                <button className="complete-button" onClick={handleCompletePayment}>เสร็จสิ้น</button>
            </div>
        </div>
    );
}

export default PaymentPage;

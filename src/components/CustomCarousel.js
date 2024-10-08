import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/CustomCarousel.css'; // Import custom CSS

const CustomCarousel = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // ดึงข้อมูลจาก API
        fetch('https://product-ten-theta.vercel.app/product/carousel')
            .then(response => response.json())
            .then(data => {
                if (data && Array.isArray(data.data)) {
                    setItems(data.data);
                }
            })
            .catch(error => console.error('Error fetching carousel items:', error));
    }, []);

    const settings = {
        showThumbs: false,    // ซ่อน thumbnail
        showStatus: false,    // ซ่อน status bar
        infiniteLoop: true,   // loop ไร้ที่สิ้นสุด
        centerMode: true,     // ใช้ center mode
        centerSlidePercentage: 33, // แสดงภาพกลาง 100% ซ้ายขวา 33%
        selectedItem: 1,      // เริ่มต้นที่รูปที่ 2
        showArrows: true,     // แสดงลูกศร
    };

    return (
        <div className="carousel-container">
            <Carousel {...settings}>
                {items.map((item, index) => (
                    <div key={index}>
                        <img src={item.img} alt={item.name} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default CustomCarousel;

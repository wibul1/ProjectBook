// src/components/Carousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.css'; // Import CSS ที่ปรับปรุง

function Carousel() {
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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} className="carousel">
            {items.map((item, index) => (
                <div key={index} className="carousel-item">
                    <img src={item.img} alt={item.name} />
                    <h3>{item.name}</h3>
                </div>
            ))}
        </Slider>
    );
}

export default Carousel;

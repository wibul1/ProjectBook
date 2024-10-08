import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../profilestyles/performance.css';

function ProfilePage() {
    const navigate = useNavigate();

    const handleMenuClick = (page) => {
        switch(page) {
            case 'home':
                navigate('/profile');
                break;
            case 'presentation':
                navigate('/slide');
                break;
            case 'certificate':
                navigate('/certificate'); // ถ้ามีหน้า projects
                break;
            default:
                navigate('/profile');
        }
    };

    const performance = [
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/performance%2Fstart%20up.png?alt=media&token=339483ca-d7d3-4ae2-a1bd-5bff4b588ca9" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/performance%2Fapec.png?alt=media&token=4891a700-10dd-47e8-b759-271beb050a2f" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/performance%2FSoftware%20Tester.png?alt=media&token=9d73a9c6-f70b-40f4-802b-506fce8e2d00" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/performance%2FPower%20Bi%20%26%20excel%20workshop.png?alt=media&token=ff098563-82f1-4350-b74e-23081c1afd56" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/performance%2Fcyber%20security.png?alt=media&token=ca4c1a77-a653-46d4-9906-851d2a2c4b95" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/performance%2FDocker.JPG?alt=media&token=22488f76-7024-4cec-87d7-674d3ce9df8d" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/performance%2FIoT.png?alt=media&token=7359b632-485c-4d61-b381-47759e89e8f5" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/performance%2F%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C%E0%B8%9A%E0%B8%AD%E0%B8%94.JPG?alt=media&token=a2e98d6a-8bae-46b2-8ce7-fc16e86c1949" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/performance%2F%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%8A%E0%B8%A1%E0%B8%A3%E0%B8%A1%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%B2%E0%B9%81%E0%B8%AB%E0%B9%88%E0%B8%87%E0%B8%82%E0%B8%B8%E0%B8%99%E0%B9%80%E0%B8%82%E0%B8%B2.png?alt=media&token=207a2c41-480d-41ab-b79b-f3ae8ac8c1a9" },
       
       
    ];

    const detail = [
        { dt : "ผ่านการแข่งขันระดับมหาลัย และเป็นตัวแทนมหาวิทยาลัย ไปเข้าร่วมแข่งขัน StartUp Thailand League ระดับภาคที่ มหาวิทยาลัยเชียงใหม่ "},
        { dt : "ผ่านการแข่งขันระดับมหาลัย และเป็นตัวแทนมหาวิทยาลัย ไปเข้าร่วมแข่งขัน APEC Regional Youth ระดับภาคที่ มหาวิทยาลัยเชียงใหม่ "},
        { dt : "เข้าอบรม Software Tester ที่ มหาวิทยาลัยนเรศวร โดยรายละเอียดการอบรม มี JMeter และ Robot Framework"},
        { dt : "เข้าอบรม POWER BI & EXCEL WORKSHOP ได้มีทักษะในการใช้โปรแกรมหรือโปรแกรมทางปัญญาประดิษฐ์สำหรับการประมวลผลและแสดงผลข้อมูล (Data Analytic and Visualization)"},
        { dt : "เข้าอบรม การพัฒนาทักษะด้านความมั่นคงปลอดภัยทางไซเบอร์ (Cyber-Security) ได้ความรู้ทักษะเบื้องต้นในการใช้โปรแกรมเพื่อประเมินความเสี่ยงของภัยคุกคามบนระบบ เช่น การตรวจสอบหาช่องโหว่ของระบบ (Vulnerability Assessment) ทดสอบเจาะระบบ (Penetration Test) "},
        { dt : "เข้าอบรม หลักสูตร Container Technology (Docker, Kubernetes) ได้มีความเข้าใจและความสามารถในการใช้งานเทคโนโลยีคอนเทนเนอร์สำหรับการพัฒนาและการจัดการแอปพลิเคชันในสภาพแวดล้อมที่มีการเปลี่ยนแปลงอย่างรวดเร็ว และพัฒนาต่อยอดกับงานที่รับผิดชอบได้อย่างมีประสิทธิภาพ"},
        { dt : "เข้าอบรม หลักสูตร การพัฒนา IoT ด้วย ESP32/ESP8266 และ Node-RED เพื่อการรับส่งข้อมูลผ่าน MQTT และการสร้าง Dashboard ได้ความรู้ทักษะด้านการใช้โปรแกรมประยุกต์ในการออกแบบระบบ IoT ที่เชื่อมต่อกับระบบอัตโนมัติในงานอุตสาหกรรมเพิ่มขึ้น"},
        { dt : "ได้ร่วมพัฒนาระบบไลน์บอดให้เทศบาลตำบลบ้านคลอง โดยทำตำแหน่ง Back End Developer"},
        { dt : "ได้รับตำแหน่งประธานชมรมต้นกล้าแห่งขุนเขา และดำเนินโครงการต่างๆ ประจำปีการศึกษา 2566"},
    
    
    ];

    return (
        <div>
            <h2 className="title">Performance</h2>
            <div className="container-menu">
                <ul className="menu-list-profile">
                    <li>
                        <a href="#home" onClick={() => handleMenuClick('home')}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#certificates" onClick={() => handleMenuClick('presentation')}>
                            สไลค์
                        </a>
                    </li>
                    <li>
                        <a href="#certificate" onClick={() => handleMenuClick('certificate')}>
                        เกียรติบัตร
                        </a>
                    </li>
                </ul>
            </div>

            <div className="container-performance">
                {performance.map((item, index) => (
                    <div key={index} className="performance-item">
                        <div className="performance-image">
                            <img 
                                name="item" 
                                src={item.img} 
                                alt={`Performance ${index + 1}`} 
                                className="profile-image-performance"
                            />
                        </div>
                        <div className="performance-detail">
                            <p>{detail[index].dt}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ProfilePage;

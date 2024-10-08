import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../profilestyles/certificate.css';

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
            case 'performance':
                navigate('/performance'); // ถ้ามีหน้า projects
                break;
            default:
                navigate('/profile');
        }
    };

    const certificate = [
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/certificate%2F%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%94%E0%B8%B5%E0%B8%9B%E0%B8%B51.png?alt=media&token=567b4bf2-f4d4-4c16-9308-f3a985d43c8d" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/certificate%2F%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%94%E0%B8%B5%E0%B8%9B%E0%B8%B52.png?alt=media&token=c91c2301-ded5-4093-9157-605c6715bf2c" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/certificate%2FIC3.png?alt=media&token=d4d09d5b-7568-4215-bc0b-1e051bb1ce9f" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/certificate%2Fapec.png?alt=media&token=f9276ed2-f4c5-48dd-aee2-d94b6f5299dd" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/certificate%2FIoT.png?alt=media&token=bde8fe1d-807f-41e3-a0d3-2bc7d1f2c8a3" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/certificate%2Fcyber.png?alt=media&token=67955c39-e737-4ee6-bbb7-857d8db61705" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/certificate%2Fcyber%20basic.png?alt=media&token=479a9cd8-3131-4bd7-9708-f59a48c3bef9" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/certificate%2Fpower%20bi.png?alt=media&token=089d3f73-f87e-41ad-96c1-6fbe352a1463" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/certificate%2F%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%8A%E0%B8%A1%E0%B8%A3%E0%B8%A1.png?alt=media&token=796dbd33-0ab2-445b-8617-9b882d5a2b81" },
        
       
    ];

    return (
        <div>
            <h2 className="title">Certificate</h2>
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
                        <a href="#performance" onClick={() => handleMenuClick('performance')}>
                            ผลงาน
                        </a>
                    </li>
                </ul>
            </div>
            <div className="container-certificate">
                {certificate.map((cert, index) => (
                    <div key={index} className={`side-certificate side-certificate-${index % 2 === 0 ? 'left' : 'right'}`}>
                        <img 
                            name="item" 
                            src={cert.img} 
                            alt={`Certificate ${index + 1}`} 
                            className="profile-image-certificate"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProfilePage;

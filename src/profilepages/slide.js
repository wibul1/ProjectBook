import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../profilestyles/slide.css';
function ProfilePage() {
    const navigate = useNavigate();

    const handleMenuClick = (page) => {
        switch(page) {
            case 'home':
                navigate('/profile');
                break;
            case 'certificates':
                navigate('/certificate');
                break;
            case 'performance':
                navigate('/performance'); // ถ้ามีหน้า projects
                break;
            default:
                navigate('/profile');
        }
    };
    const slide = [
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/slide%2F1.png?alt=media&token=739f624f-5de6-4352-8513-7a299f0af2e7" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/slide%2F2.png?alt=media&token=ff47060f-5991-451c-8dbc-28723df71dec" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/slide%2F3.png?alt=media&token=6116f1b4-37f3-4990-8864-1ce493c4505e" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/slide%2FBlue%20and%20White%20Geometric%20Company%20Profile%20Presentation.png?alt=media&token=ca2e1f95-ffc2-4ca1-b428-499a85b7a035" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/slide%2F5.png?alt=media&token=ec3db0b0-d59b-44cd-b934-d074998e0d04" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/slide%2F6.png?alt=media&token=fe9d777c-b9da-463d-94c7-a5b2c48394ec" },
        { img: "https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/slide%2F7.png?alt=media&token=80561fe3-5c25-4b6c-ba0d-e992df507f9a" },
       
       
    ];



    return (
        <div>
            <h2 className="title">Slide</h2>
            <div className="container-menu">
                <ul className="menu-list-profile">
                            <li>
                                <a href="#home" onClick={() => handleMenuClick('home')}>
                                    home
                                </a>
                            </li>
                            <li>
                                <a href="#certificates" onClick={() => handleMenuClick('certificates')}>
                                    เกียรติบัตร
                                </a>
                            </li>
                            <li>
                                <a href="#performance" onClick={() => handleMenuClick('performance')}>
                                    ผลงาน
                                </a>
                            </li>
                </ul>
            </div>
            <div className="container-slide">
                {slide.map((cert, index) => (
                    <div key={index} className={`side-slide side-slide-${index % 2 === 0 ? 'left' : 'right'}`}>
                        <img 
                            name="item" 
                            src={cert.img} 
                            alt={`slide ${index + 1}`} 
                            className="profile-image-slide"
                        />
                    </div>
                ))}
            </div>

            {/* <div className="container-slide">
                <div className="left-side-slide"> 
                    <img 
                        name="item" 
                        src="" 
                        alt="Profile" 
                        className="profile-image-slide"
                    />
                </div>
                <div className="right-side-slide">
                    <img 
                        name="item" 
                        src="" 
                        alt="Profile" 
                        className="profile-image-slide"
                    />
                </div>
            </div>
            <div className="container-slide">
                <div className="left-side-slide"> 
                    <img 
                        name="item" 
                        src="" 
                        alt="Profile" 
                        className="profile-image-slide"
                    />
                </div>
                <div className="right-side-slide">
                    <img 
                        name="item" 
                        src="" 
                        alt="Profile" 
                        className="profile-image-slide"
                    />
                </div>
            </div>
            <div className="container-slide">
                <div className="left-side-slide"> 
                    <img 
                        name="item" 
                        src="" 
                        alt="Profile" 
                        className="profile-image-slide"
                    />
                </div>
                <div className="right-side-slide">
                    <img 
                        name="item" 
                        src="" 
                        alt="Profile" 
                        className="profile-image-slide"
                    />
                </div>
            </div> */}
        </div>
    );
}

export default ProfilePage;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../profilestyles/profilepage.css';

function ProfilePage() {
    const navigate = useNavigate();

    const handleMenuClick = (page) => {
        switch(page) {
            case 'presentation':
                navigate('/slide');
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

    return (
        <div>
            <h2 className="profile-title">Profile</h2>
            <div className="container-menu">
                     <ul className="menu-list-profile">
                        <li>
                            <a href="#presentation" onClick={() => handleMenuClick('presentation')}>
                                สไลด์นำเสนอ
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
            
            <div className="container">
                
                    <img 
                        name="item" 
                        src="https://firebasestorage.googleapis.com/v0/b/wabproject-81ac8.appspot.com/o/cv.png?alt=media&token=8f93c223-8b97-43c1-bbe8-7a82e7cc1564" 
                        alt="Profile" 
                        className="profile-image"
                    />
                
            </div>
        </div>
    );
}

export default ProfilePage;

import React, { useState, useEffect } from 'react';
import { Avatar, Card } from 'antd';


const { Meta } = Card;

export const API_URL = "https://iot-backend-ym14.onrender.com/api";

const ProfileCard = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        position: '',
        imageUrl: '',
    });

    useEffect(() => {
        // Fetch user's profile data from the API
        fetchProfileData();
    }, []);

    const fetchProfileData = async () => {
        try {
            const response = await fetch(`${API_URL}/profil`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                // Update profile data state with the data obtained from the API
                setProfileData({
                    name: data.name,
                    position: data.positionHeld,
                    imageUrl: data.profilePictureUrl,
                });
            } else {
                console.error('Error fetching profile data');
            }
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto' }}>
            <Card style={{ width: 450, borderRadius: 30 }}>
                <div style={{ position: 'relative', height: '100%' }}>
                    <img
                        alt="example"
                        src={profileData.imageUrl}
                        style={{ width: '100%', height: 'auto', borderRadius: '12px 12px 12px 12px' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', marginBottom: -20 }}>
                        <Avatar src={profileData.imageUrl} size={120} />
                    </div>
                </div>
                <div style={{ padding: '18px' }}>
                    <Meta
                        title={<div style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>{profileData.name}</div>}
                        description={<div style={{ textAlign: 'center', fontSize: '18px' }}>{profileData.position}</div>}
                    />
                </div>
            </Card>
        </div>
    );
};

export default ProfileCard;

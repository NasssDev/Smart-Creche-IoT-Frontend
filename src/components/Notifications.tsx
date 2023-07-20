import React, { useState, useEffect } from 'react';
import { Switch, Card } from 'antd';

export const API_URL = "https://iot-backend-ym14.onrender.com/api";

const SwitchComponent = () => {
    const [notifications, setAlertStates] = useState({
        mouvement: false,
        temperature: false,
        co2: false,
        humidity: false,
        noise: false,
        waterLeak: false,
    });

    useEffect(() => {
        // Fetch user's alert states from the API
        fetchAlertStates();
    }, []);

    const fetchAlertStates = async () => {
        try {
            const response = await fetch(`${API_URL}/profil`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                // Update alert states state with the data obtained from the API
                setAlertStates(data);
            } else {
                console.error('Error fetching alert states');
            }
        } catch (error) {
            console.error('Error fetching alert states:', error);
        }
    };

    const handleSwitchChange = async (checked, alertName) => {
        try {
            const response = await fetch(`${API_URL}/profil`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ [alertName.toLowerCase()]: checked }),
            });

            if (response.ok) {
                console.log(`${alertName} updated successfully`);
                // Update the state locally as well
                setAlertStates({
                    ...alertStates,
                    [alertName.toLowerCase()]: checked,
                });
            } else {
                console.error(`Error updating ${alertName}`);
            }
        } catch (error) {
            console.error(`Error updating ${alertName}:`, error);
        }
    };

    return (
        <div className='w-full max-w-xl'>
            <Card className="w-400 rounded-3xl shadow-lg">
                <h2 className="text-3xl fa-layers-top-left">Notifications</h2>
                {/* ... SVG content ... */}
                <br />
                <div className="flex items-center">
                    <Switch
                        checked={notifications.mouvement}
                        onChange={(checked) => handleSwitchChange(checked, 'Movement Detection')}
                    />
                    &nbsp;
                    &nbsp;
                    <span className="text-2xl">Movement Detection</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        checked={notifications.temperature}
                        onChange={(checked) => handleSwitchChange(checked, 'Temperature Alert')}
                    />
                    &nbsp;
                    &nbsp;
                    <span className="text-2xl">Temperature Alert</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        checked={notifications.co2}
                        onChange={(checked) => handleSwitchChange(checked, 'CO2 Alert')}
                    />
                    &nbsp;
                    &nbsp;
                    <span className="text-2xl">CO2 Alert</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        checked={notifications.humidity}
                        onChange={(checked) => handleSwitchChange(checked, 'Humidity Alert')}
                    />
                    &nbsp;
                    &nbsp;
                    <span className="text-2xl">Humidity Alert</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        checked={notifications.noise}
                        onChange={(checked) => handleSwitchChange(checked, 'High Noise Alert')}
                    />
                    &nbsp;
                    &nbsp;
                    <span className="text-2xl">High Noise Alert</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        checked={notifications.waterLeak}
                        onChange={(checked) => handleSwitchChange(checked, 'Water Leak Alert')}
                    />
                    &nbsp;
                    &nbsp;
                    <span className="text-2xl">Water Leak Alert</span>
                </div>
            </Card>
        </div>
    );
};

export default SwitchComponent;

import React from 'react';
import { Switch, Card } from 'antd';

const SwitchComponent = () => {
    const handleSwitchChange = (checked, text) => {
        console.log(`Switch for ${text} is ${checked}`);
        // Perform any other actions based on the switch change
    };

    return (
        <div>
        <Card style={{width: 400, borderRadius: 30 }}>
            <h2 style={{ fontSize: '30px' }}>Notifications</h2>
            <br/>
            <div>
                <Switch
                    defaultChecked={true}
                    onChange={(checked) => handleSwitchChange(checked, 'Text 1')}
                />
                <span style={{ fontSize: '20px' }}>Movement Detection</span>
            </div>
            <br/>
            <div>
                <Switch
                    defaultChecked={false}
                    onChange={(checked) => handleSwitchChange(checked, 'Text 2')}
                />
                <span style={{ fontSize: '20px' }}>Temperature Alert</span>
            </div>
            <br/>
            <div>
                <Switch
                    defaultChecked={true}
                    onChange={(checked) => handleSwitchChange(checked, 'Text 3')}
                />
                <span style={{ fontSize: '20px' }}>CO2 Alert</span>
            </div>
            <br/>
            <div>
                <Switch
                    defaultChecked={false}
                    onChange={(checked) => handleSwitchChange(checked, 'Text 4')}
                />
                <span style={{ fontSize: '20px' }}>Humidity Alert</span>
            </div>
            <br/>
            <div>
                <Switch
                    defaultChecked={false}
                    onChange={(checked) => handleSwitchChange(checked, 'Text 5')}
                />
                <span style={{ fontSize: '20px' }}>High Noise Alert</span>
            </div>
            <br/>
            <div>
                <Switch
                    defaultChecked={true}
                    onChange={(checked) => handleSwitchChange(checked, 'Text 6')}
                />
                <span style={{ fontSize: '20px' }}>Water Leak Alert</span>
            </div>
        </Card></div>
    );
};

export default SwitchComponent;

import React from 'react';
import { Switch, Card } from 'antd';

const SwitchComponent = () => {
    const handleSwitchChange = (checked, text) => {
        console.log(`Switch for ${text} is ${checked}`);
        // Perform any other actions based on the switch change
    };

    return (
        <div className='w-full max-w-xs'>
            <Card className="w-400 rounded-3xl shadow-lg">
                <h2 className="text-3xl">Notifications</h2>
                <br />
                <div className="flex items-center">
                    <Switch
                        defaultChecked={true}
                        onChange={(checked) => handleSwitchChange(checked, 'Text 1')}
                    />
                    <span className="text-2xl">Movement Detection</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        defaultChecked={false}
                        onChange={(checked) => handleSwitchChange(checked, 'Text 2')}
                    />
                    <span className="text-2xl">Temperature Alert</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        defaultChecked={true}
                        onChange={(checked) => handleSwitchChange(checked, 'Text 3')}
                    />
                    <span className="text-2xl">CO2 Alert</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        defaultChecked={false}
                        onChange={(checked) => handleSwitchChange(checked, 'Text 4')}
                    />
                    <span className="text-2xl">Humidity Alert</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        defaultChecked={false}
                        onChange={(checked) => handleSwitchChange(checked, 'Text 5')}
                    />
                    <span className="text-2xl">High Noise Alert</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        defaultChecked={true}
                        onChange={(checked) => handleSwitchChange(checked, 'Text 6')}
                    />
                    <span className="text-2xl">Water Leak Alert</span>
                </div>
            </Card>
        </div>
    );
};

export default SwitchComponent;

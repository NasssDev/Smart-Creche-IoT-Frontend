import { Switch, Card } from 'antd';

const SwitchComponent = () => {
    const handleSwitchChange = (checked: boolean, text: string) => {
        console.log(`Switch for ${text} is ${checked}`);
    };

    return (
        <div className='w-full max-w-xl'>
            <Card className="w-400 rounded-3xl shadow-lg">
                <h2 className="text-3xl fa-layers-top-left">Notifications</h2>
                <svg width="37" height="37" className="absolute right-7 top-7" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="37" height="37" rx="10" fill="#F4F7FE" />
                    <g clipPath="url(#clip0_76_2446)">
                        <path d="M12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM24 17C22.9 17 22 17.9 22 19C22 20.1 22.9 21 24 21C25.1 21 26 20.1 26 19C26 17.9 25.1 17 24 17ZM18 17C16.9 17 16 17.9 16 19C16 20.1 16.9 21 18 21C19.1 21 20 20.1 20 19C20 17.9 19.1 17 18 17Z" fill="#4318FF" />
                    </g>
                    <defs>
                        <clipPath id="clip0_76_2446">
                            <rect width="24" height="24" fill="white" transform="translate(6 7)" />
                        </clipPath>
                    </defs>
                </svg>
                <br />
                <div className="flex items-center">
                    <Switch
                        className={"back"}
                        defaultChecked={true}
                        onChange={(checked) => handleSwitchChange(checked, 'Text 1')}
                    />
                    <span className="text-2xl ml-2">Movement Detection</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        defaultChecked={true}
                        onChange={(checked) => handleSwitchChange(checked, 'Text 2')}
                    />
                    <span className="text-2xl ml-2">Temperature Alert</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        defaultChecked={true}
                        onChange={(checked) => handleSwitchChange(checked, 'Text 3')}
                    />
                    <span className="text-2xl ml-2">CO2 Alert</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        defaultChecked={true}
                        onChange={(checked) => handleSwitchChange(checked, 'Text 4')}
                    />
                    <span className="text-2xl ml-2">Humidity Alert</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        defaultChecked={true}
                        onChange={(checked) => handleSwitchChange(checked, 'Text 5')}
                    />
                    <span className="text-2xl ml-2">High Noise Alert</span>
                </div>
                <br />
                <div className="flex items-center">
                    <Switch
                        defaultChecked={true}
                        onChange={(checked) => handleSwitchChange(checked, 'Text 6')}
                    />
                    <span className="text-2xl ml-2">Water Leak Alert</span>
                </div>
            </Card>
        </div>
    );
};

export default SwitchComponent;

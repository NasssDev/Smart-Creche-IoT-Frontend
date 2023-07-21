import {useState} from 'react';
import {Progress, Slider} from 'antd';

const Thermometer = ({temperature, minTemperature, maxTemperature}:{temperature:number,minTemperature:number,maxTemperature:number}) => {
    const getTemperatureColor = (temperature:number) => {
        if (temperature >= 30) return '#f5222d'; // Red
        if (temperature >= 20) return '#fadb14'; // Yellow
        return '#52c41a'; // Green
    };

    // const getIcon = (temperature) => {
    //     if (temperature >= 30) return '🔥';
    //     if (temperature >= 20) return '😅';
    //     return '😊';
    // };

    const calculateFillPercentage = (temperature:number, minTemperature:number, maxTemperature:number) => {
        if (temperature <= minTemperature) return 0;
        if (temperature >= maxTemperature) return 100;
        return ((temperature - minTemperature) / (maxTemperature - minTemperature)) * 100;
    };

    const [currentTemperature, setCurrentTemperature] = useState(temperature);

    const handleTemperatureChange = (value:number) => {
        setCurrentTemperature(value);
    };

    const fillPercentage = calculateFillPercentage(currentTemperature, minTemperature, maxTemperature);
    // const temperatureIcon = getIcon(currentTemperature);

    // const gradientColors = {
    //     green: '#52c41a',
    //     yellow: '#fadb14',
    //     orange: '#ff8000',
    //     red: '#f5222d',
    //
    // };

    // const getGradientColor = (percentage: number) => {
    //     if (percentage) percentage = 2;
    //     return `linear-gradient(to top, green,yellow,orange,red)`;
    // };

    // const sliderTrackStyle = {
    //     background: getGradientColor(fillPercentage),
    //     height: '180px', // Adjust the slider track height
    //     borderRadius: '4px', // Adjust the slider track border-radius
    // };
    return (
        <div>
            <div><span className={`absolute text-gray-500 `}>TEMPERATURE</span></div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingInline: '10px',
                justifyContent: "space-evenly",
                paddingTop: "15px",
                paddingBottom: "15px"
            }}>
                <Progress
                    type="circle"
                    percent={fillPercentage}
                    strokeColor={getTemperatureColor(currentTemperature)}
                    format={() => `${currentTemperature}°C`}
                    width={120}
                    strokeWidth={10}
                    style={{marginTop: '5px'}}
                />
                <div style={{display: 'flex'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Slider
                            vertical
                            min={minTemperature}
                            max={maxTemperature}
                            value={currentTemperature}
                            onChange={handleTemperatureChange}
                            style={{height: '180px', marginTop: '10px', marginBottom: '20px'}}

                        />
                    </div>
                    <div style={{display: 'flex', height: '100%'}}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '180px'
                        }}>
                            <span className="text-gray-500">{maxTemperature}°C</span>
                            <span className="text-gray-500">{minTemperature}°C</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Thermometer;
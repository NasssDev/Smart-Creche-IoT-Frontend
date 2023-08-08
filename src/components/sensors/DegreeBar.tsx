import {useState} from 'react';
import {Progress, Slider} from 'antd';

const DegreeBar = ({temperature, minTemperature, maxTemperature, labelForSiesteTabOnly, toggled}:{temperature:number,minTemperature:number,maxTemperature:number, labelForSiesteTabOnly:string, toggled?:boolean}) => {
    const getTemperatureColor = (temperature:number) => {
        if (temperature >= 30) return '#f5222d'; // Red
        if (temperature >= 26) return '#f3983d'; // Orange
        if (temperature >= 23) return '#fadb14'; // Yellow
        if (temperature >= 13) return '#52c41a'; // Green
        return '#00ffe9'; // blue
    };

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

    return (
        <div>
            <div className="relative" ><span className={`absolute top-0 left-0 ${toggled ? "text-gray-200" : "text-gray-500"} `}>{labelForSiesteTabOnly}</span></div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                // paddingInline: '10px',
                justifyContent: "space-evenly",
                paddingTop: "30px",
                paddingBottom: "15px"
            }}>
                <Progress
                    type="circle"
                    percent={fillPercentage}
                    strokeColor={getTemperatureColor(currentTemperature)}
                    format={() => `${currentTemperature.toFixed(1)}°C`}
                    size={120}
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
                            <span className={`${toggled ? "text-gray-200" : "text-gray-500"} `}>{maxTemperature}°C</span>
                            <span className={`${toggled ? "text-gray-200" : "text-gray-500"} `}>{minTemperature}°C</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DegreeBar;
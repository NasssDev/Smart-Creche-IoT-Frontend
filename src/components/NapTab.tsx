import moment from "moment";
import {useEffect, useState} from "react";
import Toggle from "./toggle/Toggle.tsx";
import {Gauge} from "./sensors/Gauge.tsx";
import {Humidity} from "./sensors/Humidity.tsx";
import DegreeBar from "./sensors/DegreeBar.tsx";
import {SensorI} from "./InteractivePlan.tsx";

export const NapTab = ({label}: { label: string }) => {

    const [lastNep, setLastNep] = useState("");
    const [toggled, setToggled] = useState(false);

    const [dataObj, setDataObj] = useState<SensorI>({
        CO2: {sensor_name: "CO2",sensor_id: "131", high: 800, low: 0, values: [{value: 490}], sensor_unit: "PPM"},
        Brightness: {sensor_name: "Brightness",sensor_id: "118", high: 3000, low: 0,values: [{ value: 2173}], sensor_unit: "LUX"},
        Temperature: {sensor_name: "Temperature",sensor_id: "112", high: 40, low: 0,values: [{ value: 18}], sensor_unit: "C"},
        Humidity: {sensor_name: "Humidity",sensor_id: "114", high: 100, low: 0,values: [{ value: 57}], sensor_unit: "%"},
    });

    useEffect(() => {
        sessionStorage.toggled && setToggled(sessionStorage.toggled === "true");
    }, []);

    const handleClick = () => {
        if (!toggled) {
            sessionStorage.setItem("toggleStartDate", moment().format("DD MMMM")+" at "+moment().format("HH:mm"));
            sessionStorage.removeItem("toggled");
            setDataObj(current => ({
                ...current,
                'Brightness' : {...current.Brightness, values :[{value: 300}]},
                'Temperature' : {...current.Temperature, values :[{value: 21}]},
                'Humidity' : {...current.Humidity, values :[{value: 45}]},
            }))
        } else {
            setDataObj(current => ({
                ...current,
                'Brightness' : {...current.Brightness, values :[{value: 2173}]},
                'Temperature' : {...current.Temperature, values :[{value: 18}]},
                'Humidity' : {...current.Humidity, values :[{value: 57}]},
            }))
            sessionStorage.setItem("toggleEndDate", moment().format("HH:mm"));
        }
        sessionStorage.setItem("toggled", (!toggled).toString());
        setToggled(current => !current);
    };

    useEffect(() => {
            const toggleStartDate = sessionStorage.getItem("toggleStartDate");
            const toggleEndDate = sessionStorage.getItem("toggleEndDate");
            if (!toggled && toggleStartDate && toggleEndDate) {
                setLastNep(toggleStartDate + " until " + toggleEndDate);
            }
        }
        ,[toggled]
    );

    return (
        <div className={`p-4 col-span-3 shadow-lg rounded-2xl ${toggled ? "bg-gray-800" : ""}`}>
            <div className="flex items-center">
                <div className={`text-left block text-xl font-bold ${toggled ? "text-gray-400" : "text-gray-700"}`}>
                    <span
                        className={`text-left block text-xl font-medium text-gray-500`}>{toggled ? "In Progress" : label}</span>
                    {/* eslint-disable-next-line @typescript-eslint/restrict-plus-operands */}
                    {toggled ? "Started " + sessionStorage.toggleStartDate : "Last nap - " + lastNep}
                </div>
                <Toggle toggled={toggled} onClick={handleClick}/>
            </div>
            <div
                className={`w-full grid grid-cols-4 p-4 overflow-hidden rounded-2xl ${toggled ? "bg-transparent" : ""}`}>
                <Gauge toggled={toggled} labelForSiesteTabOnly={"CO2"} info={dataObj.CO2}/>
                <Humidity toggled={toggled} labelForSiesteTabOnly={"Humidity"} info={dataObj.Humidity}/>
                <DegreeBar toggled={toggled} labelForSiesteTabOnly={"Temperature"} maxTemperature={dataObj.Temperature.high} minTemperature={dataObj.Temperature.low} temperature={dataObj?.Temperature?.values[0]?.value} />
                <Gauge toggled={toggled} labelForSiesteTabOnly={"Brightness"} info={dataObj.Brightness}/>
            </div>
        </div>
    );
};

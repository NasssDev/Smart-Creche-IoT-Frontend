import moment from "moment";
import { API_URL } from "../constants/constants.tsx";
import {SensorCardCol3} from "./sensors/SensorCardCol3.tsx";
import Toggle from "./toggle/Toggle.tsx";
import {useEffect, useState} from "react";

export const NepTab = ({label}:{label:string}) => {

    const [sleepModeInfo, setSleepModeInfo] = useState<any>({});
    const [toggled, setToggled] = useState(false);
    const getSleepModeInfo = () => {
        fetch(API_URL+ "/sleep_mode/info", {
            method: 'GET',
            headers: new Headers({
              "Content-type": "application/x-www-form-urlencoded",
            })
          })
            .then(response => response.json()).then(data => {
                setSleepModeInfo(data.payload);
                console.log(data);
                if (data.payload.info.end) {
                    setToggled(false);
                }
                // setEvents(data.payload);
            })
            .catch(error => {
              console.error('Error', error);
            });
    }
    const toggleMode = () => {
        const prefixUrl = toggled ? "off" : "on";
        fetch(API_URL+ "/sleep_mode/"+prefixUrl, {
            method: 'GET',
            headers: new Headers({
              "Content-type": "application/x-www-form-urlencoded",
            })
          })
            .then(response => response.json()).then(data => {
                setToggled(!toggled);
                // setEvents(data.payload);
            })
            .catch(error => {
              console.error('Error', error);
            });
    }

    useEffect(() => {
        getSleepModeInfo();
    },[toggled]);
    const handleClick = () => {
        toggleMode()
        // setToggled((s) => !s);
    };

    return (
        <div className={`p-4 col-span-3 shadow-lg rounded-2xl ${toggled ? " bg-gray-800 " : ""}`}>
            <div className="flex items-center">
                <div className={`text-left block text-xl font-bold ${toggled ? "text-gray-400":"text-gray-700"}`}>
                    <span className={`text-left block text-xl font-medium text-gray-500`}>{toggled ? "In Progress" : label}</span>
                    {moment(sleepModeInfo?.info?.start).format("DD MMMM : HH:mm") + " - " + moment(sleepModeInfo?.info?.end).format("HH:mm")}
                </div>
                <Toggle toggled={toggled} onClick={handleClick}/>
            </div>
            <div className={`w-full grid grid-cols-4 p-4 overflow-hidden rounded-2xl ${toggled ? "bg-transparent" : ""}`}>
                {["CO2", "Humidity", "Temperature", "Brightness"].map((elem, index) => (
                    <SensorCardCol3 key={index} label={elem} toggled={toggled} />
                ))}
            </div>
        </div>
    )
}
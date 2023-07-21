import {SensorCardCol3} from "./sensors/SensorCardCol3.tsx";
import Toggle from "./toggle/Toggle.tsx";
import {useState} from "react";

export const NepTab = ({label}:{label:string}) => {

    const [toggled, setToggled] = useState(false);
    const handleClick = () => {
        setToggled((s) => !s);
    };

    return (
        <div className={`p-4 col-span-3 shadow-lg rounded-2xl ${toggled ? " bg-gray-800 " : ""}`}>
            <div className="flex items-center">
                <div className={`text-left block text-xl font-bold ${toggled ? "text-gray-400":"text-gray-700"}`}>
                    <span className={`text-left block text-xl font-medium text-gray-500`}>{toggled ? "In Progress" : "Last nep"}</span>
                    {toggled ? "since 14:45" : "from 12:21 to 14:21"}
                </div>
                <Toggle toggled={toggled} onClick={handleClick}/>
            </div>
            <div className={`w-full grid grid-cols-4 p-4 overflow-hidden rounded-2xl ${toggled ? "bg-transparent" : ""}`}>
                {["CO2", "HUMIDITY", "TEMPERATURE", "LUMINOSITY"].map((elem, index) => (
                    <SensorCardCol3 key={index} label={elem} toggled={toggled} />
                ))}
            </div>
        </div>
    )
}
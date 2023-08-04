import moment from "moment";
import {useEffect, useState} from "react";
import Toggle from "./toggle/Toggle.tsx";
import {Gauge} from "./sensors/Gauge.tsx";
import {Humidity} from "./sensors/Humidity.tsx";
import DegreeBar from "./sensors/DegreeBar.tsx";

export const NapTab = ({label}: { label: string }) => {

    interface EquiObjItem {
        sensor_id: string;
        high: number;
        low: number;
        value: number;
        unit: string;
    }

    interface DataObj {
        [key: string]: EquiObjItem;
    }

    const [dataObj, setDataObj] = useState<DataObj>({
        CO2: {sensor_id: "131", high: 800, low: 0, value: 390, unit: "PPM"},
        Brightness: {sensor_id: "118", high: 3000, low: 0, value: 300, unit: "LUX"},
        Temperature: {sensor_id: "112", high: 40, low: 0, value: 21, unit: "C"},
        Humidity: {sensor_id: "114", high: 100, low: 0, value: 55, unit: "%"},
    });

    const [lastNep, setLastNep] = useState("");
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        sessionStorage.toggled && setToggled(sessionStorage.toggled === "true");
    }, []);


    const handleClick = () => {
        if (!toggled) {
            sessionStorage.setItem("toggleStartDate", moment().format("DD MMMM")+" at "+moment().format("HH:mm"));
            sessionStorage.removeItem("toggled");
        } else {
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
        , [toggled]
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
                <DegreeBar toggled={toggled} labelForSiesteTabOnly={"Temperature"} maxTemperature={dataObj.Temperature.high} minTemperature={dataObj.Temperature.low} temperature={dataObj.Temperature.value} />
                <Gauge toggled={toggled} labelForSiesteTabOnly={"Brightness"} info={dataObj.Brightness}/>
            </div>
        </div>
    );
};

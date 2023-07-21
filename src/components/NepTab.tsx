import moment from "moment";
import { API_URL } from "../constants/constants.tsx";
import Toggle from "./toggle/Toggle.tsx";
import {useEffect, useState} from "react";
import { Gauge } from "./sensors/Gauge.tsx";
import { Brightness } from "./sensors/Brightness.tsx";

export const NepTab = ({ label }: { label: string }) => {
    const [dataObj, setdataObj] = useState<any>();
    const [data1, setdata1] = useState<any>();
    const [data2, setdata2] = useState<any>();
    const [data3, setdata3] = useState<any>();
    const [data4, setdata4] = useState<any>();
    const [sleepModeInfo, setSleepModeInfo] = useState<any>({});
    const [toggled, setToggled] = useState(false);
    const getSleepModeInfo = async () => {
        fetch(API_URL+ "/sleep_mode/info", {
            method: 'GET',
            headers: new Headers({
              "Content-type": "application/x-www-form-urlencoded",
            })
          })
            .then(response => response.json()).then(data => {
                setSleepModeInfo(data.payload);
                console.log(data);
                if (data.payload.info.end) setToggled(false);
                else setToggled(true);
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
                console.log(data);
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
     useEffect(() => {
        const equiObj: any = {
            "CO2": {sensor_id: "131", high: 800, low: 0, value: 0, unit:"PPM"},
            "Brightness": {sensor_id: "118", high: 800, low: 0, value: 0, unit:"LUX"},
            "Temperature": {sensor_id: "112", high: 70, low: 0, value: 0, unit:"C"},
            "Humidity": {sensor_id: "114", high: 100, low: 0, value: 0, unit:"%"}
        };
         let keys = Object.keys(equiObj);
         keys.forEach((obKey) => {
             const data: any = sleepModeInfo.sensors?.find((ele: any) => ele.sensorId == equiObj[obKey]["sensor_id"]);
             equiObj[obKey].value = data?.value.value;
             setdataObj(equiObj);
         })
         setdata1(dataObj?.CO2);
         setdata2(dataObj?.Brightness);
         setdata3(dataObj?.Temperature);
         setdata4(dataObj?.Humidity);

    
    },[sleepModeInfo]);
    const handleClick = () => {
        toggleMode()
        // setToggled((s) => !s);
    };

    return (
        <div className={`p-4 col-span-3 shadow-lg rounded-2xl ${toggled ? " bg-gray-800 " : ""}`}>
            <div className="flex items-center">
                <div className={`text-left block text-xl font-bold ${toggled ? "text-gray-400":"text-gray-700"}`}>
                    <span className={`text-left block text-xl font-medium text-gray-500`}>{toggled ? "In Progress" : label}</span>
                    {moment(sleepModeInfo?.info?.start).format("DD MMMM : HH:mm") + " - " +(sleepModeInfo?.info?.end? moment(sleepModeInfo?.info?.end).format("HH:mm"):"")}
                </div>
                <Toggle toggled={toggled} onClick={handleClick}/>
            </div>
            <div className={`w-full grid grid-cols-4 p-4 overflow-hidden rounded-2xl ${toggled ? "bg-transparent" : ""}`}>
                <Gauge toggled={toggled} labelForSiesteTabOnly={"CO2"} info={data1} />
                <Brightness toggled={toggled} labelForSiesteTabOnly={"Humidity"} info={data4} />
                <Gauge toggled={toggled} labelForSiesteTabOnly={"Temperature"} info={data3} />
                <Brightness toggled={toggled} labelForSiesteTabOnly={"Brightness"} info={data2} />
                {/* {["CO2", "Humidity", "Temperature", "Brightness"].map((elem, index) => (
                    <SensorCardCol3 key={index} label={elem} toggled={toggled} chartData={sleepModeInfo.sensors} />
                ))} */}
            </div>
        </div>
    )
}
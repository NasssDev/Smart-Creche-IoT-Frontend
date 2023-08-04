import {Gauge} from './Gauge.tsx';
import {Humidity} from "./Humidity.tsx";
// import {ErrorPop} from "../responsePopUp/ErrorPop.tsx";
import {SensorCardCol1} from "./SensorCardCol1.tsx";
import {SensorCardCol2} from "./SensorCardCol2.tsx";
import {NapTab} from "../NapTab.tsx";
import DegreeBar from "./DegreeBar.tsx";

export interface EquiObjItem {
    sensor_id: string;
    high: number;
    low: number;
    value: number;
    unit: string;
}

export interface EquiObj {
    [key: string]: EquiObjItem;
}

export const SensorCard = () => {

    const equiObj: EquiObj = {
        "CO2": {sensor_id: "131", high: 800, low: 0, value: 486, unit:"PPM"},
        "Brightness": {sensor_id: "118", high: 3000, low: 0, value: 1776, unit:"LUX"},
        "Temperature": {sensor_id: "112", high: 40, low: 0, value: 19, unit:"C"},
        "Humidity": {sensor_id: "114", high: 100, low: 0, value: 61, unit:"%"}
    };

    // Le switch utilisé quand on avait le broker MQTT à disposition
    // switch (label) {
    //     case 'CO2' :
    //     case 'Humidity':
    //     case 'Temperature':
    //         componentToRender = <SensorCardCol1 label={label} componentChild={<Gauge labelForSiesteTabOnly={""} toggled={false} info={{}}/>}/>;
    //         break;
    //     case 'Humidity':
    //         componentToRender = <SensorCardCol1 label={label} componentChild={<Humidity labelForSiesteTabOnly={""} toggled={false} info={{}} />}/>;
    //         break;
    //     case 'Water Leak Detection':
    //         componentToRender = <SensorCardCol2 label={label} />;
    //         break;
    //     case 'Last nep':
    //         componentToRender = <NapTab label={label}/>
    //         break;
    //     default:
    //         componentToRender = (<div className="relative h-full">
    //             <div className="flex absolute top-0 left-0 h-3/4 w-full justify-center items-center">
    //                 <ErrorPop message="An error occurred"/></div>
    //         </div>)
    // }

    return (
        <>
            <SensorCardCol1 label={"CO2"} componentChild={<Gauge toggled={false} labelForSiesteTabOnly={""} info={equiObj.CO2}/>} />
            <SensorCardCol1 label={"Humidity"} componentChild={<Humidity toggled={false} labelForSiesteTabOnly={""} info={equiObj.Humidity}/>} />
            <SensorCardCol1 label={"Temperature"} componentChild={<DegreeBar labelForSiesteTabOnly={""} maxTemperature={equiObj.Temperature.high} minTemperature={equiObj.Temperature.low} temperature={equiObj.Temperature.value}/>} />
            <SensorCardCol2 label={"Water Leak"} />
            <SensorCardCol1 label={"Brightness"} componentChild={<Gauge toggled={false} labelForSiesteTabOnly={""} info={equiObj.Brightness}/>} />
            <NapTab label={"Nap"}/>
        </>
    )
}
import {Gauge} from './Gauge.tsx';
import {Humidity} from "./Humidity.tsx";
// import {ErrorPop} from "../responsePopUp/ErrorPop.tsx";
import {SensorCardCol1} from "./SensorCardCol1.tsx";
import {SensorCardCol2} from "./SensorCardCol2.tsx";
import {NapTab} from "../NapTab.tsx";
import DegreeBar from "./DegreeBar.tsx";
// import type { EquiObj } from "../../types/Sensors";
import {SensorI} from "../InteractivePlan.tsx";

export const SensorCard = () => {

    const equiObj: SensorI = {
        "CO2": {sensor_name: "CO2",sensor_id: "131", high: 800, low: 0, values : [{value: 486}], sensor_unit:"PPM"},
        "Brightness": {sensor_name: "Brightness",sensor_id: "118", high: 3000, low: 0,values : [{ value: 1776}], sensor_unit:"LUX"},
        "Temperature": {sensor_name: "Temperature",sensor_id: "112", high: 40, low: 0,values : [{ value: 19}], sensor_unit:"C"},
        "Humidity": {sensor_name: "Humidity",sensor_id: "114", high: 100, low: 0,values : [{ value: 61}], sensor_unit:"%"}
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
            <SensorCardCol1 label={"Temperature"} componentChild={<DegreeBar labelForSiesteTabOnly={""} maxTemperature={equiObj.Temperature.high} minTemperature={equiObj.Temperature.low} temperature={equiObj?.Temperature?.values[0]?.value}/>} />
            <SensorCardCol2 label={"Water Leak"} />
            <SensorCardCol1 label={"Brightness"} componentChild={<Gauge toggled={false} labelForSiesteTabOnly={""} info={equiObj.Brightness}/>} />
            <NapTab label={"Nap"}/>
        </>
    )
}
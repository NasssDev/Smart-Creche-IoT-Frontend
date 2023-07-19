import {Gauge} from './Gauge.tsx';
import {Brightness} from "./Brightness.tsx";
import {ErrorPop} from "../responsePopUp/ErrorPop.tsx";
import {SensorCardCol1} from "./SensorCardCol1.tsx";
import {SensorCardCol2} from "./SensorCardCol2.tsx";

export const SensorCard = ({label}:{label:string}) => {
    let componentToRender;

    switch (label) {
        case 'Humidity':
            componentToRender = <Brightness />;
            break;
        case 'CO2' :
        case 'Brightness':
        case 'Temperature':
            componentToRender = <Gauge />;
            break;
        default:
            componentToRender = (<div className="relative h-full">
                <div className="flex absolute top-0 left-0 h-3/4 w-full justify-center items-center">
                    <ErrorPop message="An error occured"/></div></div>)
    }

    return (
        <>
            {label === "Water Leak Detection" ? <SensorCardCol2 label={label} /> : <SensorCardCol1 label={label} componentToRender={componentToRender} />}
        </>
    )
}
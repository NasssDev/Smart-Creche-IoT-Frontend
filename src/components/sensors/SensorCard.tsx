import {Gauge} from './Gauge.tsx';
import {Brightness} from "./Brightness.tsx";
import {ErrorPop} from "../responsePopUp/ErrorPop.tsx";
import {SensorCardCol1} from "./SensorCardCol1.tsx";
import {SensorCardCol2} from "./SensorCardCol2.tsx";
import {NepTab} from "../NepTab.tsx";

export const SensorCard = ({label}: { label: string }) => {
    let componentToRender;

    switch (label) {
        case 'CO2' :
        case 'Brightness':
        case 'Temperature':
            componentToRender = <SensorCardCol1 label={label} componentChild={<Gauge labelForSiesteTabOnly={""} toggled={false}/>}/>;
            break;
        case 'Humidity':
            componentToRender = <SensorCardCol1 label={label} componentChild={<Brightness  labelForSiesteTabOnly={""} toggled={false}/>}/>;
            break;
        case 'Water Leak Detection':
            componentToRender = <SensorCardCol2 label={label} />;
            break;
        case 'Last nep':
            componentToRender = <NepTab label={label}/>
            break;
        default:
            componentToRender = (<div className="relative h-full">
                <div className="flex absolute top-0 left-0 h-3/4 w-full justify-center items-center">
                    <ErrorPop message="An error occured"/></div>
            </div>)
    }

    return (
        <>
            {componentToRender}
        </>
    )
}
import {Gauge} from "./Gauge.tsx";
import {Brightness} from "./Brightness.tsx";
import {SensorCardCol2} from "./SensorCardCol2.tsx";
import {ErrorPop} from "../responsePopUp/ErrorPop.tsx";
import {ReactNode, useEffect, useState} from "react";

export const SensorCardCol3 = ({label, toggled}: { label: string, toggled:boolean }) => {

    const [componentToRender, setComponentToRender] = useState<ReactNode>("");

    useEffect(() => {
        switch (label) {
            case 'CO2' :
            case 'Brightness':
            case 'Temperature':
                setComponentToRender(<Gauge toggled={toggled} labelForSiesteTabOnly={label}/>);
                break;
            case 'Humidity':
                setComponentToRender(<Brightness toggled={toggled} labelForSiesteTabOnly={label}/>);
                break;
            case 'Water Leak Detection':
                setComponentToRender(<SensorCardCol2 label={""}/>);
                break;
            default:
                setComponentToRender(<div className="relative h-full">
                    <div className="flex absolute top-0 left-0 h-3/4 w-full justify-center items-center">
                        <ErrorPop message="An error occured"/></div>
                </div>);
        }
    }, [label]);

    return (
        <>
            {componentToRender}
        </>
    )
}
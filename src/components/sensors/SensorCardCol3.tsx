import {Gauge} from "./Gauge.tsx";
import {Brightness} from "./Brightness.tsx";
import {SensorCardCol2} from "./SensorCardCol2.tsx";
// import {ErrorPop} from "../responsePopUp/ErrorPop.tsx";
import {ReactNode, useEffect, useState} from "react";
import Yaya from "../Yaya.tsx";

export const SensorCardCol3 = ({label, toggled,sensorsData}: { label: string, toggled: boolean,sensorsData:any[] }) => {

    const [componentToRender, setComponentToRender] = useState<ReactNode>("");

    useEffect(() => {
        switch (label) {
            case 'TEMPERATURE':
                setComponentToRender(<Yaya temperature={25} minTemperature={0} maxTemperature={40}/>)
                break;
            case 'CO2' :
            case 'LUMINOSITY':
                setComponentToRender(<Gauge toggled={toggled} labelForSiesteTabOnly={label}/>);
                break;
            case 'HUMIDITY':
                setComponentToRender(<Brightness toggled={toggled} labelForSiesteTabOnly={label}/>);
                break;
            case 'Water Leak Detection':
                setComponentToRender(<SensorCardCol2 label={""}/>);
                break;
            default:
                // setComponentToRender(<div className="relative h-full">
                //     <div className="flex absolute top-0 left-0 h-3/4 w-full justify-center items-center">
                //         <ErrorPop message="An error occured"/></div>
                // </div>);
        }
    }, [label]);

    return (
        <>
            {componentToRender}
        </>
    )
}
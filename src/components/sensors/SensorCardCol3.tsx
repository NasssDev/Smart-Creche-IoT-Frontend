import {Gauge} from "./Gauge.tsx";
import {Humidity} from "./Humidity.tsx";
import {SensorCardCol2} from "./SensorCardCol2.tsx";
// import {ErrorPop} from "../responsePopUp/ErrorPop.tsx";
import {ReactNode, useEffect, useState} from "react";
import {SensorsData} from "../InteractivePlan.tsx";
import {equiObj} from "../../constants/constants.tsx";
import DegreeBar from "./DegreeBar.tsx";

export const SensorCardCol3 = ({label, toggled, chartData}: {
    label: string,
    toggled: boolean,
    chartData: SensorsData
}) => {

    const [componentToRender, setComponentToRender] = useState<ReactNode>("");

    const [dataObj] = useState<SensorsData>({
        location: chartData.location,
        sensor_id: chartData.sensor_id,
        sensor_name: chartData.sensor_name,
        sensor_unit: chartData.sensor_unit,
        values: chartData.values,
        high: equiObj[label] && equiObj[label].high || 40,
        low: equiObj[label] && equiObj[label].low || 0
    });

    useEffect(() => {

        switch (label) {
            case 'CO2' :
            case 'BRIGHTNESS':
                setComponentToRender(<Gauge toggled={toggled} labelForSiesteTabOnly={label} info={dataObj}/>);
                break;
            case 'HUMIDITY':
                setComponentToRender(<Humidity toggled={toggled} labelForSiesteTabOnly={label} info={dataObj}/>);
                break;
            case 'Water Leak Detection':
                setComponentToRender(<SensorCardCol2 label={""}/>);
                break;
            case 'TEMPERATURE':
                console.log("DATA OBJ TEMPERATURE ",dataObj);
                setComponentToRender(<DegreeBar temperature={dataObj.values[0].value} minTemperature={dataObj.low} maxTemperature={dataObj.high} labelForSiesteTabOnly={"TEMPERATURE"} />);
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
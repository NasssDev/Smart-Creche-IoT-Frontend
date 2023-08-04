import {Gauge} from "./Gauge.tsx";
import {Humidity} from "./Humidity.tsx";
import {SensorCardCol2} from "./SensorCardCol2.tsx";
import {ErrorPop} from "../responsePopUp/ErrorPop.tsx";
import {ReactNode, useEffect, useState} from "react";

export const SensorCardCol3 = ({ label, toggled, chartData }: { label: string, toggled: boolean, chartData: Array<Object|string> }) => {
    // let renderComp = [];
    const [componentToRender, setComponentToRender] = useState<ReactNode>("");
    const [dataObj, setdataObj] = useState<any>({});
        useEffect(() => {
            const equiObj: any = {
                "CO2": {sensor_id: "131", high: 1500, low: 0, value: 0, unit:"PPM"},
                "Brightness": {sensor_id: "118", high: 700, low: 0, value: 0, unit:"LUX"},
                "Temperature": {sensor_id: "112", high: 70, low: -10, value: 0, unit:"C"},
                "Humidity": {sensor_id: "114", high: 100, low: 0, value: 0, unit:"ATM"}
            };
            const data: any = chartData?.find((ele: any) => ele.sensorId == equiObj[label]["sensor_id"]);
            equiObj[label].value = data?.value.value;
            setdataObj(equiObj[label]);
           
            switch (label) {   
                case 'CO2' :
                    case 'Brightness':
                    case 'Temperature':
                        setComponentToRender(<Gauge toggled={toggled} labelForSiesteTabOnly={label} info={dataObj} />);
                        break;
                    case 'Humidity':
                    setComponentToRender(<Humidity toggled={toggled} labelForSiesteTabOnly={label} info={{}} />);
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
            
      
    }, []);

   

    return (
        <>
            {componentToRender}
        </>
    )
}
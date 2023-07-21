import {Gauge} from './Gauge.tsx';
import {Brightness} from "./Brightness.tsx";
// import {ErrorPop} from "../responsePopUp/ErrorPop.tsx";
import {SensorCardCol1} from "./SensorCardCol1.tsx";
import {SensorCardCol2} from "./SensorCardCol2.tsx";
import {NepTab} from "../NepTab.tsx";
import { useEffect, useState } from 'react';
import { API_URL } from '../../constants/constants.tsx';

export const SensorCard = () => {
    const equiObj: any = {
        "CO2": {sensor_id: "131", high: 800, low: 0, value: 0, unit:"PPM"},
        "Brightness": {sensor_id: "118", high: 800, low: 0, value: 0, unit:"LUX"},
        "Temperature": {sensor_id: "112", high: 70, low: 0, value: 0, unit:"C"},
        "Humidity": {sensor_id: "114", high: 100, low: 0, value: 0, unit:"%"}
    };
    const [data1, setdata1] = useState<any>();
    const [data2, setdata2] = useState<any>();
    const [data3, setdata3] = useState<any>();
    const [data4, setdata4] = useState<any>();
    const fetchData = (url: string): any => {
        // new Promise((resolve, reject) => {
            fetch(API_URL+ url, {
                method: 'GET',
                headers: new Headers({
                  "Content-type": "application/x-www-form-urlencoded",
                })
              })
                .then(response => response.json()).then(data => {
                    console.log(data.payload);
                    return data.payload;
                    // setEvents(data.payload);
                })
                .catch(error => {
                    throw error;
                });

    }
    fetchData('');
    useEffect(() => { 
        fetch(API_URL+ "/sensor_val_avg/131", {
            method: 'GET',
            headers: new Headers({
              "Content-type": "application/x-www-form-urlencoded",
            })
          })
            .then(response => response.json()).then(data => {
                let obj1 = equiObj["CO2"];
                obj1.value = Number(data.payload.average.toFixed(2));
                setdata1(obj1);
                fetch(API_URL+ "/sensor_val_avg/114", {
                    method: 'GET',
                    headers: new Headers({
                      "Content-type": "application/x-www-form-urlencoded",
                    })
                  })
                    .then(response => response.json()).then(data => {
                        let obj2 = equiObj["Humidity"];
                obj2.value = Number(data.payload.average.toFixed(2));
                setdata2(obj2);
                        fetch(API_URL+ "/sensor_val_avg/112", {
                            method: 'GET',
                            headers: new Headers({
                              "Content-type": "application/x-www-form-urlencoded",
                            })
                          })
                            .then(response => response.json()).then(data => {
                                let obj3 = equiObj["Temperature"];
                                obj3.value = Number(data.payload.average.toFixed(2));
                                setdata3(obj3);
                                fetch(API_URL+ "/sensor_val_avg/118", {
                                    method: 'GET',
                                    headers: new Headers({
                                      "Content-type": "application/x-www-form-urlencoded",
                                    })
                                  })
                                    .then(response => response.json()).then(data => {
                                        let obj4= equiObj["Brightness"];
                                        obj4.value = Number(data.payload.average.toFixed(2));
                                        setdata4(obj4);
                                        // setEvents(data.payload);
                                    })
                                // setEvents(data.payload);
                            })
                        // setEvents(data.payload);
                    })
                // setEvents(data.payload);
            })

        // fetch(API_URL+"/api/sensor_val_avg/131")
    }, [])


    // switch (label) {
    //     case 'CO2' :
    //     case 'Brightness':
    //     case 'Temperature':
    //         componentToRender = <SensorCardCol1 label={label} componentChild={<Gauge labelForSiesteTabOnly={""} toggled={false} info={{}}/>}/>;
    //         break;
    //     case 'Humidity':
    //         componentToRender = <SensorCardCol1 label={label} componentChild={<Brightness labelForSiesteTabOnly={""} toggled={false} info={{}} />}/>;
    //         break;
    //     case 'Water Leak Detection':
    //         componentToRender = <SensorCardCol2 label={label} />;
    //         break;
    //     case 'Last nep':
    //         componentToRender = <NepTab label={label}/>
    //         break;
    //     default:
    //         componentToRender = (<div className="relative h-full">
    //             <div className="flex absolute top-0 left-0 h-3/4 w-full justify-center items-center">
    //                 <ErrorPop message="An error occured"/></div>
    //         </div>)
    // }

    return (
        <>
            <SensorCardCol1 label={"CO2"} componentChild={<Gauge toggled={false} labelForSiesteTabOnly={"CO2"} info={data1}/>} />
            <SensorCardCol1 label={"Humidity"} componentChild={<Brightness toggled={false} labelForSiesteTabOnly={"Humidity"} info={data2}/>} />
            <SensorCardCol1 label={"Temperature"} componentChild={<Gauge toggled={false} labelForSiesteTabOnly={"Temperature"} info={data3}/>} />
            <SensorCardCol2 label={"Water Leak"} />
            <SensorCardCol1 label={"Brightness"} componentChild={<Gauge toggled={false} labelForSiesteTabOnly={"Brightness"} info={data4}/>} />
            <NepTab label={"Nap"}/>
        </>
    )
}
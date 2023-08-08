import {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';
import {EChartsOption} from "echarts";
import {TreemapSeriesNodeItemOption} from "echarts/types/src/chart/treemap/TreemapSeries";
import {API_URL} from "../constants/constants.tsx";
import {Modal} from "./Modal.tsx";
import {ECElementEvent} from 'echarts/types/dist/echarts';


interface CustomOption extends TreemapSeriesNodeItemOption {
    sensor_id: number,
    name: string,
    id: string | number,
    high: number,
    low: number
}

interface ApiResponse {
    status: number;
    message: string;
    payload: SensorsData[]
}

export interface SensorI {
    [key: string]: SensorsData;
}

export interface SensorsData {
    location?: string,
    sensor_id?: string | number,
    sensor_name: string,
    sensor_unit?: string,
    high: number,
    low: number,
    values: SensorValues[]
}

export interface SensorValues {
    value: number,
    name?: string
}


export const InteractivePlan = () => {

    const chartRef = useRef<HTMLDivElement>(null);


    const [isModalOpen, setIsModalOpen] = useState(false);

    const [sensorsData, setSensorsData] = useState<SensorI>({})

    const [isDataLoaded, setIsDataLoaded] = useState(false);


    useEffect(() => {
        const myChart = echarts.init(chartRef.current as HTMLDivElement);
        let option: EChartsOption = {};

        option = {

            series: [
                {
                    type: 'treemap',
                    roam: false,
                    itemStyle: {
                        borderRadius: 10,
                        gapWidth: 2
                    },
                    data: [
                        {
                            id: '578cf6dc-d4ee-4799-a069-5fe91da86084',
                            name: 'Bathroom\n\n&\n\nWC',
                            value: 10,
                            sensors: sensorsData
                        },
                        {
                            name: 'Living Room',
                            id: 'd9be4235-0aec-40bb-8915-f679a71c890d',
                            value: 10,
                            sensors: [
                                {}
                            ]
                        }
                        ,
                        {
                            name: 'Reception',
                            value: 10,
                        },
                        {
                            name: 'Bed Room',
                            value: 10,
                            id: '63c09edc-771b-4e15-ab00-237bb926b040',
                        },
                        {
                            name: 'Office',
                            value: 10,
                        },
                    ] as CustomOption[],
                }
            ]
        }

        option && myChart.setOption(option);

        const handleChartClick = (params: ECElementEvent) => {
            const dataRoom = params?.data as CustomOption;
            if (!dataRoom.id) {
                console.error("Donnée non valide !");
                return;
            }
            // console.log('La donnée cliqué :', dataRoom.name);
            fetch(API_URL + "/sensors/" + String(dataRoom.id),)
                .then(data => data.json())
                .then((json: ApiResponse) => {
                    const dataPayload = json?.payload;
                    if (json.status !== 200) {
                        console.error("Error : ",json.message);
                        return
                    }
                    const associativePayloadArray: {
                        [key: string]: SensorsData
                    } = dataPayload.reduce((acc: SensorI, obj) => {
                        acc[obj.sensor_name] = obj;
                        return acc;
                    }, {});

                    setSensorsData(associativePayloadArray);

                    setSensorsData(current => {
                        return current;
                    })

                    setIsDataLoaded(true)

                    setIsModalOpen(true)

                })
                .catch((error) => console.log('Erreur Request:', error))
        };

        myChart.on('click', handleChartClick);

        const handleWindowResize = () => {
            myChart.resize();
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
            myChart.dispose();
        };
    }, []);

    return <>
        {isDataLoaded && (
            <Modal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                sensorsData={sensorsData}
            />
        )}
        <div ref={chartRef} className="w-full h-96 shadow pb-2 border-black rounded-2xl mx-auto"></div>
    </>
};


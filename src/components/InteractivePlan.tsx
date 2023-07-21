import {useEffect, useRef, useState} from 'react';
import * as echarts from 'echarts';
import {EChartsOption} from "echarts";
import {TreemapSeriesNodeItemOption} from "echarts/types/src/chart/treemap/TreemapSeries";
import {API_URL} from "../constants/constants.tsx";
import {ErrorPop} from "./responsePopUp/ErrorPop.tsx";
import {Modal} from "./Modal.tsx";

export const InteractivePlan = () => {

    const chartRef = useRef<HTMLDivElement>(null);

    interface SensorI {
        sensorsData: string | number[];
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [sensorsData, setSensorsData] = useState<SensorI[]>([])

    const [isDataLoaded, setIsDataLoaded] = useState(false);

    interface CustomOption extends TreemapSeriesNodeItemOption {
        sensor_id: number,
    }

    useEffect(() => {
        const myChart = echarts.init(chartRef.current as HTMLDivElement);
        let option: EChartsOption = {};

        option = {

            series: [
                {
                    type: 'treemap',
                    roam: 'move',
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
        ;

        option && myChart.setOption(option);

        const handleChartClick = (params: any) => {
            if (params.data && params.data.id) {
                console.log('La donnée cliquée :', params.data.name);
                fetch(API_URL + "/sensors/" + params.data.id,)
                    .then(data => data.json())
                    .then((json) => {
                        if (json.status !== 200) {
                            return <ErrorPop message={json.message}/>
                        }
                        // console.log("je passe")
                        const idRoom = params.data.id

                        if (json.payload[0].location === idRoom) {
                            setSensorsData(json.payload)
                        }

                        setSensorsData(current => {
                            console.log("STATE", current)
                            return current;
                        })

                        setIsDataLoaded(true)

                        setIsModalOpen(true)

                    })
                    .catch((error) => console.log('Erreur Request:', error))
            }
        };

        myChart.on('click', handleChartClick);

        return () => {
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


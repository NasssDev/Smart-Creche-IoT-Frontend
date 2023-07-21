import * as echarts from 'echarts';
import {useEffect, useRef} from "react";

type EChartsOption = echarts.EChartsOption;

export const Gauge = ({labelForSiesteTabOnly, toggled, info}:{labelForSiesteTabOnly:string|null, toggled:boolean, info:any|{}}) => {
    const chartRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        console.log("inside chart",info);
        const myChart = echarts.init(chartRef.current as HTMLDivElement);
        let option:EChartsOption = {};

        option = {
            series: [
                {
                    type: 'gauge',
                    center: ['50%', '55%'],
                    axisLine: {
                        lineStyle: {
                            width: 10,
                            color: [
                                [0.3, '#67e0e3'],
                                [0.7, '#37a2da'],
                                [1, '#fd666d']
                            ]
                        }
                    },
                    pointer: {
                        itemStyle: {
                            color: 'auto'
                        }
                    },
                    axisTick: {
                        distance: -10,
                        length: 8,
                        lineStyle: {
                            color: '#fff',
                            width: 2
                        }
                    },
                    splitLine: {
                        distance: -10,
                        length: 10,
                        lineStyle: {
                            color: '#fff',
                            width: 4
                        }
                    },
                    axisLabel: {
                        color: 'inherit',
                        distance: 20,
                        fontSize: '2vw'
                    },
                    detail: {
                        valueAnimation: true,
                        formatter: '{value} '+info?.unit,
                        color: 'inherit',
                        fontSize:'10vw'
                    },
                    data: [
                        {
                            value: info?.value,
                        }
                    ],
                    max: info?.high,
                    min: info?.low
                }
            ]
        };

            myChart.setOption<echarts.EChartsOption>({
                series: [
                    {
                      
                        data: [
                            {

                                value: info?.value?.toFixed(2)
                            }
                        ]
                    }
                ]
            });

        option && myChart.setOption(option);

        const handleWindowResize = () => {
            myChart.resize();
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
            myChart.dispose();
        };
    }, [info]);

    return <div><span className={`absolute ${toggled ? "text-gray-500" : "text-gray-500"}`}>{labelForSiesteTabOnly}</span><div ref={chartRef} className="w-full h-64 border-black rounded-2xl"></div></div>;
}
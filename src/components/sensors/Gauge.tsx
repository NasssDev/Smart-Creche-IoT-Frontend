import * as echarts from 'echarts';
import {useEffect, useRef} from "react";

type EChartsOption = echarts.EChartsOption;

export const Gauge = ({labelForSiesteTabOnly, toggled}:{labelForSiesteTabOnly:string|null, toggled:boolean}) => {
    const chartRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
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
                        formatter: '{value} %',
                        color: 'inherit',
                        fontSize:'10vw'
                    },
                    data: [
                        {
                            value: 50,
                        }
                    ]
                }
            ]
        };

        setInterval(function () {
            myChart.setOption<echarts.EChartsOption>({
                series: [
                    {
                        data: [
                            {
                                value: +(Math.random() * 100).toFixed(2)
                            }
                        ]
                    }
                ]
            });
        }, 20000);

        option && myChart.setOption(option);

        const handleWindowResize = () => {
            myChart.resize();
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
            myChart.dispose();
        };
    }, []);

    return <div><span className={`absolute ${toggled ? "text-gray-500" : "text-gray-500"}`}>{labelForSiesteTabOnly}</span><div ref={chartRef} className="w-full h-64 border-black rounded-2xl"></div></div>;
}
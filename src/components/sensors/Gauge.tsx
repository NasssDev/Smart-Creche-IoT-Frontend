import * as echarts from 'echarts';
import {useEffect, useRef} from "react";

type EChartsOption = echarts.EChartsOption;

export const Gauge = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const myChart = echarts.init(chartRef.current as HTMLDivElement);
        let option:EChartsOption = {};

        option = {
            series: [
                {
                    type: 'gauge',
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
                        distance: -30,
                        length: 30,
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

    return <div ref={chartRef} className="w-full h-64 border-black rounded-2xl"></div>;
}
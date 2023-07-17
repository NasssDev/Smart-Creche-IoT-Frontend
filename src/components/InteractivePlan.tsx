import {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {EChartsOption} from "echarts";

export const InteractivePlan = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current as HTMLDivElement);
        let option:EChartsOption = {};

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
                            visualDimension: 3,
                            name: 'Bathroom\n\n&\n\nWC',
                            value: 10,
                        },
                        {
                            name: 'Living Room',
                            value: 10,
                        }
                        ,
                        {
                            name: 'Reception',
                            value: 10,
                            // itemStyle: {
                            //     opacity:0,
                            //     color: "#ffffff"
                            // }
                        },
                        {
                            name: 'Bed Room',
                            value: 10,
                        },
                        {
                            name: 'Office',
                            value: 10,
                        },
                    ],
                }
            ]
        }
        ;

        option && myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, []);

    return <div ref={chartRef} className="w-full h-96 shadow pb-2 border-black rounded-2xl mx-auto"></div>;
};


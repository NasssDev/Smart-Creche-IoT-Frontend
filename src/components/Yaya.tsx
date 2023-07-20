import {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {EChartsOption} from "echarts";

export const Yaya = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current as HTMLDivElement);
        let option:EChartsOption = {};

        interface DataItem {
            value: number;
            groupId: string;
        }
        option = {
            xAxis: {
                data: ['00', '04', '08', '12', '16', '18']
            },
            yAxis: {},
            dataGroupId: '',
            animationDurationUpdate: 500,
            series: {
                type: 'bar',
                id: 'sales',
                data: [
                    {
                        value: 6,
                        groupId: '00'
                    },
                    {
                        value: 2,
                        groupId: '04'
                    },
                    {
                        value: 5,
                        groupId: '08'
                    },
                    {
                        value: 3,
                        groupId: '12'
                    },
                    {
                        value: 5,
                        groupId: '16'
                    },
                    {
                        value: 8,
                        groupId: '18'
                    }
                ] as DataItem[],
                universalTransition: {
                    enabled: true,
                    divideShape: 'clone'
                }
            }
        };

        option && myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, []);

    return <div ref={chartRef} className="w-full h-96 shadow pb-2 border-black rounded-2xl mx-auto"></div>;
};
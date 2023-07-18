import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const Brightness = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current as HTMLDivElement);

        const option = {

            series: [
                {
                    tooltip: {
                        trigger: 'item'
                    },
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '45%'],
                    // adjust the start angle
                    startAngle: 200,
                    label: {
                        show:true,
                        content:'nass',
                        center: ['50%','40%']
                    },
                    data: [
                        {
                            label: {show:false},
                            value: 260,
                            name: 'no Engine',
                            itemStyle: { color: 'lightblue' }
                        },
                        {
                            label: {show:false},
                            value: 60,
                            name: 'Search Engine',
                            itemStyle: { color: 'orange' }
                        },
                        {
                            value: 200,
                            itemStyle: {
                                color: 'none',
                                decal: {
                                    symbol: 'none'
                                }
                            },
                            label: {
                                show: false
                            }
                        }
                    ]
                }
            ]
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, []);

    return <div ref={chartRef} className="h-64"></div>;
};

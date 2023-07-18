import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const Brightness = () => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current as HTMLDivElement);

        const option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}%'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '45%'],
                    startAngle: 196,
                    label: {
                        show: false,
                        formatter(params:any) {
                            return params.name === 'hidden' ? '' : params.name + ' (' + params.value + '%)';
                        },
                    },
                    data: [
                        { value: 80, name: 'Brightness', itemStyle: {color:'lightblue'} },
                        { value: 20, name: 'Darkness', itemStyle: {color:'orange'}},
                        {
                            value: 70,
                            name:'brightness',
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
            ],
            graphic: [
                {
                    type: 'text',
                    left: 'center',
                    top: '75%',
                    style: {
                        text: 'The light capacity is at '+90+'%',
                        textAlign: 'center',
                        fill: 'grey',
                    },
                },
                {
                    type: 'text',
                    left: 'center',
                    top: '60%',
                    style: {
                        text: 90+'%',
                        textAlign: 'center',
                        fill: 'black',
                        font: 'bolder 1.5em sans-serif'
                    },
                },
            ],
        };




        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, []);

    return <div ref={chartRef} className="h-64"></div>;
};

import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { SensorsData} from "../InteractivePlan.tsx";

interface Formatter {
    name: string,
    value: string|number
}

export const Humidity = ({labelForSiesteTabOnly, toggled: toggled, info}:{labelForSiesteTabOnly:string|null, toggled:boolean, info:SensorsData}) => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current as HTMLDivElement);

        const option = {
            tooltip: {
                trigger: 'item',
                formatter: '{b}: {c}'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '55%'],
                    startAngle: 196,
                    label: {
                        show: false,
                        formatter(params:Formatter) {
                            return params.name === 'hidden' ? '' : params.name + ' (' + params.value.toString() + '%)';
                        },
                    },
                    data: [
                        { value: info?.values[0]?.value, name: 'Humidity', itemStyle: {color:'lightblue'} },
                        { value: 100 - info?.values[0]?.value, name: 'Drought', itemStyle: {color:'brown'}},
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
                    top: '85%',
                    style: {
                        text: 'The Humidity is at '+info?.values[0]?.value.toString()+' '+String(info?.sensor_unit),
                        textAlign: 'center',
                        fill: toggled ? 'grey' : 'grey',
                    },
                },
                {
                    type: 'text',
                    left: 'center',
                    top: '70%',
                    style: {
                        text: info?.values[0]?.value.toString()+' '+String(info?.sensor_unit),
                        textAlign: 'center',
                        fill: toggled ? 'white' : 'grey',
                        font: 'bolder 1.5em sans-serif'
                    },
                },
            ],
        };

        myChart.setOption(option);

        const handleWindowResize = () => {
            myChart.resize();
        };

        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
            myChart.dispose();
        };
    }, [info,toggled]);

    return <div className="relative"><span className={`absolute left-0 ${toggled ? " text-gray-200 " : "text-gray-500"}`}>{labelForSiesteTabOnly}</span><div ref={chartRef} className="h-64"></div></div>;

};

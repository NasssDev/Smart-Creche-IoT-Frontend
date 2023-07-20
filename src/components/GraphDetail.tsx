import {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {EChartsOption} from "echarts";


export const GraphDetail = ({option}:{option:EChartsOption}) => {
    const chartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current as HTMLDivElement);

    
        option && myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, []);

    return <div ref={chartRef} className="w-full h-96 shadow pb-2 border-black rounded-2xl mx-auto"></div>;
};
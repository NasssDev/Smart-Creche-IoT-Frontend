import { EChartsOption } from "echarts";
import { GraphDetail } from "../components/GraphDetail";
import { LabelPage } from "../components/LabelPage";

 export const Detail = () => {

    interface DataItem {
        value: number;
        groupId: string;
    }
    
    let option:EChartsOption = {
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
        },
        graphic: [
            {
                type: 'text',
                right: 100,
                top: 20, 
                style: {
                  text: '2.45', 
                  fill: 'green',
                  font: 'bolder 0.5em sans-serif'
                },
              },
            {
                type: 'text',
                left: '5%',
                top: '7%',
                style: {
                    text: '70%',
                    fill: 'black',
                    font: 'bolder 1.5em sans-serif'
                },
            },
            {
                type: 'text',
                left: '5%',
                top: '2%',
                style: {
                    text: 'Today',
                    fill: 'black',
                    font: 'bolder 0.8em sans-serif'
                },
            },
        ],
    };

    const grid:EChartsOption = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        graphic: [
            {
                type: 'text',
                right: 100,
                top: 20, 
                style: {
                  text: '2.45', 
                  fill: 'green',
                  font: 'bolder 0.5em sans-serif'
                },
              },
            {
                type: 'text',
                left: '5%',
                top: '7%',
                style: {
                    text: '70%',
                    fill: 'black',
                    font: 'bolder 1.5em sans-serif'
                },
            },
            {
                type: 'text',
                left: '5%',
                top: '2%',
                style: {
                    text: 'Yesterday',
                    fill: 'black',
                    font: 'bolder 0.5em sans-serif'
                },
            },
        ],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
          
        },
        xAxis: [
          {
            type: 'category',
            data: ['0', '1', '2', '3', '4', '5', '6'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      };

      return (
        <div className="flex flex-col gap-5 py-10">
          {/* Affichage du titre h1 */}
          <LabelPage label="CO2"/>
    
          {/* Affichage du graphique avec le composant GraphDetail */}
          <div>
            <GraphDetail option={option} />
          </div>
    
          <div className="flex flex-row-2 gap-6">
            <div className="w-full"><GraphDetail option={grid} /></div>
            <div className="w-full"><GraphDetail option={grid} /></div>
          </div>
        </div>
      );
    };
  
 
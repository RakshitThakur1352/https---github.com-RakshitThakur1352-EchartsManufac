
import './App.css';
import React from "react";
import ReactEcharts from "echarts-for-react";
import jsonWineData from '../src/WineDataSet.json';



function ScatterChart() {



    const x = 178;              //creating a 2d array which will be used for dataset in plotting 
    const y = 0;
    let Dataset = new Array(x);   // create an empty array of length x
    for (var i = 0; i < x; i++) {
        Dataset[i] = new Array(y);
    }

    for (var k = 0; k < jsonWineData.length; k++) {
        Dataset[k].push(jsonWineData[k]['Color intensity'], jsonWineData[k]['Hue'])
    }


    const optionforscatter = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: { top: 10, right: 190, bottom: 70, left: 60 },
        xAxis: [
            {
                type: 'value',
                name: 'Color Intensity',
                nameLocation: 'middle',
                nameGap: 30,
                min: 0,
                max: 5
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: 'Hue',
                nameLocation: 'middle',
                nameGap: 25,
                min: 0,
                max: 16
            }
        ],
        dataset: {
            source: Dataset
        },

        series: [
            {
                type: 'scatter',
                symbolSize: 8,
            }
        ]
    };

    return (

        <>

            <div className='ScatterChartFont'>
                <p>Scatter Plot</p>
            </div>
            <div className='ScatterChart'>
                <ReactEcharts
                    option={optionforscatter} />
            </div>

        </>
    )
}

export default ScatterChart;
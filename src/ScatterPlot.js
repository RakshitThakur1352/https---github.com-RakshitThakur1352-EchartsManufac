
import './App.css';
import React from "react";
import ReactEcharts from "echarts-for-react";
import jsonWineData from '../src/WineDataSet.json';                                          // Wine Data Set used for data visualisation



function ScatterChart() {



    const x = 178;                                                                         //creating a 2d array which will be used for dataset in plotting 
    const y = 0;
    let Dataset = new Array(x);                                                            // create an empty array of length x
    for (var i = 0; i < x; i++) {
        Dataset[i] = new Array(y);
    }

    for (var k = 0; k < jsonWineData.length; k++) {
        Dataset[k].push(jsonWineData[k]['Color intensity'], jsonWineData[k]['Hue']);        // Dataset is used to plot Hue and color intensity
    }


    const optionforscatter = {                                                               //Used to set scatter plot 
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: { top: 30, right: 190, bottom: 100, left: 60 },
        xAxis: [                                                                            //color intensity on x axis
            {
                type: 'value',
                name: 'Color Intensity',
                nameLocation: 'middle',
                nameGap: 30,
                min: 0,
                max: 5
            }
        ],
        yAxis: [                                                                              //Hue values on y axis
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
                symbolSize: 8,                                                               //sets size of dots on plot 
            }
        ]
    };

    return (

        <>

            <div className='ScatterChartFont'>                                                {/*css to manage font size */}
                <p>Scatter Plot</p>
            </div>
            <div className='ScatterChart'>                                                   {/*css to manage scatter plot properties */}
                <ReactEcharts
                    option={optionforscatter} />
            </div>

        </>
    )
}

export default ScatterChart;
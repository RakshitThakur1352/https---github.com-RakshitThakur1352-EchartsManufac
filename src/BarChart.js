
import './App.css';                                                 //css for charts
import React from "react";
import ReactEcharts from "echarts-for-react";                       // react echart installed using npm 
import jsonWineData from '../src/WineDataSet.json';                 //Wine data set which is used for data calculation



function BarChart() {

    var countone = 0;                                 //variables to store results 
    var MalicOne = 0;

    var counttwo = 0;
    var MalicTwo = 0;

    var countthree = 0;
    var Malicthree = 0;

    var ResultMalicOne = 0;
    var ResultMalicTwo = 0;
    var ResultMalicthree = 0;

    for (var i = 0; i < jsonWineData.length; i++) {     ///based on alcohol , Malic acid average is calculated 
        if (jsonWineData[i].Alcohol === 1) {

            countone++;
            MalicOne = MalicOne + jsonWineData[i]['Malic Acid'];

        }
        else if (jsonWineData[i].Alcohol === 2) {
            counttwo += 1;
            MalicTwo += jsonWineData[i]['Malic Acid'];

        }

        else if (jsonWineData[i].Alcohol === 3) {
            countthree += 1;
            Malicthree += jsonWineData[i]['Malic Acid'];
        }


        ResultMalicOne = MalicOne / countone;                   // Average of malic acid when alcohol value is 1 
        ResultMalicTwo = MalicTwo / counttwo;                    // Average of malic acid when alcohol value is 2
        ResultMalicthree = Malicthree / countthree;              // Average of malic acid when alcohol value is 3

    }


    const option = {                                            //bar chart properties are set using this.
        tooltip: {

            trigger: 'axis',                                    //on placing the cursor it shows the value at that point
            axisPointer: {
                type: 'cross'
            }
        },
        grid: { top: 10, right: 250, bottom: 100, left: 70 },            //size of chart

        xAxis: [                                                        //Alcohol on x axis
            {
                type: 'category',
                name: 'Alcohol',
                nameLocation: 'middle',
                nameGap: 30, scaleSize: 2,
                min: 1,
                max: 3
            }
        ],

        yAxis: [                                                        //Average of malic acid on y axis 
            {
                type: 'value',
                name: 'Malic Acid',
                nameLocation: 'middle',
                nameGap: 35,
                scaleSize: 2,
                min: 12,
                max: 14
            }
        ],
        series: [
            {
                type: 'bar',
                data: [0, ResultMalicOne, ResultMalicTwo, ResultMalicthree]                         //Averages values final result 
            }
        ]
    };





    return (

        <>
            <div className='barChartFont'>                                          {/*css to manage font size */}
                <p>Bar Chart</p>
            </div>
            <div className='barChart'>                                              {/*css to manage bar chart size */}
                <ReactEcharts
                    option={option} />
            </div>

        </>

    )
}


export default BarChart;
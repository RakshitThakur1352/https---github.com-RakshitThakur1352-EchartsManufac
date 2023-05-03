import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactEcharts from "echarts-for-react"; 

import jsonWineData from '../src/WineDataSet.json';



var countone =0;
var MalicOne =0;

var counttwo =0;
var MalicTwo =0;

var countthree =0;
var Malicthree =0;

var ResultMalicOne =0;
var ResultMalicTwo =0;
var ResultMalicthree =0;


for(var i =0;i<jsonWineData.length;i++)
{
  if(jsonWineData[i].Alcohol===1)
  {
   
   countone ++ ;
   MalicOne = MalicOne +  jsonWineData[i]['Malic Acid'];

  }
   else if(jsonWineData[i].Alcohol===2)
  {
    counttwo +=1;
    MalicTwo +=  jsonWineData[i]['Malic Acid'];

  }

  else if(jsonWineData[i].Alcohol===3)
  {
    countthree +=1;
    Malicthree += jsonWineData[i]['Malic Acid'];
  }
  

  ResultMalicOne = MalicOne/countone;
  ResultMalicTwo = MalicTwo/counttwo;
  ResultMalicthree = Malicthree/countthree;

}


const x = 178;
const y= 0;
let a = new Array(x);   // create an empty array of length x
for (var i = 0; i < x; i++)
	 {
 		 a[i] = new Array(y); 
    }

var HueeDataset=new Array();
for(var k=0;k<jsonWineData.length;k++)

{ 
  a[k].push(jsonWineData[k]['Color intensity'],jsonWineData[k]['Hue'])
  

} 




const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'cross'
    }
},
  grid: { top: 40, right: 200, bottom: 50, left: 70 },
  xAxis : [
    {
      type : 'category',
      name: 'Alcohol',
      nameLocation: 'middle',
      nameGap: 30,scaleSize: 2,
      min:1,
      max:3
    }
  ],

  yAxis : [
    {
      type : 'value',
      name: 'Malic Acid',
      nameLocation: 'middle',
      nameGap: 35,
      scaleSize:2,
      min:12,
      max:14
    }
  ],
   series: [
    {
      type: 'bar',
     data:[0,ResultMalicOne,ResultMalicTwo,ResultMalicthree]
    }
  ]
}; 



const optionforscatter = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'cross'
    }
},
  grid: { top: 10, right: 200, bottom: 70, left: 90 },
  xAxis : [
    {
      type : 'value',
      name: 'Color Intensity',
      nameLocation: 'middle',
      nameGap: 30,
      min: 0,
      max: 5
    }
  ],
  yAxis : [
    {
      type : 'value',
       name: 'Hue',
      nameLocation: 'middle',
      nameGap: 25,
      min: 0,
        max: 16
    }
  ],
  dataset: {
    source: a
  },
  
  series: [
    {
      type: 'scatter',
      symbolSize: 8,
    }
  ]
};


function App() {
  return (
    
    <>

    <div className='barChartFont'>
      <p>Bar Chart</p>
    </div>
    <div className='barChart'>
        <ReactEcharts  
         option={option} />
    </div>



    <div className='ScatterChartFont'>
      <p>Scatter Plot</p>
    </div>  
    <div className='ScatterChart'>
        <ReactEcharts  
         option={optionforscatter} />
    </div>
    </>
  );
}

export default App;






















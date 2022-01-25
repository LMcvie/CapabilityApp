import React from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './SpiderChart.css';


const SpiderChart = () => {


//pass in the datasets then loop through and add a key to data with the persons results
  const data = [
    { name: 'React Router', series1: 68, series2:54 },
    { name: 'Release', series1: 43, series2:23 },
    { name: 'useEffect', series1: 87, series2:59 },
    { name: 'TTD', series1: 22, series2:78 },
    { name: 'Using sandbox', series1: 66, series2:89 },
    { name: 'HTML', series1: 68, series2:33 },
    { name: 'CSS' , series1: 31, series2:44},
    { name: 'useState' , series1: 72, series2:82},
    { name: 'API calls' , series1: 88, series2:60},
  ];

  // const RadarList = data.map((data, index) => {
  //   return (
  //     <></>// <Radar name = /Radar>
  //   );ac
  // });

  return (
    <div id = 'spiderChart'>
      <ResponsiveContainer width="100%" aspect="1.25">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <Radar name="Danny" dataKey="series1" stroke="Red"
            fill='red' fillOpacity={0.5} />
          <PolarRadiusAxis angle={70} domain={[0, 100]} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );

}

export default SpiderChart;

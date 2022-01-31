import {useState, useEffect} from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './SpiderChart.css';
import react from 'react';


const SpiderChart = ({topics, userDetails}) => {

  const [data, setData] = useState();

  useEffect(() => {
    setData(topics.map((topic) => {
      return {name: topic.name, user: topic.value}
  }))
}, [topics]);

console.log(userDetails.email);

  return (
    <div id = 'spiderChart'>
      <ResponsiveContainer width="100%" aspect="1.25">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <Radar name={userDetails.email} dataKey="user" stroke="Red"
            fill='red' fillOpacity={0.5} />
          <PolarRadiusAxis angle={70} domain={[0, 100]} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );

}

export default SpiderChart;

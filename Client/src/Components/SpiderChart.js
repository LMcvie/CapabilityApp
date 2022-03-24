import {useState, useEffect} from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './SpiderChart.css';


const SpiderChart = ({topics, userDetails, filteredStage, filteredQuestions}) => {

  const [data, setData] = useState();
  const [aspect,setAspect] = useState('1.8');



useEffect(() => {
  handleFilterData();
}, [filteredStage]);



const handleTopicData = () => {
  
  setData(topics.map((topic) => {
    return {name: topic.name, user:topic.value}
}))
  setAspect('1.5');
}

const handleFilterData =() => {

  if (filteredStage ==='') {
    handleTopicData();
    return;
  }  
    setData(filteredQuestions.map((question) => {
      return {name: question.keyword, user:question.value}
  }))
  setAspect('1.5');
}


  return (
    <div id = 'spiderChart'>
      <ResponsiveContainer width="100%" aspect={aspect} height='29rem'>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name"/>
          <Radar name={userDetails._id} dataKey="user" stroke="Red"
            fill='red' fillOpacity={0.5} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );

}

export default SpiderChart;

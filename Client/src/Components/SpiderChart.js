import {useState, useEffect} from 'react';
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './SpiderChart.css';


const SpiderChart = ({topics, userDetails, filteredStage, filteredQuestions}) => {

  const [data, setData] = useState();
  const [aspect,setAspect] = useState('1.8');

//   useEffect(() => {
//    handleTopicData();
// }, []);

useEffect(() => {
  handleFilterData();
}, [filteredStage]);



const handleTopicData = () => {
  // let filterTopics = topics.filter(topics => {
  //   return topics.name != 'General';
  // })
  
  setData(topics.map((topic) => {
    return {name: topic.name, user:topic.value}
}))
  setAspect('1.8');
}

const handleFilterData =() => {

  if (filteredStage ==='') {
    handleTopicData();
    return;
  }  
    setData(filteredQuestions.map((question) => {
      return {name: question.keyword, user:question.value}
  }))
  setAspect('1.8');
}


  return (
    <div id = 'spiderChart'>
      <ResponsiveContainer width="100%" aspect={aspect} height='20rem'>
        <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <Radar name={userDetails.email} dataKey="user" stroke="Red"
            fill='red' fillOpacity={0.5} />
          {/* <PolarRadiusAxis angle={70} domain={[0, 100]} /> */}
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );

}

export default SpiderChart;

import { useNavigate } from "react-router-dom";
import './SummaryPage.css';
import SpiderChart from '../Components/SpiderChart.js';

//On the submission of the answers create a spider chart 

const SummaryPage = ({questions, topics, userDetails}) => {
 
    const navigate = useNavigate();

    const handleClose =(event) => {
        navigate('/CapabilityApp');
        window.location.reload();
    }

    const dataList = questions.map(question => {
        return (
            <ul>
                {/* <h3>Topic: {question.name}</h3> */}
                <li>Question: {question.text}</li>
                <li>Value: {question.value}</li>
            </ul>
            
        )
    })


    return (
        <div id='summary'>
            <h2>Summary</h2>
            <div id="chart">
                <SpiderChart topics = {topics} userDetails ={userDetails}/>
            </div>
            <br></br>
            <div id = 'data'>
            <h3>Numerical Data</h3>
            {dataList}
            </div>
            <button onClick={handleClose}>Close Tool</button>
        </div>
    )

}

export default SummaryPage;
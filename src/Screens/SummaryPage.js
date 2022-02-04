import { useNavigate } from "react-router-dom";
import './SummaryPage.css';
import SpiderChart from '../Components/SpiderChart.js';
import { useState } from "react";

//On the submission of the answers create a spider chart 

const SummaryPage = ({ questions, topics, userDetails }) => {

    const [filteredQUestions, setFilteredQuestions] = useState();
    const [filteredStage, setFilteredStage] = useState ('');

    const navigate = useNavigate();

    const handleClose = (event) => {
        navigate('/CapabilityApp');
        window.location.reload();
    }

    const dataList = questions.map((question, index) => {

        let skillLevel;
        if (question.value < 25) {
            skillLevel = 'Awareness';
        }

        if (question.value >= 25 && question.value < 50) {
            skillLevel = 'Working';
        }

        if (question.value >= 50 && question.value < 75) {
            skillLevel = 'Practitioner';
        }

        if (question.value >= 75) {
            skillLevel = 'Expert';
        }


        return (
            <ul key={index}>
                <h3>Topic: {question.name}</h3>
                <li>Question: {question.text}</li>
                <li>Skill Level: {skillLevel}</li>
            </ul>

        )
    })


    const handleOptimusChange = (event) => {
        setFilteredStage(event.target.value);

    }


    return (
        <div id='summary'>
            <h2>Summary</h2>
            <div id="chart">
                <SpiderChart topics={topics} userDetails={userDetails} />
            </div>
            <br></br>
            <div id='data'>
                <h2>Numerical Data</h2>
                <select defaultValue={''} name='Optimus Stage' required onChange={handleOptimusChange}>
                    <option disabled value='' required></option>
                    <option value='Understand'>Understand</option>
                    <option value='Incubate'>Incubate</option>
                    <option value='Develop'>Develop</option>
                    <option value='Deploy'>Deploy</option>
                    <option value='`General`'>General</option>
                </select>
                {dataList}
            </div>
            <button onClick={handleClose}>Close Tool</button>
        </div>
    )

}

export default SummaryPage;
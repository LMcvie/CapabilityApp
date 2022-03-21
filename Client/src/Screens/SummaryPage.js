import { useNavigate } from "react-router-dom";
import './SummaryPage.css';
import SpiderChart from '../Components/SpiderChart.js';
import { useState } from "react";

const SummaryPage = ({ questions, topics, userDetails }) => {

    const [filteredQuestions, setFilteredQuestions] = useState();
    const [filteredStage, setFilteredStage] = useState('');

    let dataList = '';
    let topicList = '';

    const navigate = useNavigate();

    const handleClose = (event) => {
        navigate('/CapabilityApp');
        window.location.reload();
    }

    if (filteredStage !== '') {

        dataList = filteredQuestions.map((question, index) => {

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
                    <li>Question: {question.text}</li>
                    <li>Value:  {question.value}/100</li>
                    <li>Skill Level: {skillLevel}</li>
                </ul>
            )
        })
    }

    if (filteredStage === '') {
        topicList = topics.map((topic, index) => {

            let skillLevel;
            if (topic.value < 25) {
                skillLevel = 'Awareness';
            }

            if (topic.value >= 25 && topic.value < 50) {
                skillLevel = 'Working';
            }

            if (topic.value >= 50 && topic.value < 75) {
                skillLevel = 'Practitioner';
            }

            if (topic.value >= 75) {
                skillLevel = 'Expert';
            }

            return (
                <ul key={index}>
                    <h3> {topic.name}</h3>
                    <li>Value: {topic.value}/100</li>
                    <li>Skill Level: {skillLevel}</li>
                </ul>
            )
        })
    }
    const handleOptimusChange = (event) => {
        setFilteredStage(event.target.value);
        filterQuestions(event.target.value);

    }

    const filterQuestions = (stage) => {
        let filtered = questions.filter(question => {
            return question.name === stage;
        })
        setFilteredQuestions(filtered);
    }


    return (
        <div id='summary'>
            <h2>Summary</h2>
            <select defaultValue={''} name='Optimus Stage' required onChange={handleOptimusChange}>
                <option value='' required>Optimus Overview</option>
                <option value='Understand'>Understand</option>
                <option value='Incubate'>Incubate</option>
                <option value='Develop'>Develop</option>
            </select>

            <div id="chart">
                <SpiderChart topics={topics} userDetails={userDetails} filteredStage={filteredStage} filteredQuestions={filteredQuestions} />
            </div>
            <br></br>

            <div id='data'>
                <h2>Numerical Data</h2>

                {dataList}

                <div id='overview'>
                    {topicList}
                </div>

            </div>
            <button onClick={handleClose}>Close Tool</button>
        </div>
    )

}

export default SummaryPage;
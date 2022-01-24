import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import ScrollList from '../Components/ScrollList.js';
import './TopicsPage.css';


const TopicsPage = ({topics, onTopicSelect, onBack, completedTopics}) => {
    
    let navigate = useNavigate();
    console.log(completedTopics);

    const handleBack= (event) => {
        onBack();
        navigate('/');
    }

    const handleTopicSelect = ({selectedTopic}) => {
       onTopicSelect({selectedTopic});
    }

    const toggleInput = (event) => {
        if(completedTopics) {
            event.target.textContent = 'continue to summary';
            handleContinue();
        }
        else {
            handleBack();
        }
    }

    const handleContinue = (event) => {
        console.log('success');
    }


    if (completedTopics)
    {
        let topicButton = document.getElementById("topicButton");
        topicButton.setAttribute("onClick", `{handleContinue}`);
        console.log(topicButton);
        topicButton.textContent = 'Continue to Summary';
    }


    return (
        <div id = 'topicsList'>
            <h2>Topics</h2>
            <ScrollList onTopicSubmit = {(selectedTopic) => handleTopicSelect(selectedTopic)} topics={topics} />
            <button id = 'topicButton' onClick={toggleInput}>Back To Menu</button>
        </div>
    )

}

export default TopicsPage;

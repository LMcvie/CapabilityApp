import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import ScrollList from '../Components/ScrollList.js';
import './TopicsPage.css';


const TopicsPage = ({topics, onTopicSelect, completedTopics, toggleBar}) => {

    const [topicButtonText,setTopicButtonText] = useState('Back to Menu');

  
    let navigate = useNavigate();

    const handleBack= (event) => {
        toggleBar();
        navigate('/CapabilityApp/');
    }

    const handleTopicSelect = ({selectedTopic}) => {
       onTopicSelect({selectedTopic});
      
    }

    if(completedTopics && topicButtonText === 'Back to Menu') {
        setTopicButtonText('Continue To Summary');
    }

    const toggleInput = (event) => {
        if(completedTopics) {
            handleContinue();
        }
        else {
            handleBack();
        }
    }

    const handleContinue = (event) => {
        toggleBar();
        navigate('/CapabilityApp/summary');
    }

    return (
        <div id = 'topicsList'>
            <h2>Topics</h2>
            <ScrollList onTopicSubmit = {(selectedTopic) => handleTopicSelect(selectedTopic)} topics={topics} />
            <button id = 'topicButton' onClick={toggleInput}>{topicButtonText}</button>
        </div>
    )

}

export default TopicsPage;

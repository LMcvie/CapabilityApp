import { useNavigate } from "react-router-dom";
import {useState} from "react";
import ScrollList from '../Components/ScrollList.js';
import './TopicsPage.css';

//For a topic being selected and completed allow the user to go back to the Menu of topics

const TopicsPage = ({topics, onTopicSelect, completedTopics, toggleBar, submitData}) => {

    const [topicButtonText,setTopicButtonText] = useState('Back to Menu');

  
    let navigate = useNavigate();

    // if back button is pressed go back to main menu
    const handleBack= (event) => {
        toggleBar();
        navigate('/CapabilityApp/');
        window.location.reload();
    }

    // pass back selected topic to container when selected
    const handleTopicSelect = ({selectedTopic}) => {
       onTopicSelect({selectedTopic});
      
    }
    
 //If all the topics are completed show Continue to Summary text on the button
    if(completedTopics && topicButtonText === 'Back to Menu') {
        setTopicButtonText('Continue To Summary');
    }
//If the topics are completed the user is allowed to click on Continue to Summary otherwise it can click in Back to the Menu
    const toggleInput = (event) => {
        if(completedTopics) {
            handleContinue();
        }
        else {
            handleBack();
        }
    }
    //toggle the progress bar and navigate to summary
    const handleContinue = (event) => {
        toggleBar();
        submitData();
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

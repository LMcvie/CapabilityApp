import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import ScrollList from '../Components/ScrollList.js';
import './TopicsPage.css';


const TopicsPage = ({topics, onTopicSelect}) => {
    
    let navigate = useNavigate();

    const handleBack= (event) => {
        navigate('/');
    }

    const handleTopicSelect = ({selectedTopic}) => {
       onTopicSelect({selectedTopic});
        
    }

    return (
        <div id = 'topicsList'>
            <h2>Topics</h2>
            <ScrollList onTopicSubmit = {(selectedTopic) => handleTopicSelect(selectedTopic)} topics={topics} />
            <button onClick={handleBack}>Back To Menu</button>
        </div>
    )

}

export default TopicsPage;

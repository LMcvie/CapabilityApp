
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './ScrollList.css';

const ScrollList = ({ topics, onTopicSubmit }) => {

    const [selectedTopic, setSelectedTopic] = useState();
    const [previousSelection, setPreviousSelection] = useState(null);
    let buttonsList;
    let navigate = useNavigate();
    const handleClick = (event) => {

        if (event.target === previousSelection) {
            event.target.className = topics[previousSelection.value].completed;
            setPreviousSelection(null);
            return;
        }

        if (previousSelection) {
            previousSelection.className = topics[previousSelection.value].completed;
        }

        setPreviousSelection(event.target);
        event.target.className = 'selected';
        setSelectedTopic(event.target.textContent);
    }

    if (topics) {

        buttonsList = topics.map((topic, index) => {
            return (
                <button className={topic.completed} onClick={handleClick} key={index} value={index}>{topic.name} </button>
            );
        });
    }

    const handleSelect = (event) => {
        event.preventDefault();
        if (!selectedTopic) {
            alert('Please select the question set you want to complete');
            return;
        }
        navigate('/CapabilityApp/Questions');
        onTopicSubmit({ selectedTopic });
    }

    return (
        <>
            <div id="list">
                {buttonsList}
            </div>
            <button onClick={handleSelect} id='select'>Select</button>
        </>
    );
}

export default ScrollList;
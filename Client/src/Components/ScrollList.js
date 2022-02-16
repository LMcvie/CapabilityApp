
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './ScrollList.css';


const ScrollList = ({ topics, onTopicSubmit }) => {

    const [selectedTopic, setSelectedTopic] = useState();
    const [previousSelection, setPreviousSelection] = useState(null);
    let buttonsList;
    let navigate = useNavigate();
    const handleClick = (event) => {

        // if they press selected topic again it unselects the topic
        if (event.target === previousSelection) {
            event.target.className = topics[previousSelection.value].completed;
            setPreviousSelection(null);
            return;
        }

        // if select new topic, it stops highlighting the old selected topic by changing its class back
        if (previousSelection) {
            previousSelection.className = topics[previousSelection.value].completed;
        }

        //keep track of last selected topic
        setPreviousSelection(event.target);
        event.target.className = 'selected';

        setSelectedTopic(event.target.textContent);

    }

    // generate every topic from list as a scrollable button
    if (topics) {

   
    buttonsList = topics.map((topic, index) => {
        return (
            <button className={topic.completed} onClick={handleClick} key={index} value={index}>{topic.name} </button>
        );


    });
}
    // when select button is pressed send the selectedTopic back to the container
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
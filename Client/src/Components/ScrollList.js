
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './ScrollList.css';

const ScrollList = ({ topics, onTopicSubmit }) => {

    let buttonsList;
    let navigate = useNavigate();
    const handleClick = (event) => {

        event.target.className = 'selected';
        onTopicSubmit(event.target.textContent);
        navigate('/CapabilityApp/Questions');
    }

    if (topics) {

        buttonsList = topics.map((topic, index) => {
            return (
                <button className={topic.completed} onClick={handleClick} key={index} value={index}>{topic.name} </button>
            );
        });
    }

    return (
        <>
            <div id="list">
                {buttonsList}
            </div>
        </>
    );
}

export default ScrollList;
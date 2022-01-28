import { useState, useEffect } from 'react';
import './ProgressBar.css';

//Presents the percentage of completion of the form

const ProgressBar = ({ progress, loadingBarRequired }) => {

    // default colour for progress bar (orange)
    const bgcolor = "#ef6c00";

    //set initial colours and percentage of bar on load
    useEffect(() => {
        loadProgressBar();
    }, []);
    
    //Loads the percentage of completion as the user completes the questionnaire 
    useEffect(() => {
        loadProgressBar();
    }, [progress]);
    
    //when loading bar variable that is passed in is changed, change the visibility of the bar
    useEffect(() => {
        ToggleProgressBar();
    },[loadingBarRequired])

    //modifies the element based on progress and colour
    const loadProgressBar = () => {
        let element = document.getElementById("fillerStyles");
        element.style.width = `${progress}%`;
        element.style.backgroundColor = bgcolor;

    }

    const ToggleProgressBar = () => {

    //The progress bar is shown when it is required and hidden otherwise
    if(loadingBarRequired) {
        let element = document.getElementById("containerStyles");
        element.style.display = 'block';
    }else
    if(!loadingBarRequired){
        let element = document.getElementById("containerStyles");
        element.style.display = 'none';
    }
    }


    return (
        <div id='ProgressBar'>
            <div id='containerStyles'>
                <div id='fillerStyles'>
                    <span id='labelStyles'>{`${progress}%`}</span>
                </div>
            </div>
        </div>


    );
};

export default ProgressBar;
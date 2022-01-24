import { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress, loadingBarRequired }) => {

    const bgcolor = "#ef6c00";

    useEffect(() => {
        loadProgressBar();
    }, []);

    useEffect(() => {
        loadProgressBar();
    }, [progress]);

    useEffect(() => {
        ToggleProgressBar();
    },[loadingBarRequired])

    const loadProgressBar = () => {
        let element = document.getElementById("fillerStyles");
        element.style.width = `${progress}%`;
        element.style.backgroundColor = bgcolor;

    }

    const ToggleProgressBar = () => {


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
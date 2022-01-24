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

    const loadProgressBar = () => {
        let element = document.getElementById("fillerStyles");
        element.style.width = `${progress}%`;
        element.style.backgroundColor = bgcolor;

    }

    if(loadingBarRequired) {
        let element2 = document.getElementById("containerStyles");
        element2.style.display = 'block';
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
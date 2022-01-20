import { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {

    const [completed, setCompleted] = useState(0);

    const bgcolor = "#ef6c00";

    useEffect(() => {
        setCompleted(progress);
        loadProgressBar();
    }, []);

    const loadProgressBar = () => {
        let element = document.getElementById("fillerStyles");
        element.style.width = `${progress}%`;
        element.style.backgroundColor = bgcolor;

    }

    const containerStyles = {
        height: 20,
        width: '50%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        transition: 'width 1s ease-in-out',
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }



    return (
        <div id='ProgressBar'>
            <div id='containerStyles'>
                <div id='fillerStyles'>
                    <span id='labelStyles'>{`${completed}%`}</span>
                </div>
            </div>
        </div>


    );
};

export default ProgressBar;
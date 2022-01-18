import { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ progress }) => {

    console.log(progress);
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setCompleted(progress.completed);
        loadProgressBar();
    }, []);

    const loadProgressBar = () => {
        console.log(`${progress.completed}%`);
        console.log(progress.bgcolor);
        let element = document.getElementById("fillerStyles");
        element.style.width = `${progress.completed}%`;
        element.style.backgroundColor = progress.bgcolor;

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
        backgroundColor: progress.bgcolor,
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
            <h2>Progress Bar</h2>

            <div id='containerStyles'>
                <div id='fillerStyles'>
                    <span id='labelStyles'>{`${completed}%`}</span>
                </div>
            </div>
        </div>


    );
};

export default ProgressBar;
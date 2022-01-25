import "./QuestionSlider.css";
import {useState,useEffect} from 'react';
import { useLocation } from "react-router-dom";

const QuestionSlider = ({question,id}) => {
    const [answer,setAnswer]= useState(question.value);

 

    useEffect(() => {
         loadSlider();
    }, []);

    useEffect(() => {
        question.value = answer;
   }, [answer]);

    const loadSlider = () => {
        setSliderColor();
    }
    

    const setSliderColor= () => {
        let gradientColor = `255,0,0`;
        if (answer >= 25 && answer <= 50) gradientColor = '215,140,0';
        if (answer >= 50 && answer <= 75) gradientColor = '255,165,0';
        if (answer >= 75 && answer <= 99) gradientColor = '255,215,0';
        if (answer > 99 ) gradientColor = '124,252,0';
        let color = `linear-gradient(90deg,rgb(${gradientColor})` + answer + '%, rgb(214,214,214)' + answer + '%)';

        document.getElementById(id).style.background = color;
    }


    const handleChange = (event) => {
        setAnswer(event.target.value);
        setSliderColor();

    }

    return (
        <div id='question-div'>
            <p>{question.text}</p>
            <input type="range" id = {id} className="slider" min="0" max="100" defaultValue={answer} step="1" onChange={handleChange} onClick={handleChange} ></input>
            <p>Value: {answer}</p>
                        
        </div>
    );

}



export default QuestionSlider;
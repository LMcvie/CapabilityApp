import "./QuestionSlider.css";
import {useState,useEffect} from 'react';
import { useLocation } from "react-router-dom";

const QuestionSlider = ({question,id}) => {
    const [answer,setAnswer]= useState(question.value);
    const [isShown,setShown] = useState (false);

 

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
        let gradientColor;
        if (answer >= 0 && answer < 20) gradientColor = `255,0,0`;
        if (answer >= 20 && answer < 40) gradientColor = '215,140,0';
        if (answer >= 40 && answer < 60) gradientColor = '255,165,0';
        if (answer >= 60 && answer < 80) gradientColor = '255,215,0';
        if (answer >= 80 && answer < 99) gradientColor = '255,255,0';
        if (answer >= 99) gradientColor = '124,252,0';
        let color = `linear-gradient(90deg,rgb(${gradientColor})` + answer + '%, rgb(214,214,214)' + answer + '%)';

        document.getElementById(id).style.background = color;
    }


    const handleChange = (event) => {
        setSliderColor();
        setAnswer(event.target.value);
        

    }

    return (
        <div id='question-div'>
            <div id = 'question'>
            <p >{question.text}</p>
            <img src = 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_info_outline_48px-512.png' alt = 'info icon' width = '17px' height = '17px'onMouseEnter={() => setShown(true)} onMouseLeave={() => setShown(false)}></img>
            
            </div>
            
            <input type="range" id = {id} className="slider" min="0" max="100" defaultValue={answer} step="1" onChange={handleChange} onClick={handleChange} ></input>
            <p >Value: {answer}</p>
            
            {isShown && (
                <div id = 'popUp'>
                    <p>{question.description}</p>
                    </div>
            )}         
        </div>
    );

}



export default QuestionSlider;
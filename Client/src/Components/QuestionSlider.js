import "./QuestionSlider.css";
import {useState,useEffect} from 'react';
import PopUp from "./PopUp.js";

//Slider bar to answer each question


//Sets the default answer value
const QuestionSlider = ({question,id}) => {
    const [answer,setAnswer]= useState(question.value || '0');
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

    //Based on the value of the answer a certain colour is set
    

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

// updates answer and color when slider is either clicked or thumb is moved
    const handleChange = (event) => {
        setSliderColor();
        setAnswer(event.target.value);
        

    }

    return (
        <div id='question-div'>
            <div id = 'question'>
            <p >{question.text}</p>
            <img src = 'https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_info_outline_48px-512.png' alt = 'info icon' width = '20px' height = '20px' onMouseOver={() => setShown(true)} onMouseOut={() => setShown(false)}></img>

              {/* Hovers the description of the question in details */}
              {isShown && (
                <div id = 'popUp'>
                    <PopUp description ={question.description}/>
                    </div>
            )}         
            
            </div>
            
            <input type="range" id = {id} className="slider" min="0" max="100" defaultValue={answer} step="1" onChange={handleChange} onClick={handleChange} ></input>
            <p >Value: {answer}</p>
            
          
        </div>
    );

}



export default QuestionSlider;
import "./QuestionSlider.css";


const QuestionSlider = ({ question,id }) => {
    
    const sliderID = `slider${id}`;
    const valueID = `value${id}`;
    let slider;
    let x;
    let output;

    
    
    //use effect instead. update!
    window.addEventListener('DOMContentLoaded', (event) => {
        x= question.defaultValue;
        output = document.getElementById(`${valueID}`);
        output.innerHTML = question.defaultValue;
        setSliderColor();
    });


    const setSliderColor= () => {
        slider = document.getElementById(`${sliderID}`);
        if( slider === null) return;
        let gradientColor = `255,0,0`;
        if (x >= 25 && x <= 50) gradientColor = '215,140,0';
        if (x >= 50 && x <= 75) gradientColor = '255,165,0';
        if (x >= 75 && x < 100) gradientColor = '255,215,0';
        if (x === 100) gradientColor = '166,214,8';
        let color = `linear-gradient(90deg,rgb(${gradientColor})` + x + '%, rgb(214,214,214)' + x + '%)';
        slider.style.background = color;
    }


    const handleChange = (event) => {
        x = slider.value;
        console.log(id);
        setSliderColor();
        output = document.getElementById(`${valueID}`);
        output.innerHTML = slider.value;
    }

    return (
        <div id='question-div'>
            <input type="range" id={sliderID} className="slider" min="0" max="100" defaultValue={question.defaultValue} step="1" onChange={handleChange} ></input>
            <p>Value: <span id={valueID}></span></p>
            <p>{question.text}</p>            
        </div>
    );

}



export default QuestionSlider;
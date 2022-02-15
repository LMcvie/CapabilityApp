import { useNavigate } from "react-router-dom";
import QuestionSlider from '../Components/QuestionSlider.js';
import './QuestionPage.css';

//Handles the submission of the answers 

const QuestionPage = ({questions, answers, onAnswerSubmit }) => {

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate('/CapabilityApp/Topics');
    onAnswerSubmit(questions);
  }



  // for the list of questions create a question component with slider and description
  const QuestionList = questions.map((question, index) => {
    return (
      <QuestionSlider question={question} answer ={answers[index]} key={index} id={index} ></QuestionSlider>
    );
  });

  return (

    <>
      <h2>QuestionPage</h2>
      <div id='QuestionPage'>
        {QuestionList}
      </div>
      <button onClick={handleSubmit}>Submit Answers</button>
    </>
  )

}

export default QuestionPage;
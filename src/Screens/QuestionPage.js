import { useNavigate } from "react-router-dom";
import QuestionSlider from '../Components/QuestionSlider.js';
import './QuestionPage.css';


const QuestionPage = ({questions, onAnswerSubmit }) => {

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate('/Topics');
    onAnswerSubmit(questions);
  }



  
  const QuestionList = questions.map((question, index) => {
    return (
      <QuestionSlider question={question} key={index} id={index} onAnswer = {(question, id) => onAnswer(question, id)}></QuestionSlider>
    );
  });

  const onAnswer = (question,id) => {
    // questions[id] = question;
  }

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
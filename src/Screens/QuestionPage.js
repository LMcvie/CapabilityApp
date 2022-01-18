import { useNavigate} from "react-router-dom";
import QuestionSlider from '../Components/QuestionSlider.js';


const QuestionPage = () => {


    const questions = 
    [
      {
        defaultValue: '0',
        text: 'How confident are you with CSS?'
    
      },
      {
        defaultValue: '50',
        text: 'How confident are you working on release?'
      },
      {
        defaultValue:'80',
        text:'How confident are you with react router'
      }
  
    ]


    let navigate = useNavigate();
    
    const handleSubmit = (event) => {
        navigate('/Topics');
    }


    const QuestionList = questions.map((question,index) => {
        return (
            <QuestionSlider question = {question} key = {index} id= {index}></QuestionSlider>
        );
    });
    
    return (
        <div id= 'QuestionPage'>
        <h2>QuestionPage</h2>
        {QuestionList}
        <button onClick = {handleSubmit}>Submit Answers</button>
        </div>
    )

}

export default QuestionPage;
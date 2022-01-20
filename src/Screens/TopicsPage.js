import { useNavigate } from "react-router-dom";
import {useState} from "react";
import ScrollList from '../Components/ScrollList.js';
import './TopicsPage.css';


const TopicsPage = () => {

    const [topic, setTopic] = useState(null);


    const topics = [
        { name: 'CSS', completed: 'completed' },
        { name: 'JavaScript', completed: 'notCompleted' },
        { name: 'HTML', completed: 'notCompleted' },
        { name: 'React', completed: 'completed' },
        { name: 'ReactDom', completed: 'completed' },
        { name: 'ReactRouter', completed: 'completed' },
        { name: 'JQuery', completed: 'completed' },
        { name: 'Node', completed: 'notCompleted' },
        { name: 'Node', completed: 'notCompleted' },
        { name: 'Node', completed: 'notCompleted' },
        { name: 'Node', completed: 'notCompleted' },
        { name: 'Node', completed: 'notCompleted' },
        { name: 'Node', completed: 'notCompleted' }];

    let navigate = useNavigate();

    const handleStart = (event) => {
        navigate('/');
    }

    return (
        <div id = 'topicsList'>
            <h2>Topics</h2>
            <ScrollList onTopicSubmit = {(selectedTopic) => setTopic(selectedTopic)} topics={topics} />
            <button onClick={handleStart}>Back To Menu</button>
        </div>
    )

}

export default TopicsPage;

import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import MenuPage from '../Screens/MenuPage.js';
import QuestionPage from '../Screens/QuestionPage.js';
import SummaryPage from '../Screens/SummaryPage.js';
import TopicsPage from '../Screens/TopicsPage.js';
import NotFoundPage from '../Screens/NotFoundPage.js';
import './CapabilityContainer.css';
import ProgressBar from '../Components/ProgressBar.js'

const CapabilityContainer = () => {


    const [userDetails, setUserDetails] = useState({});
    const [progress, setProgress] = useState('0');
    const [loadingBarRequired, setLoadingBarRequired] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [filteredQuestions, setFilteredQuestions] = useState('');
    const [questions, setQuestions] = useState([
        {
            name: 'CSS',
            value: '0',
            text: 'How confident are you with CSS?'

        },
        {
            name: 'Node',
            value: '0',
            text: 'How confident are you working on node?'
        },
        {
            name: 'Node',
            value: '0',
            text: 'How much are you working on node?'
        },
        {
            name: 'JavaScript',
            value: '0',
            text: 'How confident are you with JavaScript'
        },
        {
            name: 'ReactRouter',
            value: '0',
            text: 'How confident are you with react router'
        },
        {
            name: 'React',
            value: '0',
            text: 'How confident are you with react'
        },
        {
            name: 'HTML',
            value: '0',
            text: 'How confident are you with HTML'
        },
        {
            name: 'ReactDom',
            value: '0',
            text: 'How confident are you with ReactDom'
        },
        {
            name: 'JQuery',
            value: '0',
            text: 'How confident are you with JQuery'
        }

    ]);



    const [topics, setTopics] = useState([
        { name: 'CSS', completed: 'notCompleted' },
        { name: 'JavaScript', completed: 'notCompleted' },
        { name: 'HTML', completed: 'notCompleted' },
        { name: 'React', completed: 'notCompleted' },
        { name: 'ReactDom', completed: 'notCompleted' },
        { name: 'ReactRouter', completed: 'notCompleted' },
        { name: 'JQuery', completed: 'notCompleted' },
        { name: 'Node', completed: 'notCompleted' }]);


    const [completedTopics, setCompletedTopics] = useState(false);

    useEffect(() => {
        setProgressBar();
    }, []);


    useEffect(() => {
        if (progress === 100) 
        {
            setCompletedTopics(true);
        }
    }, [progress]);
   



    const handleUserInput = ({ userDetails }) => {
        setUserDetails(userDetails);
        setLoadingBarRequired(true);

    }

    const updateCompletedTopics = () => {
        let tempTopics = topics;
           
            topics.map((topic,index) => {
                if (topic.name === selectedTopic) {
                    tempTopics[index].completed = 'completed';
                }
            });
        setTopics(tempTopics);
        setProgressBar();

    }

    const handleSelectedTopic = ({ selectedTopic }) => {
        selectedTopic = selectedTopic.replace(/ /g, '');
        setSelectedTopic(selectedTopic);
        updateQuestions(selectedTopic);

    }


    const setProgressBar = () => {
        let filteredTopics = topics.filter((topic) => {
            return topic.completed.includes('completed');
        });

        setProgress(Math.round((filteredTopics.length / topics.length) * 100));
       
    }

    const onAnswerSubmit = (updatedQuestions) => {
        let testQuestions = questions;
        updatedQuestions.map((question) => {

            let testid = questions.findIndex((test) => {
                return test.text === question.text;
            })
            testQuestions[testid] = question;
        })
        setQuestions(testQuestions);
        updateQuestions(selectedTopic);
        updateCompletedTopics();

    }

    const updateQuestions = (selectedTopic) => {
        if (selectedTopic === null) {
            return;
        }
        let topicQuestions = questions.filter((question) => {
            return question.name.toUpperCase() === selectedTopic.toUpperCase();
        });
        setFilteredQuestions(topicQuestions);
    }


    return (
        <div id='Container'>
            <ProgressBar progress={progress} loadingBarRequired={loadingBarRequired} />

            <Router>
                <Routes>
                    <Route path="/*" element={<MenuPage onUserSubmit={(userDetails) => handleUserInput(userDetails)} />} />
                    <Route path="/Topics" element={<TopicsPage topics={topics} onTopicSelect={(selectedTopic) => handleSelectedTopic(selectedTopic)} onBack={() => setLoadingBarRequired(false)} completedTopics = {completedTopics} />} />
                    <Route path="/Questions" element={<QuestionPage questions={filteredQuestions} onAnswerSubmit={(updatedQuestions) => onAnswerSubmit(updatedQuestions)} />} />
                    {/* <Route path="/Summary" element={<SummaryPage />} /> */}
                    {/* <Route path="*" element={<NotFoundPage />}/> */}
                </Routes>
            </Router>

        </div>
    )

}


export default CapabilityContainer;
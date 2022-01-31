import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import MenuPage from '../Screens/MenuPage.js';
import QuestionPage from '../Screens/QuestionPage.js';
import SummaryPage from '../Screens/SummaryPage.js';
import TopicsPage from '../Screens/TopicsPage.js';
import NotFoundPage from '../Screens/NotFoundPage.js';
import './CapabilityContainer.css';
import ProgressBar from '../Components/ProgressBar.js'

const CapabilityContainer = () => {

    //useSated for all the inputs:
    //Inputs form the user details(Credentials);
    //The progress bar
    //Slider
    //Selected topics
    //Questions
    const [userDetails, setUserDetails] = useState({});
    const [progress, setProgress] = useState('0');
    const [loadingBarRequired, setLoadingBarRequired] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [filteredQuestions, setFilteredQuestions] = useState('');
    const [questions, setQuestions] = useState([
        {
            name: 'CSS',
            value: '0',
            text: 'How confident are you with CSS?',
            description: 'CSS also known as Cascading Style Sheets'
        },
        {
            name: 'Node',
            value: '0',
            text: 'How confident are you working on node?',
            description: 'Node.js is used for creating networking applications'
        },
        {
            name: 'Node',
            value: '0',
            text: 'How much are you working on node?',
            description: 'Node.js is used for creating networking applications'
        },
        {
            name: 'JavaScript',
            value: '0',
            text: 'How confident are you with JavaScript',
            description: 'Scripting language enabling dynamic updating content'
        },
        {
            name: 'ReactRouter',
            value: '0',
            text: 'How confident are you with react router',
            description: 'React router is a library for routing in React, it enables navigation among views of different components ina react application'
        },
        {
            name: 'React',
            value: '0',
            text: 'How confident are you with react',
            description: 'React is a free open-source front-end JavaScript Library for building user interfaces based on UI components'
        },
        {
            name: 'HTML',
            value: '0',
            text: 'How confident are you with HTML',
            description: 'HTML is also known as Hyper-Text Markup Language'
        },
        {
            name: 'ReactDom',
            value: '0',
            text: 'How confident are you with ReactDom',
            description: 'ReactDom is a package that provide DOM specific methods that can be used at the top level of a web app'
        },
        {
            name: 'JQuery',
            value: '0',
            text: 'How confident are you with JQuery',
            description: 'JQuery is a fast, small and feature-rich JavaScript Library designed to simplify HTML DOM tree traversal and manipulation'
        }

    ]);



    const [topics, setTopics] = useState([
        { optimus: 'Develop', name: 'CSS', completed: 'notCompleted' },
        { optimus: 'Develop', name: 'JavaScript', completed: 'notCompleted' },
        { optimus: 'Develop', name: 'HTML', completed: 'notCompleted' },
        { optimus: 'Develop', name: 'React', completed: 'notCompleted' },
        { optimus: 'Develop', name: 'ReactDom', completed: 'notCompleted' },
        { optimus: 'Develop', name: 'ReactRouter', completed: 'notCompleted' },
        { optimus: 'Develop', name: 'JQuery', completed: 'notCompleted' },
        { optimus: 'Develop', name: 'Node', completed: 'notCompleted' }]);


    const [completedTopics, setCompletedTopics] = useState(false);


    // set progress bar set up on load
    useEffect(() => {
        setProgressBar();
    }, []);

    // if progress is 100% completed set completed topics variable to true. only checks this when progress state is changed
    useEffect(() => {
        if (progress === 100) {
            setCompletedTopics(true);
        }
    }, [progress]);



    // when user details is passed back from credentials set user details and set loading bar to true (as it will be navigating to topics page as well)
    const handleUserInput = ({ userDetails }) => {
        setUserDetails(userDetails);
        setLoadingBarRequired(true);

    }

    // update topics array with which topics are completed and then updates the progress bar state
    const updateCompletedTopics = () => {
        let tempTopics = topics;

        topics.map((topic, index) => {
            if (topic.name === selectedTopic) {
                tempTopics[index].completed = 'completed';
            }
        });
        setTopics(tempTopics);
        setProgressBar();

    }
   //Update the topic menu as the topics are selected 
    const handleSelectedTopic = ({ selectedTopic }) => {
        selectedTopic = selectedTopic.replace(/ /g, '');
        setSelectedTopic(selectedTopic);
        updateQuestions(selectedTopic);

    }

    //calculate the percentage of the topics that show completed then set the progress bar to the integer rounded value
    const setProgressBar = () => {
        let filteredTopics = topics.filter((topic) => {
            return topic.completed.includes('completed');
        });

        setProgress(Math.round((filteredTopics.length / topics.length) * 100));

    }
 
 
    //Store the data once the answers are submitted 
    const onAnswerSubmit = (updatedQuestions) => {
        let testQuestions = questions;
        updatedQuestions.map((question) => {

            let testid = questions.findIndex((test) => {
                return test.text === question.text;
            })
            testQuestions[testid] = question;
        });
        setQuestions(testQuestions);
        updateQuestions(selectedTopic);
        getTopicAverage(updatedQuestions);

       

        updateCompletedTopics();

    }

    //get the average result for the skill/topic and store it in the topic object
    const getTopicAverage = (updatedQuestions) => {

        let tempTopics = topics;

        let tempId = tempTopics.findIndex((test) => {
            return test.name === selectedTopic;
        
        });

        if (updatedQuestions.length ===1) {
        
            tempTopics[tempId].value = updatedQuestions[0].value;
        }
        else{
             let total = updatedQuestions.reduce((runningTotal, number) => ({value: parseInt(runningTotal.value) + parseInt(number.value)})); 

             tempTopics[tempId].value = total.value/updatedQuestions.length;
        }
        
        console.log(tempTopics[tempId]);
        
    }

    // if there is no selected topic return and don't update. filter the questions based on the selected topic and set the filter questions state to it. This can then be passed to the questions page
    const updateQuestions = (selectedTopic) => {
        if (selectedTopic === null) {
            return;
        }
        let topicQuestions = questions.filter((question) => {
            return question.name.toUpperCase() === selectedTopic.toUpperCase();
        });
        setFilteredQuestions(topicQuestions);
    }
    
    
    // calls the progress bar on the required screen (sets the visibility of the progress bar)
    const toggleBar = () => {
        setLoadingBarRequired(!loadingBarRequired);
    }



    //The default page is the menu page with different routes leading to the matching pages
    return (
        <div id='Container'>
            <ProgressBar progress={progress} loadingBarRequired={loadingBarRequired} />

            <Router>
                <Routes>
                    <Route path="/CapabilityApp" element={<MenuPage onUserSubmit={(userDetails) => handleUserInput(userDetails)} />} />
                    <Route path="/CapabilityApp/Topics" element={<TopicsPage topics={topics} onTopicSelect={(selectedTopic) => handleSelectedTopic(selectedTopic)} completedTopics={completedTopics} toggleBar={() => toggleBar()} />} />
                    <Route path="/CapabilityApp/Questions" element={<QuestionPage questions={filteredQuestions} onAnswerSubmit={(updatedQuestions) => onAnswerSubmit(updatedQuestions)} />} />
                    <Route path="/CapabilityApp/Summary" element={<SummaryPage questions = {questions} topics = {topics} userDetails = {userDetails}/>} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </Router>

        </div>
    )

}


export default CapabilityContainer;
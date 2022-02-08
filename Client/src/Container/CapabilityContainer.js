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
    const [questions, setQuestions] = useState([]);



    const [topics, setTopics] = useState([]);


    const [completedTopics, setCompletedTopics] = useState(false);


    // set progress bar set up on load
    useEffect(() => {
        setProgressBar();
        fetchData('questions');
        fetchData('topics');
    }, []);

    // if progress is 100% completed set completed topics variable to true. only checks this when progress state is changed
    useEffect(() => {
        if (progress === 100) {
            setCompletedTopics(true);
        }
    }, [progress]);



    const fetchData = async (collection) => {
        try {
            const response = await fetch(`http://localhost:5000/api/${collection}`)
            const data = await response.json();

            if(collection === 'questions') {
                await setQuestions(data);
            }

            if(collection === 'topics') {
                await setTopics(data);
            }
          
            // await setLoaded(true);
        }

        catch (error) {
            console.log('error');
        }

    }




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

             tempTopics[tempId].value = Math.floor(total.value/updatedQuestions.length);
        }
        
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
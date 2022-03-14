import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import MenuPage from '../Screens/MenuPage.js';
import QuestionPage from '../Screens/QuestionPage.js';
import SummaryPage from '../Screens/SummaryPage.js';
import TopicsPage from '../Screens/TopicsPage.js';
import NotFoundPage from '../Screens/NotFoundPage.js';
import './CapabilityContainer.css';
import ProgressBar from '../Components/ProgressBar.js'
import {fetchByFilter, fetchAll, sendUser, sendAnswers } from '../Helper/CapabilityService.js';
import { optimus } from '../Helper/constants.js';

const CapabilityContainer = () => {


    const [userDetails, setUserDetails] = useState({});
    const [discipline, setDiscipline] = useState();
    const [progress, setProgress] = useState('0');
    const [loadingBarRequired, setLoadingBarRequired] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [filteredQuestions, setFilteredQuestions] = useState('');
    const [questions, setQuestions] = useState([]);
    const [topics, setTopics] = useState();
    const [completedTopics, setCompletedTopics] = useState(false);
    const [skills, setSkills] = useState();
    const [answers, setAnswers] = useState([]); //might not be used

    // set progress bar set up on load
    useEffect(async () => {
        if (discipline) {
            getData();
        }
    }, [discipline]);

    // if progress is 100% completed set completed topics variable to true. only checks this when progress state is changed
    useEffect(() => {
        if (progress === 100) {
            setCompletedTopics(true);
        }
    }, [progress]);

    const getData = async () => {
        setTopics(optimus);
        let tempSkills = await fetchByFilter('skills', `disciplineId=${discipline._id}`);
        setSkills(tempSkills);
        setQuestions(await fetchAll('questions', tempSkills, 'skillId='))
    }

    const handleUserInput = ({ userDetails }) => {
        setDiscipline({ name: userDetails.discipline, _id: userDetails.disciplineId });
        delete userDetails.discipline;
        setUserDetails(userDetails);
        setLoadingBarRequired(true);
    }

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
                return test.keyword === question.keyword;
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
        if (updatedQuestions.length === 1) {

            tempTopics[tempId].value = updatedQuestions[0].value;
        }
        else {
            let total = updatedQuestions.reduce((runningTotal, number) => ({ value: parseInt(runningTotal.value) + parseInt(number.value) }));
            tempTopics[tempId].value = Math.floor(total.value / updatedQuestions.length);
        }
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


    // calls the progress bar on the required screen (sets the visibility of the progress bar)
    const toggleBar = () => {
        setLoadingBarRequired(!loadingBarRequired);
    }

    const submitData = () => {
        sendUser('users',userDetails);
        sendAnswers(questions,userDetails);
    }

    //The default page is the menu page with different routes leading to the matching pages
    return (
        <div id='Container'>
            <ProgressBar progress={progress} loadingBarRequired={loadingBarRequired} />

            <Router>
                <Routes>
                    <Route path="/CapabilityApp" element={<MenuPage onUserSubmit={(userDetails) => handleUserInput(userDetails)} />} />
                    <Route path="/CapabilityApp/Topics" element={<TopicsPage topics={topics} onTopicSelect={(selectedTopic) => handleSelectedTopic(selectedTopic)} completedTopics={completedTopics} toggleBar={() => toggleBar()} submitData={() => submitData()}/>} />
                    <Route path="/CapabilityApp/Questions" element={<QuestionPage questions={filteredQuestions} answers={answers} onAnswerSubmit={(updatedQuestions) => onAnswerSubmit(updatedQuestions)} />} />
                    <Route path="/CapabilityApp/Summary" element={<SummaryPage questions={questions} topics={topics} userDetails={userDetails} />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </Router>

        </div>
    )

}


export default CapabilityContainer;
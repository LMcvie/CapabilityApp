import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import MenuPage from '../Screens/MenuPage.js';
import QuestionPage from '../Screens/QuestionPage.js';
import SummaryPage from '../Screens/SummaryPage.js';
import TopicsPage from '../Screens/TopicsPage.js';
import NotFoundPage from '../Screens/NotFoundPage.js';
import './CapabilityContainer.css';
import ProgressBar from '../Components/ProgressBar.js'
import {fetchByFilter, fetchAll, sendUser, sendAnswers, updateAnswers } from '../Helper/CapabilityService.js';
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
    const [returningUser,setReturningUser] = useState(false);

    useEffect(async () => {
        if (discipline) {
            getData();
        }
    }, [discipline]);


    useEffect(() => {
        if (progress === 100) {
            setCompletedTopics(true);
        }
    }, [progress]);

    const getData = async () => {
        setTopics(optimus);
        let tempSkills = await fetchByFilter('skills', `disciplineId=${discipline._id}`);
        setSkills(tempSkills);
        let tempQuestions = await fetchAll('questions', tempSkills, 'skillId=');
        await setQuestions(tempQuestions);
        await checkReturningUser(userDetails._id,tempQuestions);
    }

    const handleUserInput = ({ userDetails }) => {
        setDiscipline({ name: userDetails.discipline, _id: userDetails.disciplineId });
        delete userDetails.discipline;
        setUserDetails(userDetails);
        setLoadingBarRequired(true);
        
    }

    const checkReturningUser = async (id,tempQuestions) => {
        let temp = await fetchByFilter('users', `_id=${id}`);

        if (temp[0]) {
            
            let tempAnswers = await fetchByFilter('answers', `userId=${id}`);

                await tempQuestions.map((question) => {
                let tempIndex = tempAnswers.findIndex((answer) => {
                    return (answer.questionId === question._id)
                });
                question.value = tempAnswers[tempIndex].value;
                question.answerId = tempAnswers[tempIndex]._id;
            })
            setReturningUser(true);
        }
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
            let testId = questions.findIndex((test) => {
                return test._id === question._id;
            })
            testQuestions[testId] = question;
        });
        setQuestions(testQuestions);
        updateQuestions(selectedTopic);
        getTopicAverage(updatedQuestions);
        updateCompletedTopics();

    }

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


 
    const toggleBar = () => {
        setLoadingBarRequired(!loadingBarRequired);
    }

    const submitData = () => {
        sendUser('users',userDetails);
        if (returningUser) {
            updateAnswers(questions,userDetails);
        }
        else{
        sendAnswers(questions,userDetails);
        }
    }

    return (
        <div id='Container'>
            <ProgressBar progress={progress} loadingBarRequired={loadingBarRequired} />

            <Router>
                <Routes>
                    <Route path="/CapabilityApp" element={<MenuPage onUserSubmit={(userDetails) => handleUserInput(userDetails)} />} />
                    <Route path="/CapabilityApp/Topics" element={<TopicsPage topics={topics} onTopicSelect={(selectedTopic) => handleSelectedTopic(selectedTopic)} completedTopics={completedTopics} toggleBar={() => toggleBar()} submitData={() => submitData()}/>} />
                    <Route path="/CapabilityApp/Questions" element={<QuestionPage questions={filteredQuestions} onAnswerSubmit={(updatedQuestions) => onAnswerSubmit(updatedQuestions)} />} />
                    <Route path="/CapabilityApp/Summary" element={<SummaryPage questions={questions} topics={topics} userDetails={userDetails} />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </Router>

        </div>
    )

}


export default CapabilityContainer;
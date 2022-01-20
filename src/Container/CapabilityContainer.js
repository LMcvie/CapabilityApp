import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import {useState, useEffect} from 'react';
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

    const HandleUserInput = (userInfo) => {
        
        setUserDetails(userInfo.userDetails);

    }


    return (
        <div id = 'Container'>
            <ProgressBar progress={progress} />
            <Router>
                <Routes>
                    <Route path="/*" element ={<MenuPage onUserSubmit = {(userInfo) => HandleUserInput(userInfo)}/>} />
                    <Route path="/Topics" element={<TopicsPage />} />
                    <Route path="/Questions" element={<QuestionPage />} />
                    {/* <Route path="/Summary" element={<SummaryPage />} /> */}
                    {/* <Route path="*" element={<NotFoundPage />}/> */}
                </Routes>
            </Router>

        </div>
    )

}


export default CapabilityContainer;
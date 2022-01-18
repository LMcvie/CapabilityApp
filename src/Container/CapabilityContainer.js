import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuPage from '../Screens/MenuPage.js';
import QuestionPage from '../Screens/QuestionPage.js';
import SummaryPage from '../Screens/SummaryPage.js';
import TopicsPage from '../Screens/TopicsPage.js';
import NotFoundPage from '../Screens/NotFoundPage.js';
import './CapabilityContainer.css';

const CapabilityContainer = () => {

    return (
        <div id = 'Container'>
            <Router>
                <Routes>
                    <Route index element={<MenuPage />} />
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
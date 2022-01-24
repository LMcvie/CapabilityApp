import { useNavigate } from "react-router-dom";
import './MenuPage.css';
import Credentials from '../Components/Credentials.js';


const MenuPage = ({ onUserSubmit }) => {
    const navigate = useNavigate();

    const handleStart = ( userDetails) => {
        onUserSubmit( userDetails);
        navigate("/Topics");
    }

    return (
        <div id='Menu'>
            <h1>Engineering Capability App</h1>
            <div id="About">
                <h3>About</h3>
                <p> Welcome to the internal engineering capability tool. This tool has been designed to assess a general skill level of both the colleague and the balance of skills within teams. Please enter your work email and answer the questions! </p>
            </div>
            <Credentials onUserSubmit={(userDetails) => handleStart(userDetails)} />
        </div>
    )

}

export default MenuPage;
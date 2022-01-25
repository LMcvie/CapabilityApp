import { useNavigate } from "react-router-dom";
import './SummaryPage.css';
import SpiderChart from '../Components/SpiderChart.js';


const SummaryPage = () => {
 
    const navigate = useNavigate();

    const handleClose =(event) => {
        navigate('/CapabilityApp');
    }

    return (
        <div id='summary'>
            <h2>Summary</h2>
            <div id="chart">
                <SpiderChart/>
            </div>
            <br></br>
            <div id = 'data'>
            <h3>Numerical Data</h3>
            <p>Insert Numerical Data Here</p>
            </div>
            <button onClick={handleClose}>Close Tool</button>
        </div>
    )

}

export default SummaryPage;
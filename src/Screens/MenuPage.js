import { useNavigate} from "react-router-dom";
import './MenuPage.css';


const MenuPage = () => {

    let navigate = useNavigate();
    
    const handleStart = (event) => {
        navigate('Topics');
    }

    return (
        <div id = 'Menu'>
        <h2>Menu</h2>
        <button onClick = {handleStart}>Start</button>
        </div>
    )

}

export default MenuPage;
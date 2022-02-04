import { useNavigate,  } from "react-router-dom";



const NotFoundPage = () => {
 
    const navigate = useNavigate();

    return (
        <div id='pageNotFound'>
          <h2>Page Not Found</h2>
          <button onClick={() => navigate('/CapabilityApp/')}>Go Back</button>
        </div>
    )

}

export default NotFoundPage;
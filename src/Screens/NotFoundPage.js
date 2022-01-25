import { useNavigate } from "react-router-dom";



const NotFoundPage = () => {
 
    const navigate = useNavigate();

    return (
        <div id='pageNotFound'>
          <h2>Page Not Found</h2>
        </div>
    )

}

export default NotFoundPage;
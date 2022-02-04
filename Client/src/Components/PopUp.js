import "./PopUp.css";

const PopUp = ({description}) => {

    //allows for styling of a popup box and description is passed into it
    return (
        <div className="popup-box" >
      <div className="box">
          <p>{description}</p>
      </div>
    </div>
    );
}


export default PopUp;
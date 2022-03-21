import "./PopUp.css";

const PopUp = ({description}) => {

    return (
        <div className="popup-box" >
      <div className="box">
          <p>{description}</p>
      </div>
    </div>
    );
}


export default PopUp;
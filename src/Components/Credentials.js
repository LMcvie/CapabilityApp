import React from "react";
import { useState } from "react";
import "./Credentials.css";

const Credentials = ({onUserSubmit}) => {

    const [userDetails, setUserDetails] = useState({
        Email: null,
        Password: null,
        Team: null,
        Discipline: null
    });

    const handleEmailChange = (event) => {
        let updatedDetails = userDetails;
        updatedDetails.Email = event.target.value;
        setUserDetails (updatedDetails);
       
    }
    const handlePasswordChange = (event) => {
        let updatedDetails = userDetails;
        updatedDetails.Password = event.target.value;
        setUserDetails (updatedDetails);
       
    }
    const handleTeamChange = (event) => {
        let updatedDetails = userDetails;
        updatedDetails.Team = event.target.value;
        setUserDetails (updatedDetails);
    }

    const handleDisciplineChange = (event) => {
        let updatedDetails = userDetails;
        updatedDetails.Discipline = event.target.value;
        setUserDetails (updatedDetails);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        onUserSubmit({userDetails});
    }


    return (
        <div>
            <form id ='userInfo' onSubmit={handleSubmit}>
                <div className = "formWrap">
                    <label htmlFor = "email"> Email Address (Work): </label>
                <input type='email' placeholder='Email' required onChange={handleEmailChange} />
                </div>

                <div className = "formWrap">
                <label htmlFor = "pwd"> Password: </label>
                <input type='password' name='pwd' placeholder='Password' required onChange={handlePasswordChange} />
                </div>

                <div className = "formWrap">
                <label htmlFor = "team"> Team: </label>
                {/* <input type='text' name='team' placeholder='team' required onChange={handleTeamChange} 
                /> */}
                <select defaultValue = {''}name='team'required onChange={handleTeamChange}>
                <option disabled value = '' required></option>
                <option value= 'Gannon'>Gannon</option>
                <option value= 'MineSweeper'>MineSweeper</option>
                <option value= 'Tetris'>Tetris</option>
                <option value= 'N/A'>N/A</option>
                </select>
                </div>
                <div className = "formWrap">
                <label htmlFor = "discipline"> Discipline: </label>
                <select defaultValue = {''}name='discipline' required onChange={handleDisciplineChange}>
                <option disabled value='' required></option>
                <option value= 'Software Engineer'>Software Engineer</option>
                <option value= 'Scrum Master'>Scrum Master</option>
                <option value= 'Product Owner'>Product Owner</option>
                <option value= 'Designer'>Designer</option>
                </select>
                </div>
                <div id = "start">
                <input type = "submit"  value = "Start"/>
                </div>
                </form>
        </div>
    );

}

export default Credentials;

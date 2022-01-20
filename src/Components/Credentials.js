import React from "react";
import { useState } from "react";
import "./Credentials.css";

const Credentials = ({onUserSubmit}) => {

    const [userDetails, setUserDetails] = useState({
        Email: null,
        Password: null,
        Team: null
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


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userDetails);

        onUserSubmit({userDetails});
    }


    return (
        <div>
            <form id ='UserInfo' onSubmit={handleSubmit}>
                <div className = "formWrap">
                    <label htmlFor = "email"> Email Address (Work): </label>
                <input type='email' placeholder='email...' required onChange={handleEmailChange} />
                </div>

                <div className = "formWrap">
                <label htmlFor = "pwd"> Password: </label>
                <input type='password' name='pwd' placeholder='password' required onChange={handlePasswordChange} />
                </div>

                <div className = "formWrap">
                <label htmlFor = "team"> Team: </label>
                <input type='team' name='team' placeholder='team' required onChange={handleTeamChange} />
                </div>
                <div id = "start">
                <input type = "submit"  value = "Start"/>
                </div>
                </form>
        </div>
    );

}

export default Credentials;

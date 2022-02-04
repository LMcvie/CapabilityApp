import React from "react";
import { useState } from "react";
import "./Credentials.css";

//sets the User's credentials


const Credentials = ({ onUserSubmit }) => {

    const [userDetails, setUserDetails] = useState({
        email: null,
        team: null,
        discipline: null
    });

    //Any changes in the input part of the form are stored in the state

    const handleEmailChange = (event) => {
        let updatedDetails = userDetails;
        updatedDetails.email = event.target.value;
        setUserDetails(updatedDetails);

    }


    const handleTeamChange = (event) => {
        let updatedDetails = userDetails;
        updatedDetails.team = event.target.value;
        setUserDetails(updatedDetails);
    }

    const handleDisciplineChange = (event) => {
        let updatedDetails = userDetails;
        updatedDetails.discipline = event.target.value;
        setUserDetails(updatedDetails);
    }

    // on submit send the user data back to the container to be stored
    const handleStart = (event) => {
        event.preventDefault();
        onUserSubmit({ userDetails });
    }


    return (
        <div>
            <form id='userInfo' onSubmit={handleStart}>
                <div className="formWrap">
                    <label htmlFor="email"> Email Address (Work): </label>
                    <input type='email' placeholder='Email' required onChange={handleEmailChange} />
                </div>

                <div className="formWrap">
                    <label htmlFor="team"> Team: </label>
                    <select defaultValue={''} name='team' required onChange={handleTeamChange}>
                        <option disabled value='' required></option>
                        <option value='Ganon'>Ganon</option>
                        <option value='Layton'>Layton</option>
                        <option value='Link'>Link</option>
                        <option value='Minesweeper'>MineSweeper</option>
                        <option value='NWoW'>NWoW</option>
                        <option value='Pikachu'>Pikachu</option>
                        <option value='Quatliy Engineering'>Quality Engineering</option>
                        <option value='S.H.I.E.L.D'>S.H.I.E.L.D</option>
                        <option value='Sonic'>Sonic</option>
                        <option value='Tetris'>Tetris</option>
                        <option value='Thunderbirds'>Thunderbirds</option>
                        <option value='Yoshi'>Yoshi</option>
                        <option value='N/A'>N/A</option>
                    </select>
                </div>

                <div className="formWrap">
                    <label htmlFor="discipline"> Discipline: </label>
                    <select defaultValue={''} name='discipline' required onChange={handleDisciplineChange}>
                        <option disabled value='' required></option>
                        <option value='Software Engineer'>Software Engineer</option>
                        <option value='Scrum Master'>Scrum Master</option>
                        <option value='Product Owner'>Product Owner</option>
                        <option value='Designer'>Designer</option>
                    </select>
                </div>

                <div id="start">
                    <input type="submit" value="Start" />
                </div>
            </form>
        </div>
    );

}

export default Credentials;

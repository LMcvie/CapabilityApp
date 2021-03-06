import { useState, useEffect } from "react";
import "./Credentials.css";
import { fetchData } from '../Helper/CapabilityService.js';
import { disciplinesGroups } from '../Helper/constants.js';

const Credentials = ({ onUserSubmit }) => {

    let teamSelect, disciplineSelect;

    const [teams, setTeams] = useState();
    const [disciplines, setDisciplines] = useState();

    useEffect(async () => {
        setTeams(await fetchData('teams'));
        setDisciplines(disciplinesGroups);
    }, []);

    const [userDetails, setUserDetails] = useState({});

    //Any changes in the input part of the form are stored in the state

    const handleEmailChange = (event) => {
        let updatedDetails = userDetails;
        updatedDetails._id = event.target.value;
        setUserDetails(updatedDetails);

    }


    const handleTeamChange = (event) => {
        let updatedDetails = userDetails;
        let tempTeam = teams.find(team => {
            return team.name === event.target.value;
        });
        updatedDetails.teamId = tempTeam._id;
        setUserDetails(updatedDetails);
    }

    const handleDisciplineChange = (event) => {
        let updatedDetails = userDetails;
        let tempDiscipline = disciplines.find(discipline => {
            return discipline.name === event.target.value;
        });
        updatedDetails.discipline = tempDiscipline.name;
        updatedDetails.disciplineId = tempDiscipline._id;
        setUserDetails(updatedDetails);
    }

    const handleStart = (event) => {
        event.preventDefault();
        onUserSubmit({ userDetails });
    }

    if (teams) {
        teamSelect = teams.map((team) => {
            return (
                <option value={team.name} key={team._id}>{team.name}</option>
            )
        });
    }


    if (disciplines) {
        disciplineSelect = disciplines.map((discipline) => {
            return (
                <option value={discipline.name} id={discipline._id} key={discipline._id}>{discipline.name}</option>
            )
        });
    }


    return (
        <div>
            <form id='userInfo' onSubmit={handleStart}>
                <div className="formWrap" id='email'>
                    <label htmlFor="email"> Email Address (Work): </label>
                    <input type='email'  placeholder='Email' required onChange={handleEmailChange} />
                </div>

                <div className="formWrap">
                    <label htmlFor="team"> Team: </label>
                    <select defaultValue={''} name='team' required onChange={handleTeamChange}>
                        <option disabled value='' required></option>
                        {teamSelect}
                    </select>
                </div>

                <div className="formWrap">
                    <label htmlFor="discipline"> Discipline: </label>
                    <select defaultValue={''} name='discipline' required onChange={handleDisciplineChange}>
                        <option disabled value='' required></option>
                        {disciplineSelect}
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

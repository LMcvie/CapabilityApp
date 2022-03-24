use capability;

db.questions.insertMany([
    {
        name: 'Incubate',
        _id: 'scrum-1',
        skillId:'ScrumRAIDMan',
        text: 'How confident are you with RAID Management?',
        description: 'Ability to apply tools and techniques to ensure appropriate tracking and management of RAIDs at team and cross team level',
        keyword: 'RAID Management',
    }, 
    {
        name: 'Develop',
        _id: 'scrum-2',
        skillId:'ScrumTechnical',
        text: 'How confident are you with Principles, Processes & Frameworks?',
        description: 'Ability apply knowledge and expertise of agile practices supported by relevant data points to drive the desired outcome within team and or across multiple teams within a Lab',
        keyword: 'Principles, Processes & Frameworks',
    }, 
    {
        name: 'Develop',
        _id: 'scrum-3',
        skillId:'ScrumCoaching',
        text: 'How confident are you with Coaching?',
        description: 'Ability to apply coaching techniques and practices to ensure the team have a shared understanding of objectives and are able to collaborate and deliver as effectively as possible',
        keyword: 'Coaching',
    }, 
    {
        name: 'Develop',
        _id: 'scrum-4',
        skillId:'ScrumFacilitation',
        text: 'How confident are you with Facilitation?',
        description: 'Ability to apply effective facilitation techniques and practices to deliver positive results  within a team and or across the Lab. Ability to guide the team to ensure collectively understanding and that there are adequate processes in place to align',
        keyword: 'Facilitation',
    }, 
    {
        name: 'Develop',
        _id: 'scrum-5',
        skillId:'ScrumBuildHighPerfTeams',
        text: 'How confident are you with Building High Performance Teams?',
        description: 'Ability to shape relevant initiatives using TP&P in order to enhance the maturity of a team and or the Lab',
        keyword: 'Building High Performance Teams',
    }, 
    {
        name: 'Develop',
        _id: 'scrum-6',
        skillId:'ScrumMetricDefAnalysis',
        text: 'How confident are you with Metric Definition & Analysis?',
        description: 'Ability to understand the context, dynamics and maturity of a team and to effectively identify and translate relevant metrics to drive a continuous improvement mindset ',
        keyword: 'Metric Definition & Analysis',
    }, 
    {
        name: 'Develop',
        _id: 'scrum-7',
        skillId:'ScrumCommunication',
        text: 'How confident are you with Communication?',
        description: 'Ability to apply effective communication techniques to clarify work items and ensure alignment across the team and or across the Lab',
        keyword: 'Communication',
    }, 
    {
        name: 'Develop',
        _id: 'scrum-8',
        skillId:'ScrumJira',
        text: 'How confident are you with Jira?',
        description: 'Ability to set up and apply the Jira functionality to manage team projects',
        keyword: 'Jira',
    }, 
    

]);


db.skills.insertMany([
    {
        name: 'RAID Management',
        _id: 'ScrumRAIDMan',
        disciplineId:'Scrum',
        optimusId: 'Incubate',
    },
    {
        name: 'Principles, Processes & Frameworks',
        _id: 'ScrumTechnical',
        disciplineId:'Scrum',
        optimusId: 'Develop',
    },
    {
        name: 'Coaching',
        _id: 'ScrumCoaching',
        disciplineId:'Scrum',
        optimusId: 'Develop',
    },
    {
        name: 'Facilitation',
        _id: 'ScrumFacilitation',
        disciplineId:'Scrum',
        optimusId: 'Develop',
    },
    {
        name: 'Building High Performance Teams',
        _id: 'ScrumBuildHighPerfTeams',
        disciplineId:'Scrum',
        optimusId: 'Develop',
    },
    {
        name: 'Metric Definition & Analysis',
        _id: 'ScrumMetricDefAnalysis',
        disciplineId:'Scrum',
        optimusId: 'Develop',
    },
    {
        name: 'Communication',
        _id: 'ScrumCommunication',
        disciplineId:'Scrum',
        optimusId: 'Develop',
    },
    {
        name: 'Jira',
        _id: 'ScrumJira',
        disciplineId:'Scrum',
        optimusId: 'Develop',
    },

]);



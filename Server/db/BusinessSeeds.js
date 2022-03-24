use capability;


db.questions.insertMany([
    {
        name: 'Understand',
        _id: 'BA-1',
        skillId:'BaProcessModelling',
        text: 'How confident are you with ProcessModelling?',
        description: 'Ability to understand the user, challenge assumptions, and redefine problems in an attempt to identify alternative strategies and solutions that might not be instantly apparent',
        keyword: 'ProcessModelling',
    },
    
    {
        name: 'Understand',
        _id: 'BA-2',
        skillId:'BaProcessImprovement',
        text: 'How confident are you with Process Improvement?',
        description: 'Ability to apply appropriate practices, data and tools to identify opportunities to improve processes or workflows',
        keyword: 'Process Improvement',
    }, 

    {
        name: 'Understand',
        _id: 'BA-3',
        skillId:'BaProcessDesign',
        text: 'How confident are you with Process Design?',
        description: 'Ability to design processes and workflows from scratch within the respective domain you are operating in',
        keyword: 'Process Design',
    }, 

    {
        name: 'Understand',
        _id: 'BA-4',
        skillId:'BaRequirementsAnalysis',
        text: 'How confident are you with Requirements Analysis?',
        description: 'Ability to define, articulate and align on user expectations for a new or modified product',
        keyword: 'Requirements Analysis',
    }, 

    {
        name: 'Understand',
        _id: 'BA-5',
        skillId:'BaOrgAwareness',
        text: 'How confident are you with Organisational Awareness?',
        description: 'Ability to apply knowledge of the I&W business architecture to ensure the As-Is and To-Be is accurate and reflective',
        keyword: 'Organisational Awareness',
    }, 

    {
        name: 'Incubate',
        _id: 'BA-6',
        skillId:'BaBacklogDef',
        text: 'How confident are you with Backlog Definition?',
        description: 'Ability to apply agile practises and techniques to translate the roadmap into a prioritised list of work within Jira',
        keyword: 'Backlog Definition',
    }, 

    {
        name: 'Incubate',
        _id: 'BA-7',
        skillId:'BaDependencyMapping',
        text: 'How confident are you with ProcessModelling?',
        description: 'Ability to apply contextual knowledge of the solution to identify where there are interdependencies across team and across Lab',
        keyword: 'Dependency Mapping',
    }, 

    {
        name: 'Incubate',
        _id: 'BA-8',
        skillId:'BaRiskManagement',
        text: 'How confident are you with Risk Management?',
        description: 'Ability to apply tools and techniques to manage business analysis risks ',
        keyword: 'Risk Management',
    }, 

    {
        name: 'Incubate',
        _id: 'BA-9',
        skillId:'BaIssueMan',
        text: 'How confident are you with Issue Management?',
        description: 'Ability to determine when a task / work item becomes an issue and to effectively manage and triage to resolution following our guidelines',
        keyword: 'Issue Management',
    }, 

    {
        name: 'Incubate',
        _id: 'BA-10',
        skillId:'BaDependencyMan',
        text: 'How confident are you with Dependency Management?',
        description: 'Ability to understand the user, challenge assumptions, and redefine problems in an attempt to identify alternative strategies and solutions that might not be instantly apparent',
        keyword: 'Dependency Management',
    }, 

    {
        name: 'Develop',
        _id: 'BA-11',
        skillId:'BaStory&RequirementDef',
        text: 'How confident are you with Story & Requirement Definition?',
        description: 'Ability to articulate user stories within Jira applying best practices ',
        keyword: 'Story & Requirement Definition',
    }, 

    {
        name: 'Develop',
        _id: 'BA-12',
        skillId:'BaJira',
        text: 'How confident are you with Jira?',
        description: 'Ability to set up and apply the Jira functionality to manage the team backlog',
        keyword: 'Jira',
    }, 

    {
        name: 'Develop',
        _id: 'BA-13',
        skillId:'BaDataModelling',
        text: 'How confident are you with Data Modelling?',
        description: 'Ability to determine what data is required to be capture and to logically organise that data to produce meaningful information.',
        keyword: 'Data Modelling',
    }, 

    {
        name: 'Develop',
        _id: 'BA-14',
        skillId:'BaTestData',
        text: 'How confident are you with Test Data?',
        description: 'Ability to define what necessary test data is required across the various stages of the RTL',
        keyword: 'Test Data',
    }, 

    {
        name: 'Develop',
        _id: 'BA-15',
        skillId:'BaAPIDesign',
        text: 'How confident are you with API Design?',
        description: 'Ability to develop and proactively drive the implementation of tools, templates and processes for mapping APIs and API reuse',
        keyword: 'API Design',
    }, 
]);

db.skills.insertMany([
    {
        name: 'ProcessModelling',
        _id: 'BaProcessModelling',
        disciplineId:'BA',
        optimusId: 'Understand',
    },
    {
        name: 'Process Improvement',
        _id: 'BaProcessImprovement',
        disciplineId:'BA',
        optimusId: 'Understand',
    },
    {
        name: 'Process Design',
        _id: 'BaProcessDesign',
        disciplineId:'BA',
        optimusId: 'Understand',
    },
    
    {
        name: 'Requirements Analysis',
        _id: 'BaRequirementsAnalysis',
        disciplineId:'BA',
        optimusId: 'Understand',
    },
    {
        name: 'Organisational Awareness',
        _id: 'BaOrgAwareness',
        disciplineId:'BA',
        optimusId: 'Understand',
    },
    {
        name: 'Backlog Definition',
        _id: 'BaBacklogDef',
        disciplineId:'BA',
        optimusId: 'Incubate',
    },
    {
        name: 'Dependency Mapping',
        _id: 'BaDependencyMapping',
        disciplineId:'BA',
        optimusId: 'Incubate',
    },
    {
        name: 'Risk Management',
        _id: 'BaRiskManagement',
        disciplineId:'BA',
        optimusId: 'Incubate',
    },
    {
        name: 'Issue Management',
        _id: 'BaIssueMan',
        disciplineId:'BA',
        optimusId: 'Incubate',
    },
    {
        name: 'Dependency Management',
        _id: 'BaDependencyMan',
        disciplineId:'BA',
        optimusId: 'Incubate',
    },
    {
        name: 'Story & Requirement Definition',
        _id: 'BaStory&RequirementDef',
        disciplineId:'BA',
        optimusId: 'Develop',
    },
    {
        name: 'Jira',
        _id: 'BaJira',
        disciplineId:'BA',
        optimusId: 'Develop',
    },
    {
        name: 'Data Modelling',
        _id: 'BaDataModelling',
        disciplineId:'BA',
        optimusId: 'Develop',
    },
    {
        name: 'Test Data',
        _id: 'BaTestData',
        disciplineId:'BA',
        optimusId: 'Develop',
    },
    {
        name: 'API Design',
        _id: 'BaAPIDesign',
        disciplineId:'BA',
        optimusId: 'Develop',
    },
]);
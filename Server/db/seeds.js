use capability;

db.dropDatabase();

db.questions.insertMany([
    {
        name: 'Understand',
        _id: 'question-1',
        skillId:'StratPlan',
        text: 'How confident are you with Strategic Planning?',
        description: 'Researching, creating and agreeing a vision to align actions, plans and people from an engineering perspective with I&W strategy & objectives',
        keyword: 'Strategic Planning',
    },
    {
        name: 'Understand',
        _id: 'question-2',
        skillId:'EnterpriseArch',
        text: 'How confident are you with Enterprise Architecture?',
        description: 'Aligning I&W and the Labs technology strategy with our roadmap and documenting this using architectural models.',
        keyword: 'Enterprise Architecture',
    },
    {
        name: 'Understand',
        _id: 'question-3',
        skillId:'EmergingTech',
        text: 'How confident are you with Emerging Technology Monitoring?',
        description: 'Identifying and assessing new and emerging technologies, products, services, methods and techniques.',
        keyword: 'Emerging Technology Monitoring',
    },
    {
        name: 'Incubate',
        _id: 'question-4',
        skillId:'JS',
        text: 'How confident are you with JavaScript',
        description: 'Scripting language enabling dynamic updating content',
        keyword: 'JavaScript'
    },
    {
        name: 'Incubate',
        _id: 'question-5',
        skillId:'SolutionArch',
        text: 'How confident are you with Solution Architecture',
        description: '',
        keyword: 'Solution Architecture'
    },
    {
        name: 'Incubate',
        _id: 'question-6',
        skillId:'RiskMan',
        text: 'How confident are you with Risk Management',
        description: '',
        keyword: 'Risk Management'
    },
    {
        name: 'Develop',
        _id: 'question-7',
        skillId:'Prioritise',
        text: 'How confident are you with Prioritisation',
        description: '',
        keyword: 'Prioritisation',
    },
    {
        name: 'Develop',
        _id: 'question-8',
        skillId:'ReactTesting',
        text: 'How confident are you with React Testing Library',
        description: '',
        keyword: 'React Testing Library'
    },
    {
        name: 'Develop',
        _id: 'question-9',
        skillId:'StyleComponents',
        text: 'How confident are you with Styled Components',
        description: '',
        keyword: 'Styled Components'
    },
    {
        name: 'Deploy',
        _id: 'question-10',
        skillId:'Deploy',
        text: 'How confident are you with Deploy',
        description: '',
        keyword: 'Deploy'
    },
    {
        name: 'Deploy',
        _id: 'question-11',
        skillId:'Deploy',
        text: 'How confident are you with Deploy',
        description: '',
        keyword: 'Deploy2'
    },
    {
        name: 'Deploy',
        _id: 'question-12',
        skillId:'Deploy',
        text: 'How confident are you with Deploy',
        description: '',
        keyword: 'Deploy3'
    },
    {
        name: 'General',
        _id: 'question-13',
        skillId:'Comms',
        text: 'How confident are you with Communicating to Stakeholders',
        description: '',
        keyword: 'Communication'
    },
    {
        name: 'General',
        _id: 'question-14',
        skillId:'test',
        text: 'How confident are you with Communicating to Stakeholders',
        description: '',
        keyword: 'Communication2'
    },
    {
        name: 'General',
        _id: 'question-15',
        skillId:'test',
        text: 'How confident are you with Communicating to Stakeholders',
        description: '',
        keyword: 'Communication3'
    },

]);

db.skills.insertMany([
        {
            name: 'Strategic Planning',
            _id: 'StratPlan',
            disciplineId:'SDev',
            optimusId: 'Understand',
        },
        {
            name: 'Enterprise Architecture',
            _id: 'EnterpriseArch',
            disciplineId:'SDev',
            optimusId: 'Understand',
        },
        {
            name: 'Emerging Technology Monitoring',
            _id: 'EmergingTech',
            disciplineId:'SDev',
            optimusId: 'Understand',
        },
        {
            name: 'JavaScript',
            _id: 'JS',
            disciplineId: 'SDev',
            optimusId: 'Incubate',
        },
        {
            name: 'Solution Architecture',
            _id: 'SolutionArch',
            disciplineId: 'SDev',
            optimusId: 'Incubate',
        },
        {
            name: 'Risk Management',
            _id: 'RiskMan',
            disciplineId: 'SDev',
            optimusId: 'Incubate',
        },
        {
            name: 'Prioritisation',
            _id: 'Prioritise',
            disciplineId: 'SDev',
            optimusId: 'Develop',
        },
        {
            name: 'React Testing Library',
            _id: 'ReactTesting',
            disciplineId: 'SDev',
            optimusId: 'Develop',
        },
        {
            name: 'Stylised Components',
            _id: 'StyleComponents',
            disciplineId: 'SDev',
            optimusId: 'Develop',
        },
        {
            name: 'Deploy',
            _id: 'Deploy',
            disciplineId: 'SDev',
            optimusId: 'Deploy',
        },
        {
            name: 'Deploy',
            _id: 'tester3',
            disciplineId: 'SDev',
            optimusId: 'Deploy',
        },
        {
            name: 'Deploy',
            _id: 'tester2',
            disciplineId: 'SDev',
            optimusId: 'Deploy',
        },
        {
            name: 'Technology',
            _id: 'Tech',
            disciplineId: 'SDev',
            optimusId: 'General',
        },
        {
            name: 'Communication',
            _id: 'Comms',
            disciplineId: 'SDev',
            optimusId: 'General',
        },
        {
            name: 'test',
            _id: 'test',
            disciplineId: 'SDev',
            optimusId: 'General',
        },
])


db.teams.insertMany([
    {
        _id: 'Ganon',
        name: 'Ganon',
    },
    {
        _id: 'Layton',
        name: 'Layton',
    },
    {
        _id: 'Link',
        name: 'Link',
    },
    {
        _id: 'MineSweep',
        name: 'Minesweeper',
    },
    {
        _id: 'NWoW',
        name: 'NWoW',
    },
    {
        _id: 'Pikachu',
        name: 'Pikachu',
    },
    {
        _id: 'QE',
        name: 'Quality Engineering',
    },
    {
        _id: 'Shield',
        name: 'S.H.I.E.L.D',
    },
    {
        _id: 'Sonic',
        name: 'Sonic',
    },
    {
        _id: 'Tetris',
        name: 'Tetris',
    },
    {
        _id: 'Thunderbirds',
        name: 'Thunderbirds',
    },
    {
        _id: 'Yoshi',
        name: 'Yoshi',
    },
    {
        _id: 'Starfox',
        name: 'Starfox',
    },
    {
        _id: 'N/A',
        name: 'N/A',
    },

]);

db.users.insertMany([
    {
        _id: 'test@mail.com',
        disciplineId: 'SDev',
        teamId: 'Ganon',
    },
]);

db.answers.insertMany([
    {
        questionId: 'Strategic Planning',
        userId: 'test@mail.com',
        value: '100',
    },
])
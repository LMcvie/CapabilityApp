use capability;

db.dropDatabase();

db.questions.insertMany([
    {
        name: 'Understand',
        _id: 'question-1',
        text: 'How confident are you with Strategic Planning?',
        description: 'Researching, creating and agreeing a vision to align actions, plans and people from an engineering perspective with I&W strategy & objectives',
        keyword: 'Strategic Planning'
    },
    {
        name: 'Understand',
        _id: 'question-2',
        text: 'How confident are you with Enterprise Architecture?',
        description: 'Aligning I&W and the Labs technology strategy with our roadmap and documenting this using architectural models.',
        keyword: 'Enterprise Architecture'
    },
    {
        name: 'Understand',
        _id: 'question-3',
        text: 'How confident are you with Emerging Technology Monitoring?',
        description: 'Identifying and assessing new and emerging technologies, products, services, methods and techniques.',
        keyword: 'Emerging Technology Monitoring'
    },
    {
        name: 'Incubate',
        _id: 'question-4',
        text: 'How confident are you with JavaScript',
        description: 'Scripting language enabling dynamic updating content',
        keyword: 'JavaScript'
    },
    {
        name: 'Incubate',
        _id: 'question-5',
        text: 'How confident are you with Solution Architecture',
        description: '',
        keyword: 'Solution Architecture'
    },
    {
        name: 'Incubate',
        _id: 'question-6',
        text: 'How confident are you with Risk Management',
        description: '',
        keyword: 'Risk Management'
    },
    {
        name: 'Develop',
        _id: 'question-7',
        text: 'How confident are you with Prioritisation',
        description: '',
        keyword: 'Prioritisation'
    },
    {
        name: 'Develop',
        _id: 'question-8',
        text: 'How confident are you with React Testing Library',
        description: '',
        keyword: 'React Testing Library'
    },
    {
        name: 'Develop',
        _id: 'question-9',
        text: 'How confident are you with Styled Components',
        description: '',
        keyword: 'Styled Components'
    },
    {
        name: 'Deploy',
        _id: 'question-10',
        text: 'How confident are you with Deploy',
        description: '',
        keyword: 'Deploy'
    },
    {
        name: 'Deploy',
        _id: 'question-11',
        text: 'How confident are you with Deploy',
        description: '',
        keyword: 'Deploy2'
    },
    {
        name: 'Deploy',
        _id: 'question-12',
        text: 'How confident are you with Deploy',
        description: '',
        keyword: 'Deploy3'
    },
    {
        name: 'General',
        _id: 'question-13',
        text: 'How confident are you with Communicating to Stakeholders',
        description: '',
        keyword: 'Communication'
    },
    {
        name: 'General',
        _id: 'question-14',
        text: 'How confident are you with Communicating to Stakeholders',
        description: '',
        keyword: 'Communication2'
    },
    {
        name: 'General',
        _id: 'question-15',
        text: 'How confident are you with Communicating to Stakeholders',
        description: '',
        keyword: 'Communication3'
    },

]);

db.topics.insertMany([
    { name: 'Understand', _id: 'topic-1', completed: 'notCompleted' },
    { name: 'Incubate', _id: 'topic-2', completed: 'notCompleted' },
    { name: 'Develop', _id: 'topic-3', completed: 'notCompleted' },
    { name: 'Deploy', _id: 'topic-4', completed: 'notCompleted' },
    { name: 'General', _id: 'topic-5', completed: 'notCompleted' },
]);

db.skills.insertMany([
        {
            name: 'Strategic Planning',
            _id: 'skill-1',
            discplineId: 'discipline-5',
            optimusId: 'Understand',
        },
        {
            name: 'Enterprise Architecture',
            _id: 'skill-2',
            disciplineId: 'discipline-5',
            optimusId: 'Understand',
        },
        {
            name: 'Emerging Technology Monitoring',
            _id: 'skill-3',
            disciplineId: 'discipline-5',
            optimusId: 'Understand',
        },
        {
            name: 'JavaScript',
            _id: 'skill-4',
            disciplineId: 'discipline-5',
            optimusId: 'Incubate',
        },
        {
            name: 'Solution Architecture',
            _id: 'skill-5',
            disciplineId: 'discipline-5',
            optimusId: 'Incubate',
        },
        {
            name: 'Risk Management',
            _id: 'skill-6',
            disciplineId: 'discipline-5',
            optimusId: 'Incubate',
        },
        {
            name: 'Prioritisation',
            _id: 'skill-7',
            disciplineId: 'discipline-5',
            optimusId: 'Develop',
        },
        {
            name: 'React Testing Library',
            _id: 'skill-8',
            disciplineId: 'discipline-5',
            optimusId: 'Develop',
        },
        {
            name: 'Stylised Components',
            _id: 'skill-9',
            disciplineId: 'discipline-5',
            optimusId: 'Develop',
        },
        {
            name: 'Deploy',
            _id: 'skill-10',
            disciplineId: 'discipline-5',
            optimusId: 'Deploy',
        },
        {
            name: 'Deploy',
            _id: 'skill-11',
            disciplineId: 'discipline-5',
            optimusId: 'Deploy',
        },
        {
            name: 'Deploy',
            _id: 'skill-12',
            disciplineId: 'discipline-5',
            optimusId: 'Deploy',
        },
        {
            name: 'Emerging Technology Monitoring',
            _id: 'skill-13',
            disciplineId: 'discipline-5',
            optimusId: 'General',
        },
        {
            name: 'Communication',
            _id: 'skill-14',
            disciplineId: 'discipline-5',
            optimusId: 'General',
        },
        {
            name: 'Communication',
            _id: 'skill-15',
            disciplineId: 'discipline-5',
            optimusId: 'General',
        },
])


db.teams.insertMany([
    {
        _id: 'team-1',
        name: 'Ganon',
    },
    {
        _id: 'team-2',
        name: 'Layton',
    },
    {
        _id: 'team-3',
        name: 'Link',
    },
    {
        _id: 'team-4',
        name: 'Minesweeper',
    },
    {
        _id: 'team-5',
        name: 'NWoW',
    },
    {
        _id: 'team-6',
        name: 'Pikachu',
    },
    {
        _id: 'team-7',
        name: 'Quality Engineering',
    },
    {
        _id: 'team-8',
        name: 'S.H.I.E.L.D',
    },
    {
        _id: 'team-9',
        name: 'Sonic',
    },
    {
        _id: 'team-10',
        name: 'Tetris',
    },
    {
        _id: 'team-11',
        name: 'Thunderbirds',
    },
    {
        _id: 'team-12',
        name: 'Yoshi',
    },
    {
        _id: 'team-13',
        name: 'Starfox',
    },
    {
        _id: 'team-14',
        name: 'N/A',
    },

]);

db.disciplines.insertMany([
    {
        name: 'Business Analyst',
        _id: 'discipline-1',
    },
    {
        name: 'Designer',
        _id: 'dicsipline-2'
    },
    {
        name: 'Product Owner',
        _id: 'dicsipline-3'
    },
    {
        name: 'Scrum Master',
        _id: 'dicsipline-4'
    },
    {
        name: 'Software Developer',
        _id: 'dicsipline-5'
    },
]);


db.users.insertMany([
    {
        _id: 'test@mail.com',
        disciplineId: 'discipline-5',
        teamId: 'team-1',
    },
]);

db.answers.insertMany([
    {
        questionId: 'Strategic Planning',
        userId: 'test@mail.com',
        value: '100',
    },
])
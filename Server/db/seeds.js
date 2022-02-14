use capability;

db.dropDatabase();

db.questions.insertMany([
    {
        name: 'Understand',
        value: '0',
        text: 'How confident are you with Strategic Planning?',
        description: 'Researching, creating and agreeing a vision to align actions, plans and people from an engineering perspective with I&W strategy & objectives',
        keyword: 'Strategic Planning'
    },
    {
        name: 'Understand',
        value: '0',
        text: 'How confident are you with Enterprise Architecture?',
        description: 'Aligning I&W and the Labs technology strategy with our roadmap and documenting this using architectural models.',
        keyword: 'Enterprise Architecture'
    },
    {
        name: 'Understand',
        value: '0',
        text: 'How confident are you with Emerging Technology Monitoring?',
        description: 'Identifying and assessing new and emerging technologies, products, services, methods and techniques.',
        keyword: 'Emerging Technology Monitoring'
    },
    {
        name: 'Incubate',
        value: '0',
        text: 'How confident are you with JavaScript',
        description: 'Scripting language enabling dynamic updating content',
        keyword: 'JavaScript'
    },
    {
        name: 'Incubate',
        value: '0',
        text: 'How confident are you with Solution Architecture',
        description: '',
        keyword: 'Solution Architecture'
    },
    {
        name: 'Incubate',
        value: '0',
        text: 'How confident are you with Risk Management',
        description: '',
        keyword: 'Risk Management'
    },
    {
        name: 'Develop',
        value: '0',
        text: 'How confident are you with Prioritisation',
        description: '',
        keyword: 'Prioritisation'
    },
    {
        name: 'Develop',
        value: '0',
        text: 'How confident are you with React Testing Library',
        description: '',
        keyword: 'React Testing Library'
    },
    {
        name: 'Develop',
        value: '0',
        text: 'How confident are you with Styled Components',
        description: '',
        keyword: 'Styled Components'
    },
    {
        name: 'Deploy',
        value: '0',
        text: 'How confident are you with Deploy',
        description: '',
        keyword: 'Deploy'
    },
    {
        name: 'Deploy',
        value: '0',
        text: 'How confident are you with Deploy',
        description: '',
        keyword: 'Deploy2'
    },
    {
        name: 'Deploy',
        value: '0',
        text: 'How confident are you with Deploy',
        description: '',
        keyword: 'Deploy3'
    },
    {
        name: 'General',
        value: '0',
        text: 'How confident are you with Communicating to Stakeholders',
        description: '',
        keyword: 'Communication'
    },
    {
        name: 'General',
        value: '0',
        text: 'How confident are you with Communicating to Stakeholders',
        description: '',
        keyword: 'Communication2'
    },
    {
        name: 'General',
        value: '0',
        text: 'How confident are you with Communicating to Stakeholders',
        description: '',
        keyword: 'Communication3'
    },
  
  ]);

  db.teams.insertMany([
    {
        _id: 'team-1',
        name: 'Ganon',
    },
    {
        _id:'team-2',
        name: 'Layton',
    },
    {
        _id:'team-3',
        name: 'Link',
    },
    {
        _id:'team-4',
        name: 'Minesweeper',
    },
    {
        _id:'team-5',
        name: 'NWoW',
    },
    {
        _id:'team-6',
        name: 'Pikachu',
    },
    {
        _id:'team-7',
        name: 'Quality Engineering',
    },
    {
        _id:'team-8',
        name: 'S.H.I.E.L.D',
    },
    {
        _id:'team-9',
        name: 'Sonic',
    },
    {
        _id:'team-10',
        name: 'Tetris',
    },
    {
        _id:'team-11',
        name: 'Thunderbirds',
    },
    {
        _id:'team-12',
        name: 'Yoshi',
    },
    {
        _id:'team-13',
        name: 'Starfox',
    },
    {
        _id:'team-14',
        name: 'N/A',
    },
    
]);


const user = {
   _id: 'test@mail.com',
    disciplineId: 'discipline-1',
    teamId:'team-1',
}
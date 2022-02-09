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

  db.topics.insertMany([
    { name: 'Understand', completed: 'notCompleted' },
    { name: 'Incubate', completed: 'notCompleted' },
    { name: 'Develop', completed: 'notCompleted' },
    { name: 'Deploy', completed: 'notCompleted' },
    { name: 'General', completed: 'notCompleted' },
  ]);

  
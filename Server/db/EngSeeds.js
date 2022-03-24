use capability;



db.questions.insertMany([
{
    name: 'Understand',
    _id: 'eng-1',
    skillId:'EngStratPlan',
    text: 'How confident are you with Strategic Planning?',
    description: 'Researching, creating and bringing people and teams together on an aspirational vision to aligned to both I&Ws and the Group strategy & objectives',
    keyword: 'Strategic Planning',
}, 
{
    name: 'Understand',
    _id: 'eng-2',
    skillId:'EngEnterpriseArch',
    text: 'How confident are you with Enterprise Architecture?',
    description: 'Ability to understand and translate the Group and I&Ws target strategy and architecture to the Labs roadmap. Ability to define the target solution that is in alignment with our target architecture principles and practices',
    keyword: 'Enterprise Architecture',
},
{
    name: 'Understand',
    _id: 'eng-3',
    skillId:'EngEmergingTech',
    text: 'How confident are you with Emerging Technology Monitoring?',
    description: 'Ability to identify and assess new and emerging technologies, products and services in the context of accelerating the realisation of our vision and roadmap',
    keyword: 'Emerging Technology Monitoring',
},

{
    name: 'Understand',
    _id: 'eng-4',
    skillId:'EngCommSense',
    text: 'How confident are you with Commercial Sensibility?',
    description: 'Ability to apply the knowledge of the commercial drivers within I&W in order to track and manage the Lab costs appropriately',
    keyword: 'Commercial Sensibility',
},
{
    name: 'Understand',
    _id: 'eng-5',
    skillId:'EngCostBenAnalysis',
    text: 'How confident are you with Cost Benefit Analysis?',
    description: 'Ability to represent the cost to deliver change vs the anticipated benefit as a way to inform and prioritise what to do and in what order',
    keyword: 'Cost Benefit Analysis',
},
{
    name: 'Understand',
    _id: 'eng-6',
    skillId:'EngBudgetingPlanning',
    text: 'How confident are you with Budgeting & Planning?',
    description: 'Ability to effectively determine the budgetary requirements for the Lab based on the committed roadmap',
    keyword: 'Budgeting & Planning',
},
{
    name: 'Incubate',
    _id: 'eng-7',
    skillId:'EngOKRDef',
    text: 'How confident are you with OKR Definition?',
    description: 'Ability to apply the OKR framework to create alignment and engagement around measurable goals',
    keyword: 'OKR Definition',
},
{
    name: 'Incubate',
    _id: 'eng-8',
    skillId:'EngEnterpriseArch2',
    text: 'How confident are you with Enterprise Architecture?',
    description: 'Ability to apply the understanding of the I&W architecture (current and target) to define and articulate the engineering initiatives/epics required to deliver the roadmap. Ability to define the to-be design whilst ensuring alignment with and adherence to the Value Stream EA principles and practices',
    keyword: 'Enterprise Architecture',
},
{
    name: 'Incubate',
    _id: 'eng-9',
    skillId:'EngStorytelling',
    text: 'How confident are you with Storytelling?',
    description: 'Ability to articulate to stakeholders both within and outside of the Lab as to what the Lab objectives and outcomes are, how we are planning to achieve them and progress we are making against those',
    keyword: 'Storytelling',
},
{
    name: 'Incubate',
    _id: 'eng-10',
    skillId:'EngCustJourneyFW',
    text: 'How confident are you with the Customer Journey Framework?',
    description: 'Ability to apply the Customer Journey Framework (GT specific) principles to shape, understand and manage our customer journeys',
    keyword: 'Customer Journey Framework',
},
{
    name: 'Incubate',
    _id: 'eng-11',
    skillId:'EngSolutionArch',
    text: 'How confident are you with Solution Architecture?',
    description: 'Ability to define the technical solution and functional requirements to the specific customer / colleague needs identified ',
    keyword: 'Solution Architecture',
},
{
    name: 'Incubate',
    _id: 'eng-12',
    skillId:'EngSolutionDesign',
    text: 'How confident are you with Solution Design?',
    description: 'Ability to define, document and articulate the end to end design for a software solution',
    keyword: 'Solution Design',
},
{
    name: 'Incubate',
    _id: 'eng-13',
    skillId:'EngFeasibileAssess',
    text: 'How confident are you with Feasibility Assessment?',
    description: 'Ability to define, evaluate and describe the options available against a set of relevant criteria to deliver the desired outcome',
    keyword: 'Feasibility Assessment',
},
{
    name: 'Incubate',
    _id: 'eng-14',
    skillId:'EngSecSolutionDesign',
    text: 'How confident are you with Security Solution Design?',
    description: 'Ability to define, document and articulate the end to end design for a security solution which is compliant with the Enterprise Architecture Security Standards and Patterns',
    keyword: 'Security Solution Design',
},
{
    name: 'Incubate',
    _id: 'eng-15',
    skillId:'EngRequireAnalysis',
    text: 'How confident are you with Requirements Analysis?',
    description: 'Ability to elicit how the proposed solution is compliant with the Enterprise Architecture Security Standards and Patterns',
    keyword: 'Requirements Analysis',
},
{
    name: 'Incubate',
    _id: 'eng-16',
    skillId:'EngAppSecurity',
    text: 'How confident are you with Application Security?',
    description: 'Ability to articulate the security features that need to be tested within an application to prevent security vulnerabilities in adherence with our standards',
    keyword: 'Application Security',
},
{
    name: 'Incubate',
    _id: 'eng-17',
    skillId:'EngSecOps',
    text: 'How confident are you with Security Operations?',
    description: 'Ability to define and articulate the methods and practises required to be followed based on the security design',
    keyword: 'Security Operations',
},
{
    name: 'Incubate',
    _id: 'eng-18',
    skillId:'EngTestStratDev',
    text: 'How confident are you with Test Strategy Development?',
    description: 'Ability to define and articulate the testing guidelines and approaches as to how to test the target application(s) in line with group standards and practices',
    keyword: 'Test Strategy Development',
},
{
    name: 'Incubate',
    _id: 'eng-19',
    skillId:'EngAutoTestFrameworks',
    text: 'How confident are you with Automated Testing Frameworks?',
    description: 'Ability to apply understanding of automated testing frameworks to shape and articulate what is most appropriate based on the initiative',
    keyword: 'Automated Testing Frameworks',
},
{
    name: 'Incubate',
    _id: 'eng-20',
    skillId:'EngInfoAssurance',
    text: 'How confident are you with Information Assurance?',
    description: 'Ability to define, articulate and apply appropriate methods and practices to protect against and manage the risks related to the use, storage and transmission of all  sensitive data',
    keyword: 'Information Assurance',
},
{
    name: 'Incubate',
    _id: 'eng-21',
    skillId:'EngRiskMan',
    text: 'How confident are you with Risk Management?',
    description: 'Ability to apply tools and techniques to manage engineering risks',
    keyword: 'Risk Management',
},

{
    name: 'Incubate',
    _id: 'eng-22',
    skillId:'EngIssueMan',
    text: 'How confident are you with Issue Management?',
    description: 'Ability to determine when a task / work item becomes an issue and to effectively manage and triage to resolution following our guidelines',
    keyword: 'Issue Management',
},

{
    name: 'Incubate',
    _id: 'eng-23',
    skillId:'EngDependencyMan',
    text: 'How confident are you with Dependency Management?',
    description: 'Ability to identify, articulate and manage dependencies from an engineering perspective at a cross team and cross lab level',
    keyword: 'Dependency Management',
},
{
    name: 'Incubate',
    _id: 'eng-24',
    skillId:'EngFinancialMan',
    text: 'How confident are you with Financial Management?',
    description: 'Ability to define, track and manage the capex and opex costs of the Lab',
    keyword: 'Financial Management',
},
{
    name: 'Develop',
    _id: 'eng-25',
    skillId:'EngPrioritisation',
    text: 'How confident are you with Cost and Prioritisation?',
    description: 'Ability to assess the value and effort of a given task to ensure alignment of priorities to that of the backlog',
    keyword: 'Prioritisation',
},
{
    name: 'Develop',
    _id: 'eng-26',
    skillId:'EngStorytelling2',
    text: 'How confident are you with Storytelling?',
    description: 'Ability to articulate the what and the value of engineering initiatives or tasks',
    keyword: 'Storytelling',
},
{
    name: 'Develop',
    _id: 'eng-27',
    skillId:'EngCodingPractices',
    text: 'How confident are you with Coding Practices?',
    description: 'Ability to apply knowledge and understanding of relevant coding practices to create cleaner, more readable and more efficient code with minimal errors',
    keyword: 'Coding Practices',
},
{
    name: 'Develop',
    _id: 'eng-28',
    skillId:'EngSoftDesign',
    text: 'How confident are you with Software Design?',
    description: 'Ability to specify and design software to meet defined requirements by following agreed design standards and principles',
    keyword: 'Software Design',
},
{
    name: 'Develop',
    _id: 'eng-29',
    skillId:'EngCodingQuality',
    text: 'How confident are you with Coding Quality ?',
    description: 'Ability to establish and define quality practices and be able to set up an environment in which to assess code quality',
    keyword: 'Coding Quality',
},
{
    name: 'Develop',
    _id: 'eng-30',
    skillId:'EngCodeMan',
    text: 'How confident are you with Code Management?',
    description: 'Ability to apply source code best practices (e.g. branching strategies) and setup and maintain source control repositories',
    keyword: 'Code Management',
},
{
    name: 'Develop',
    _id: 'eng-31',
    skillId:'EngJS',
    text: 'How confident are you with Javascript?',
    description: '',
    keyword: 'Javascript',
},
{
    name: 'Develop',
    _id: 'eng-32',
    skillId:'EngReact',
    text: 'How confident are you with React?',
    description: '',
    keyword: 'React',
},
{
    name: 'Develop',
    _id: 'eng-33',
    skillId:'EngReactTestLib',
    text: 'How confident are you with React Testing Library?',
    description: '',
    keyword: 'React Testing Library',
},
{
    name: 'Develop',
    _id: 'eng-34',
    skillId:'EngTypescript',
    text: 'How confident are you with Typescript?',
    description: '',
    keyword: 'Typescript',
},
{
    name: 'Develop',
    _id: 'eng-35',
    skillId:'EngStyledComponents',
    text: 'How confident are you with Styled Components?',
    description: '',
    keyword: 'Styled Components',
},
{
    name: 'Develop',
    _id: 'eng-36',
    skillId:'EngCSS',
    text: 'How confident are you with CSS?',
    description: '',
    keyword: 'CSS',
},
{
    name: 'Develop',
    _id: 'eng-37',
    skillId:'EngNode',
    text: 'How confident are you with Node?',
    description: '',
    keyword: 'Node',
},
{
    name: 'Develop',
    _id: 'eng-38',
    skillId:'EngKoa',
    text: 'How confident are you with Koa?',
    description: '',
    keyword: 'Koa',
},
{
    name: 'Develop',
    _id: 'eng-39',
    skillId:'EngSupertest',
    text: 'How confident are you with Supertest?',
    description: '',
    keyword: 'Supertest',
},
{
    name: 'Develop',
    _id: 'eng-40',
    skillId:'EngNock',
    text: 'How confident are you with Nock?',
    description: '',
    keyword: 'Nock',
},
{
    name: 'Develop',
    _id: 'eng-41',
    skillId:'EngWiremock',
    text: 'How confident are you with Wiremock?',
    description: '',
    keyword: 'Wiremock',
},
{
    name: 'Develop',
    _id: 'eng-42',
    skillId:'EngGit',
    text: 'How confident are you with Git?',
    description: '',
    keyword: 'Git',
},
{
    name: 'Develop',
    _id: 'eng-43',
    skillId:'EngAPITesting',
    text: 'How confident are you with API Testing?',
    description: 'Ability to use appropriate frameworks and tools to test the functionality, reliability, performance and security of APIs',
    keyword: 'API Testing',
},
{
    name: 'Develop',
    _id: 'eng-44',
    skillId:'EngPerformanceTesting',
    text: 'How confident are you with Performance Testing?',
    description: 'Ability to shape, run and document the outputs of our performance testing at each respective RTL stage',
    keyword: 'Performance Testing',
},
{
    name: 'Develop',
    _id: 'eng-45',
    skillId:'EngCypress',
    text: 'How confident are you with Cypress?',
    description: '',
    keyword: 'Cypress',
},
{
    name: 'Develop',
    _id: 'eng-46',
    skillId:'EngJest',
    text: 'How confident are you with Jest?',
    description: '',
    keyword: 'Jest',
},
{
    name: 'Develop',
    _id: 'eng-47',
    skillId:'EngBurpSuite',
    text: 'How confident are you with Burp Suite?',
    description: '',
    keyword: 'Burp Suite',
},
{
    name: 'Develop',
    _id: 'eng-48',
    skillId:'EngJaws',
    text: 'How confident are you with Jaws?',
    description: '',
    keyword: 'Jaws',
},
{
    name: 'Develop',
    _id: 'eng-49',
    skillId:'EngaXe',
    text: 'How confident are you with aXe?',
    description: '',
    keyword: 'aXe',
},
{
    name: 'Develop',
    _id: 'eng-50',
    skillId:'EngDefectMan',
    text: 'How confident are you with Defect Management?',
    description: 'Ability to identify, assess, triage and resolve defects to minimise impact',
    keyword: 'Defect Management',
},
{
    name: 'Develop',
    _id: 'eng-51',
    skillId:'EngDocker',
    text: 'How confident are you with Docker?',
    description: '',
    keyword: 'Docker',
},
{
    name: 'Develop',
    _id: 'eng-52',
    skillId:'EngJenkins',
    text: 'How confident are you with Jenkins?',
    description: '',
    keyword: 'Jenkins',
},
{
    name: 'Develop',
    _id: 'eng-53',
    skillId:'EngKubernetes',
    text: 'How confident are you with Kubernetes?',
    description: '',
    keyword: 'Kubernetes',
},
{
    name: 'Develop',
    _id: 'eng-54',
    skillId:'EngGCP',
    text: 'How confident are you with GCP?',
    description: 'Ability to apply knowledge and expertise of GCP to ensure successful migration from ICP whilst meetings the needs of the Lab and respective teams. Ability to apply knowledge and experience of GCP in order to effectively navigate the route to live process in a safe, secure and efficient manner',
    keyword: 'Google Cloud Platform',
},

{
    name: 'Deploy',
    _id: 'eng-55',
    skillId:'EngITSM',
    text: 'How confident are you with IT Service Management (ITSM)?',
    description: 'Ability to apply the ITSM framework to the needs of the Lab',
    keyword: 'IT Service Management (ITSM)',
},

{
    name: 'Deploy',
    _id: 'eng-56',
    skillId:'EngMonitoringAlerting',
    text: 'How confident are you with Monitoring and Alerting?',
    description: 'Ability to design, build, own and run observability, dashboards, monitoring & alerting tooling (e.g. AWS CloudWatch)',
    keyword: 'Monitoring & Alerting',
},
{
    name: 'Deploy',
    _id: 'eng-57',
    skillId:'EngMetricsPerformance',
    text: 'How confident are you with Metrics & Performance?',
    description: 'Ability to define, measure and optimise the performance of our systems and applications',
    keyword: 'Metrics & Performance',
},]);


db.skills.insertMany([
    {
        name: 'Strategic Planning',
        _id: 'EngStratPlan',
        disciplineId:'SDev',
        optimusId: 'Understand',
    },
    {
        name: 'Enterprise Architecture',
        _id: 'EngEnterpriseArch',
        disciplineId:'SDev',
        optimusId: 'Understand',
    },
    {
        name: 'Emerging Technology Monitoring',
        _id: 'EngEmergingTech',
        disciplineId:'SDev',
        optimusId: 'Understand',
    },
    {
        name: 'Commercial Sensibility',
        _id: 'EngCommSense',
        disciplineId:'SDev',
        optimusId: 'Understand',
    },
    {
        name: 'Cost Benefit Analysis',
        _id: 'EngCostBenAnalysis',
        disciplineId:'SDev',
        optimusId: 'Understand',
    },
    {
        name: 'Budgeting & Planning',
        _id: 'EngBudgetingPlanning',
        disciplineId:'SDev',
        optimusId: 'Understand',
    },
    ///////INCUBATE//////////
    {
        name: 'OKR Definition',
        _id: 'EngOKRDef',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Enterprise Architecture',
        _id: 'EngEnterpriseArch2',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Storytelling',
        _id: 'EngStorytelling',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Customer Journey Framework',
        _id: 'EngCustJourneyFW',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Solution Architecture',
        _id: 'EngSolutionArch',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Solution Design',
        _id: 'EngSolutionDesign',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Feasibility Assessment',
        _id: 'EngFeasibileAssess',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Security Solution Design',
        _id: 'EngSecSolutionDesign',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Requirements Analysis',
        _id: 'EngRequireAnalysis',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Application Security',
        _id: 'EngAppSecurity',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Security Operations',
        _id: 'EngSecOps',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Test Strategy Development',
        _id: 'EngTestStratDev',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Automated Testing Frameworks',
        _id: 'EngAutoTestFrameworks',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Information Assurance',
        _id: 'EngInfoAssurance',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Risk Management',
        _id: 'EngRiskMan',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Issue Management',
        _id: 'EngIssueMan',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Dependency Management',
        _id: 'EngDependencyMan',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },
    {
        name: 'Financial Management',
        _id: 'EngFinancialMan',
        disciplineId:'SDev',
        optimusId: 'Incubate',
    },

    ///////Develop////////
    {
        name: 'Prioritisation',
        _id: 'EngPrioritisation',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Storytelling',
        _id: 'EngStorytelling2',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Coding Practices',
        _id: 'EngCodingPractices',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Software Design',
        _id: 'EngSoftDesign',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Coding Quality',
        _id: 'EngCodingQuality',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Code Management',
        _id: 'EngCodeMan',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Javascript',
        _id: 'EngJS',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'React',
        _id: 'EngReact',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'React Testing Library',
        _id: 'EngReactTestLib',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Typescript',
        _id: 'EngTypescript',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Styled Components',
        _id: 'EngStyledComponents',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'CSS',
        _id: 'EngCSS',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Node',
        _id: 'EngNode',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Koa',
        _id: 'EngKoa',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Supertest',
        _id: 'EngSupertest',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Nock',
        _id: 'EngNock',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Wiremock',
        _id: 'EngWiremock',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Git',
        _id: 'EngGit',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'API Testing',
        _id: 'EngAPITesting',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Performance Testing',
        _id: 'EngPerformanceTesting',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Cypress',
        _id: 'EngCypress',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Jest',
        _id: 'EngJest',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Burp Suite',
        _id: 'EngBurpSuite',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Jaws',
        _id: 'EngJaws',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'aXe',
        _id: 'EngaXe',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Defect Management',
        _id: 'EngDefectMan',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Docker',
        _id: 'EngDocker',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Jenkins',
        _id: 'EngJenkins',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Kubernetes',
        _id: 'EngKubernetes',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'Google Cloud Platform',
        _id: 'EngGCP',
        disciplineId:'SDev',
        optimusId: 'Develop',
    },
    {
        name: 'IT Service Management',
        _id: 'EngITSM',
        disciplineId:'SDev',
        optimusId: 'Deploy',
    },
    {
        name: 'Monitoring & Alerting',
        _id: 'EngMonitoringAlerting',
        disciplineId:'SDev',
        optimusId: 'Deploy',
    },
    {
        name: 'Metrics & Performance',
        _id: 'EngMetricsPerformance',
        disciplineId:'SDev',
        optimusId: 'Deploy',
    },
]);

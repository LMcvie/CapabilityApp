use capability;



db.questions.insertMany([
    {
        name: 'Understand',
        _id: 'des-1',
        skillId:'DesignDesThinkApproach',
        text: 'How confident are you with Design Thinking Approach?',
        description: 'Ability to understand the user, challenge assumptions, and redefine problems in an attempt to identify alternative strategies and solutions that might not be instantly apparent',
        keyword: 'Design Thinking Approach',
    }, 
    {
        name: 'Understand',
        _id: 'des-2',
        skillId:'DesignQualityQuantityResearch',
        text: 'How confident are you with Qualitative and Quantitative Research?',
        description: 'Ability to apply relevant data collection techniques to get in depth insights to a problem and or generate new ideas',
        keyword: 'Qualitative & Quantitative Research',
    }, 
    {
        name: 'Understand',
        _id: 'des-3',
        skillId:'DesignServiceDesign',
        text: 'How confident are you with Service Design?',
        description: 'Ability to apply applicable methods (e.g. service blueprints etc) and processes to design new services and or improve existing ones',
        keyword: 'Service Design',
    }, 
    {
        name: 'Develop',
        _id: 'des-4',
        skillId:'DesignUserCenteredDesFW',
        text: 'How confident are you with User Centered Design framework?',
        description: 'Ability to apply a mixture of investigative methods and tools (e.g. surveys and interviews) and generative ones (e.g. brainstorming) to develop an understanding of user needs',
        keyword: 'User Centered Design framework',
    }, 
    {
        name: 'Develop',
        _id: 'des-5',
        skillId:'DesignInfoArchitecture',
        text: 'How confident are you with Information Architecture?',
        description: 'Ability to apply IA practices to organise, structure and label content in an effective and sustainable way',
        keyword: 'Information Architecture',
    }, 
    {
        name: 'Develop',
        _id: 'des-6',
        skillId:'DesignVisualDes',
        text: 'How confident are you with Visual Design?',
        description: 'Ability to apply visual design practices (aligned to our brand guidelines) to engage users and help build trust and interest in the brand',
        keyword: 'Visual Design',
    }, 
    {
        name: 'Develop',
        _id: 'des-7',
        skillId:'DesignInteractionDesign',
        text: 'How confident are you with Interaction Design?',
        description: 'Ability to apply ID practices to create products that enable the user to achieve their objective(s) in the best way possible',
        keyword: 'Interaction Design',
    }, 
    {
        name: 'Develop',
        _id: 'des-8',
        skillId:'DesignPrototyping',
        text: 'How confident are you with Prototyping?',
        description: 'Ability to develop a draft version of a product (e.g low or high fidelity) to test or validate ideas, design assumptions and other aspects of its conceptualisation quickly and effectively',
        keyword: 'Prototyping',
    }, 
    {
        name: 'Develop',
        _id: 'des-9',
        skillId:'DesignAccessStandards',
        text: 'How confident are you with Accessibility standards?',
        description: 'Ability to effectively consider and apply accessibility standards (WCAG) to all the products we are developing',
        keyword: 'Accessibility standards',
    }, 
    {
        name: 'Develop',
        _id: 'des-10',
        skillId:'DesignFigma',
        text: 'How confident are you with Figma?',
        description: 'Ability to effectively apply the full suite of functionality within Figma',
        keyword: 'Figma',
    }, 
    {
        name: 'Develop',
        _id: 'des-11',
        skillId:'DesignInVisionStudio',
        text: 'How confident are you with InVision Studio?',
        description: 'Ability to effectively apply the full suite of functionality within InVision Studio',
        keyword: 'InVision Studio',
    }, 
    {
        name: 'Develop',
        _id: 'des-12',
        skillId:'DesignSketch',
        text: 'How confident are you with Sketch?',
        description: 'Ability to effectively apply the full suite of functionality within Sketch',
        keyword: 'Sketch',
    }, 
    

]);

db.skills.insertMany([
    {
        name: 'Design Thinking Approach',
        _id: 'DesignDesThinkApproach',
        disciplineId:'Design',
        optimusId: 'Understand',
    },
    {
        name: 'Qualitative & Quantitative Research',
        _id: 'DesignQualityQuantityResearch',
        disciplineId:'Design',
        optimusId: 'Understand',
    },
    {
        name: 'Service Design',
        _id: 'DesignServiceDesign',
        disciplineId:'Design',
        optimusId: 'Understand',
    },
    {
        name: 'User Centered Design framework',
        _id: 'DesignUserCenteredDesFW',
        disciplineId:'Design',
        optimusId: 'Develop',
    },
    {
        name: 'Information Architecture',
        _id: 'DesignInfoArchitecture',
        disciplineId:'Design',
        optimusId: 'Develop',
    },
    {
        name: 'Visual Design',
        _id: 'DesignVisualDes',
        disciplineId:'Design',
        optimusId: 'Develop',
    },
    {
        name: 'Interaction Design',
        _id: 'DesignInteractionDes',
        disciplineId:'Design',
        optimusId: 'Develop',
    },
    {
        name: 'Prototyping',
        _id: 'DesignPrototyping',
        disciplineId:'Design',
        optimusId: 'Develop',
    },
    {
        name: 'Accessibility standards',
        _id: 'DesignAccessStandards',
        disciplineId:'Design',
        optimusId: 'Develop',
    },
    {
        name: 'Figma',
        _id: 'DesignFigma',
        disciplineId:'Design',
        optimusId: 'Develop',
    },
    {
        name: 'InVision Studio',
        _id: 'DesignInVisionStudio',
        disciplineId:'Design',
        optimusId: 'Develop',
    },
    {
        name: 'Sketch',
        _id: 'DesignSketch',
        disciplineId:'Design',
        optimusId: 'Develop',
    },

]);

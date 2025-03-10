const questions = [
    // Part 1 - Scenario-based questions (E/I, S/N, T/F, J/P)
    {
        question: "At a party, you usually:",
        optionA: "Interact with many, including strangers",
        optionB: "Interact with a few people you know",
        dimension: "E-I"
    },
    {
        question: "You tend to be more:",
        optionA: "Realistic than speculative",
        optionB: "Speculative than realistic",
        dimension: "S-N"
    },
    {
        question: "You are more impressed by:",
        optionA: "Principles",
        optionB: "Emotions",
        dimension: "T-F"
    },
    {
        question: "You are more drawn towards the:",
        optionA: "Convincing",
        optionB: "Touching",
        dimension: "T-F"
    },
    {
        question: "You tend to work:",
        optionA: "To deadlines",
        optionB: "Just whenever",
        dimension: "J-P"
    },
    {
        question: "You prefer to make decisions:",
        optionA: "After careful consideration",
        optionB: "Rather spontaneously",
        dimension: "J-P"
    },
    {
        question: "When making phone calls, you:",
        optionA: "Rarely question what you'll say",
        optionB: "Rehearse what you'll say",
        dimension: "E-I"
    },
    {
        question: "Facts:",
        optionA: "Speak for themselves",
        optionB: "Illustrate principles",
        dimension: "S-N"
    },
    {
        question: "Visionaries are:",
        optionA: "Somewhat annoying",
        optionB: "Rather fascinating",
        dimension: "S-N"
    },
    {
        question: "You are more often:",
        optionA: "A cool-headed person",
        optionB: "A warm-hearted person",
        dimension: "T-F"
    },
    // More questions...
    {
        question: "Is it worse to be:",
        optionA: "Unjust",
        optionB: "Merciless",
        dimension: "T-F"
    },
    {
        question: "You tend to choose:",
        optionA: "Carefully",
        optionB: "Impulsively",
        dimension: "J-P"
    },
    {
        question: "At parties, you generally:",
        optionA: "Stay late, with increasing energy",
        optionB: "Leave early, with decreased energy",
        dimension: "E-I"
    },
    {
        question: "You are attracted to:",
        optionA: "Sensible people",
        optionB: "Creative people",
        dimension: "S-N"
    },
    {
        question: "You are more interested in:",
        optionA: "What actually happened",
        optionB: "What could happen",
        dimension: "S-N"
    },
    // Part 2 - Word-based questions
    {
        question: "Which word appeals to you more:",
        optionA: "Analyze",
        optionB: "Sympathize",
        dimension: "T-F"
    },
    {
        question: "Which word appeals to you more:",
        optionA: "Systematic",
        optionB: "Spontaneous",
        dimension: "J-P"
    },
    {
        question: "Which word appeals to you more:",
        optionA: "Justice",
        optionB: "Mercy",
        dimension: "T-F"
    },
    {
        question: "Which word appeals to you more:",
        optionA: "Calm",
        optionB: "Lively",
        dimension: "I-E"
    },
    {
        question: "Which word appeals to you more:",
        optionA: "Production",
        optionB: "Design",
        dimension: "S-N"
    },
    {
        question: "Which word appeals to you more:",
        optionA: "Firm-minded",
        optionB: "Warm-hearted",
        dimension: "T-F"
    },
    // Part 3 - More scenario-based questions
    {
        question: "When solving a problem, you would rather:",
        optionA: "Follow established guidelines",
        optionB: "Look for creative approaches",
        dimension: "S-N"
    },
    {
        question: "You prefer courses that:",
        optionA: "Deal with specific problems and solutions",
        optionB: "Deal with abstract concepts and theories",
        dimension: "S-N"
    },
    {
        question: "In social settings, you generally speak:",
        optionA: "With many, including strangers",
        optionB: "With individuals or small groups",
        dimension: "E-I"
    },
    {
        question: "When making a decision, you typically rely more on:",
        optionA: "Facts and logic",
        optionB: "People's feelings and circumstances",
        dimension: "T-F"
    },
    {
        question: "In a work or project setting, you tend to:",
        optionA: "Create a schedule and stick to it",
        optionB: "Adapt as you go and keep things open",
        dimension: "J-P"
    },
    // Additional questions to reach 30 for demo purposes
    {
        question: "You find it more natural to:",
        optionA: "Point out flaws in an argument",
        optionB: "Find points of agreement",
        dimension: "T-F"
    },
    {
        question: "You tend to focus more on:",
        optionA: "Present realities",
        optionB: "Future possibilities",
        dimension: "S-N"
    },
    {
        question: "In preparing for an event, you typically:",
        optionA: "Plan things well in advance",
        optionB: "Adapt to what happens",
        dimension: "J-P"
    },
    {
        question: "After an engaging event, you prefer to:",
        optionA: "Talk about it with others",
        optionB: "Reflect on it privately",
        dimension: "E-I"
    },
    {
        question: "Which statement describes you better:",
        optionA: "I prioritize clarity and structure",
        optionB: "I prioritize adaptability and spontaneity",
        dimension: "J-P"
    }
];

const personalityTypes = {
    "ISTJ": {
        title: "The Inspector",
        traits: [
            "Practical and fact-minded",
            "Reliable and responsible",
            "Logical and methodical",
            "Value traditions and loyalty",
            "Detail-oriented"
        ],
        description: "ISTJs are quiet, serious, and earn success through thoroughness and dependability. They are practical, matter-of-fact, realistic, and responsible. They decide logically what should be done and work toward it steadily, regardless of distractions. They take pleasure in making everything orderly and organized — their work, their home, their life.",
        careers: ["Accountant", "Project Manager", "Military Officer", "Administrator", "Bank Officer", "Auditor"]
    },
    "ISFJ": {
        title: "The Protector",
        traits: [
            "Quiet and conscientious",
            "Warm and considerate",
            "Detailed and thorough",
            "Supportive and nurturing",
            "Service-oriented"
        ],
        description: "ISFJs are quiet, friendly, responsible, and conscientious. They are committed and steady in meeting their obligations. They are thorough, painstaking, and accurate. They are loyal and considerate, noticing and remembering specifics about people who are important to them, concerned with how others feel.",
        careers: ["Nurse", "Teacher", "Social Worker", "Health Care Worker", "Administrator", "Customer Service"]
    },
    "INFJ": {
        title: "The Counselor",
        traits: [
            "Insightful and intuitive",
            "Deep and complex",
            "Idealistic and principled",
            "Empathetic and compassionate",
            "Quietly passionate"
        ],
        description: "INFJs seek meaning and connection in ideas, relationships, and material possessions. They want to understand what motivates people and are insightful about others. They are conscientious and committed to their firm values. They develop a clear vision about how best to serve the common good.",
        careers: ["Counselor", "Writer", "HR Developer", "Professor", "Psychologist", "Healthcare Worker"]
    },
    "INTJ": {
        title: "The Architect",
        traits: [
            "Strategic and long-range planning",
            "Independent and decisive",
            "Analytical and theoretical",
            "Insightful and original",
            "Driven to implement their ideas"
        ],
        description: "INTJs have original minds and great drive for implementing their ideas and achieving their goals. They quickly see patterns in external events and develop long-range explanatory perspectives. When committed, they organize a job and carry it through. Skeptical and independent, they have high standards of competence and performance.",
        careers: ["Strategic Planner", "Scientist", "Engineer", "Investment Banker", "Systems Analyst", "University Professor"]
    },
    "ISTP": {
        title: "The Craftsperson",
        traits: [
            "Observant and detailed",
            "Adaptable and pragmatic",
            "Independent and self-directed",
            "Logical problem-solver",
            "Technical and hands-on"
        ],
        description: "ISTPs are tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions. They analyze what makes things work and readily get through large amounts of data to isolate the core of practical problems. They are interested in cause and effect, organize facts using logical principles.",
        careers: ["Mechanic", "Engineer", "Pilot", "Economist", "Computer Programmer", "Forensic Scientist"]
    },
    "ISFP": {
        title: "The Composer",
        traits: [
            "Sensitive and gentle",
            "Artistic and creative",
            "Present-focused",
            "Loyal and committed",
            "Adaptable and flexible"
        ],
        description: "ISFPs are quiet, friendly, sensitive, and kind. They enjoy the present moment, what's going on around them. They like to have their own space and to work within their own time frame. They are loyal and committed to their values and to people who are important to them. They dislike disagreements and conflicts.",
        careers: ["Artist", "Designer", "Veterinarian", "Nurse", "Craftsperson", "Chef"]
    },
    "INFP": {
        title: "The Healer",
        traits: [
            "Idealistic and loyal to values",
            "Adaptable and accepting",
            "Creative and original",
            "Empathetic and compassionate",
            "Driven by inner ideals"
        ],
        description: "INFPs are idealistic, loyal to their values and to people who are important to them. They want an external life that is congruent with their values. They are curious, quick to see possibilities, and can be catalysts for implementing ideas. They seek to understand people and to help them fulfill their potential.",
        careers: ["Writer", "Counselor", "Social Worker", "Teacher", "Artist", "Psychologist"]
    },
    "INTP": {
        title: "The Architect",
        traits: [
            "Logical and objective",
            "Theoretical and abstract",
            "Independent and intellectual",
            "Analytical problem-solver",
            "Original and creative"
        ],
        description: "INTPs seek to develop logical explanations for everything that interests them. They are theoretical and abstract, interested more in ideas than in social interaction. They are quiet, contained, flexible, and adaptable. They have unusual ability to focus in depth to solve problems in their area of interest.",
        careers: ["Computer Programmer", "Scientist", "Philosopher", "University Professor", "Mathematician", "Systems Analyst"]
    },
    "ESTP": {
        title: "The Dynamo",
        traits: [
            "Energetic and active",
            "Pragmatic and results-oriented",
            "Adaptable and resourceful",
            "Risk-taking and spontaneous",
            "Direct and straightforward"
        ],
        description: "ESTPs are flexible and tolerant, they take a pragmatic approach focused on immediate results. They enjoy material comforts and style. They learn best through doing. They enjoy applying common sense and experience to problems, making them efficient troubleshooters.",
        careers: ["Entrepreneur", "Marketer", "Paramedic", "Detective", "Sports Coach", "Stockbroker"]
    },
    "ESFP": {
        title: "The Performer",
        traits: [
            "Outgoing and spontaneous",
            "Practical and realistic",
            "Adaptable and resourceful",
            "People-oriented and fun-loving",
            "Present-focused"
        ],
        description: "ESFPs are outgoing, friendly, and accepting. They are exuberant lovers of life, people, and material comforts. They enjoy working with others to make things happen. They bring common sense and a realistic approach to their work, and make work fun. They are flexible and spontaneous, and adapt readily to new people and environments.",
        careers: ["Entertainer", "Sales Representative", "Event Planner", "Travel Agent", "Child Care Provider", "Fashion Designer"]
    },
    "ENFP": {
        title: "The Champion",
        traits: [
            "Enthusiastic and imaginative",
            "Innovative and creative",
            "People-oriented",
            "Adaptable and spontaneous",
            "Perceptive about others"
        ],
        description: "ENFPs are warmly enthusiastic, high-spirited, ingenious, and imaginative. They see life as full of possibilities. They make connections between events and information very quickly, and confidently proceed based on the patterns they see. They want a lot of affirmation from others, and readily give appreciation and support.",
        careers: ["Journalist", "Consultant", "Actor", "Marketing Specialist", "Counselor", "Teacher"]
    },
    "ENTP": {
        title: "The Visionary",
        traits: [
            "Innovative and resourceful",
            "Intellectually quick",
            "Knowledgeable generalist",
            "Challenging and independent",
            "Adaptable problem-solver"
        ],
        description: "ENTPs are quick, ingenious, stimulating, alert, and outspoken. They are resourceful in solving new and challenging problems. They are adept at generating conceptual possibilities and then analyzing them strategically. They are good at reading other people. They become bored with routine and will seldom do the same thing the same way.",
        careers: ["Entrepreneur", "Lawyer", "Consultant", "Engineer", "Scientist", "Creative Director"]
    },
    "ESTJ": {
        title: "The Supervisor",
        traits: [
            "Organized and structured",
            "Practical and realistic",
            "Loyal and dependable",
            "Decisive and direct",
            "Efficient task-completer"
        ],
        description: "ESTJs are practical, realistic, and matter-of-fact, with a natural head for business or mechanics. They organize projects and people to get things done, focusing on getting results in the most efficient way possible. They take care of routine details. They have a clear set of logical standards, systematically follow them and want others to also.",
        careers: ["Executive", "Manager", "Judge", "Police Officer", "Financial Officer", "Military Leader"]
    },
    "ESFJ": {
        title: "The Provider",
        traits: [
            "Warm and loyal",
            "Practical and organized",
            "Cooperative and harmonious",
            "Conscientious and detailed",
            "Traditional and reliable"
        ],
        description: "ESFJs are warmhearted, conscientious, and cooperative. They want harmony in their environment, work with determination to establish it. They like to work with others to complete tasks accurately and on time. They are conscientious, thorough, responsible, consistent and loyal. They notice what others need in their day-by-day lives and try to provide it.",
        careers: ["Teacher", "Healthcare Worker", "Sales Representative", "Social Worker", "Event Planner", "Human Resources"]
    },
    "ENFJ": {
        title: "The Teacher",
        traits: [
            "Warm and empathetic",
            "Persuasive and inspiring",
            "Sociable and expressive",
            "Idealistic and authentic",
            "Responsive to feedback"
        ],
        description: "ENFJs are warm, empathetic, responsive, and responsible. They are highly attuned to the emotions, needs, and motivations of others. They find potential in everyone, want to help others fulfill their potential. They may act as catalysts for individual and group growth. They are loyal, responsive to praise and criticism, and sociable.",
        careers: ["Teacher", "HR Manager", "Counselor", "Coach", "PR Specialist", "Sales Manager"]
    },
    "ENTJ": {
        title: "The Commander",
        traits: [
            "Strategic and logical",
            "Decisive and objective",
            "Assertive and direct",
            "Efficient organizer",
            "Long-range planner"
        ],
        description: "ENTJs are frank, decisive, assume leadership readily. They quickly see illogical and inefficient procedures and policies, develop and implement comprehensive systems to solve organizational problems. They enjoy long-term planning and goal setting. They are usually well informed, well read, enjoy expanding their knowledge and passing it on to others.",
        careers: ["Executive", "Lawyer", "Entrepreneur", "Management Consultant", "Business Analyst", "University Professor"]
    }
};

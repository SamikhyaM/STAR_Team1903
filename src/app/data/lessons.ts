export interface Question { text: string; options: string[]; answerIndex: number; explanation?: string; }
export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  passage?: string;
}
export interface Lesson { id: number; title: string; subject: string; summary: string; videoId: string; quizId: string; }

// videoId = the part after "v=" in a YouTube URL. 
export const LESSONS: Lesson[] = [
  { id: 1, title: 'One Step Equations', subject: '∑ Math', summary: 'Know how to solve equations that require one operation to isolate an unknown variable (usually \(x\)). Practice using addition, subtraction, multiplication, and division to find the value of the variable.', videoId: 'Gh29G9z5vcY', quizId: 'algebra-1' }, 
  { id: 2, title: 'Basic Math', subject: '∑ Math', summary: 'Know how to perform addition, subtraction, multiplication, and division using a calculator. Make sure to practice with fractions, decimals, percentages, roots, and exponents too. Very important: you need to know how to perform math operations based on word problems.', videoId: 'UFb3_Jq0W5Y', quizId: 'basicMath-1' }, 
  { id: 3, title: 'Main Idea', subject: 'English ✎', summary: 'Learn how to identify the main idea of a passage and distinguish it from supporting details. Practice recognizing the central message, understanding what the author wants to communicate, and identifying details that support the main idea.', videoId: 'LeEY2gSLijM', quizId: 'reading-1' }, 
  { id: 4, title: 'Foundational Documents', subject: 'History 𓍝', summary: 'Learn about the foundations of the U.S. government, including important historical documents, the three branches of government, elections, and how political systems work. Understand the roles and responsibilities of government institutions and how citizens participate in the democratic process.', videoId: 'CV9S3cwWMBg', quizId: 'history-1' }, 
  { id: 5, title: 'Branches of Governmemt', subject: 'History 𓍝', summary: 'Learn about the three branches of the U.S. government: the legislative, executive, and judicial branches. Understand their individual roles and responsibilities, how they work together to govern the country, and how the system of checks and balances prevents any one branch from becoming too powerful.', videoId: '3ev3Y8VAD18', quizId: 'history-2' }, 
  { id: 6, title: 'Cell Functions', subject: 'Science ⚛︎', summary: 'Understand the basic functions of cells and how their structures help them survive. Know the roles of major cell organelles, including the nucleus, cell membrane, cytoplasm, mitochondria, and ribosomes.', videoId: 'HoJ2eoFtwSw', quizId: 'biology-1' }, 
  { id: 7, title: 'Geography & the World', subject: 'History 𓍝', summary: 'Geographic themes, environment, and resource management.', videoId: 'NybHckSEQBI', quizId: 'algebra-1' },
  { id: 8, title: 'Life Science', subject: 'Science ⚛︎', summary: 'Cell structures and functions, photosynthesis and cellular respiration, human body systems (digestive, respiratory, immune), genetics (DNA, chromosomes, Punnett squares), and ecosystems/food chains.', videoId: 'NybHckSEQBI', quizId: 'reading-1' }, 
  { id: 9, title: 'Physical Science', subject: 'Science ⚛︎', summary: 'Atoms and molecules, chemical reactions and equations, force and motion, kinetic and potential energy, waves, and electricity/magnetism.', videoId: 'NybHckSEQBI', quizId: 'reading-1' }, 
  { id: 10, title: 'Economics', subject: 'History 𓍝', summary: 'Fundamental economic principles, market types, and financial systems.', videoId: 'NybHckSEQBI', quizId: 'algebra-1' },
];

export const QUIZZES: Quiz[] = [
  {
    id: 'algebra-1', title: 'Algebra Basics',
    questions: [
      { text: 'Solve: 2x + 4 = 10', options: ['x = 2', 'x = 3', 'x = 4', 'x = 7'], answerIndex: 1, explanation: 'Subtract 4 from both sides, then divide by 2.' },
      { text: 'Solve: x - 5 = 8', options: ['x = 3', 'x = 13', 'x = -3', 'x = 40'], answerIndex: 1, explanation: 'Add 5 to both sides.' },
      { text: 'Solve: 3x + 2 = x', options: ['x = 1', 'Impossible', 'x = -1', 'x = 67'], answerIndex: 2, explanation: 'Subtract 2 from both sides, then subtract x from both sides, finally divide by 2.'}
    ],
  },
  {
    id: 'reading-1', title: 'Main Idea and supporting details',
    passage: 'The Importance of Community Gardens\n\nCommunity gardens provide neighborhoods with many benefits. They allow residents to grow fresh fruits and vegetables, giving families access to healthier food options. These gardens also bring people together by encouraging neighbors to work as a team and share gardening knowledge. Additionally, community gardens can improve the appearance of neighborhoods by transforming unused spaces into green areas. Overall, community gardens help create healthier and more connected communities.',
    questions: [
      { text: 'What is the main idea of the passage?', options: ['Gardening is an expensive hobby that requires special equipment.', 'Community gardens provide health, social, and environmental benefits.', 'Most neighborhoods have unused spaces that should be turned into parks.', 'Growing vegetables is the only way to improve a community.'], answerIndex: 1 },
      { text: 'Which detail from the passage supports the idea that community gardens improve relationships between neighbors?', options: ['They provide families with healthier food options.', 'They transform unused spaces into green areas.', 'They encourage neighbors to work together and share gardening knowledge.', 'They allow residents to grow fresh fruits and vegetables.'], answerIndex: 2},
      { text: 'Which statement best supports the idea that community gardens benefit the environment?', options: ['They allow people to save money on groceries.', 'They provide opportunities for neighbors to socialize.', 'They help residents learn new gardening skills.'], answerIndex: 3 },
    ],
  },
  {
    id: 'biology-1', title: 'Cell Structures & Functions: Cell theory, organelles, plant vs. animal, membrane transport',
    questions: [
      { text: 'Which statement is one of the three main principles of cell theory?.', options: ['All living organisms are made of one or more cells.', 'All cells contain a nucleus.', 'Cells can only be produced from nonliving materials.', 'All living organisms are made of exactly one cell.'], answerIndex: 1 },
      { text: 'Which organelle is responsible for producing most of the energy a cell needs to function?', options: [' Nucleus', 'Ribosome', ' Mitochondria', 'Cell membrane'], answerIndex: 3 },
      { text: 'A plant cell is placed in a solution with a higher concentration of salt than the inside of the cell. What will most likely happen?', options: ['Water will move into the cell, causing it to swell.', 'Water will move out of the cell, causing it to shrink.', 'Salt will turn into water inside the cell.', 'The cell will immediately begin producing more energy.'], answerIndex: 2 },
    ],
  },
  {
  id: 'history-2',
  title: 'U.S. Government: Foundational Documents, Branches, and Federalism',
  questions: [
    {
      text: 'Why was the U.S. Constitution created to replace the Articles of Confederation?',
      options: [
        'The Articles gave the federal government too much power over the states.',
        'The Articles created a strong national government that controlled all state decisions.',
        'The Articles created a weak national government that struggled to collect taxes and enforce laws.',
        'The Articles allowed the president to make laws without Congress.'
      ],
      answerIndex: 2,
      explanation: 'The Articles of Confederation gave the national government very limited power, making it difficult to collect taxes, regulate trade, and enforce laws. The Constitution established a stronger federal government.'
    },
    {
      text: 'The president vetoes a bill passed by Congress. Congress then votes again and successfully overrides the veto. What principle of government does this situation demonstrate?',
      options: [
        'Federalism',
        'Checks and balances',
        'Popular sovereignty',
        'Judicial review'
      ],
      answerIndex: 1,
      explanation: 'Checks and balances allow each branch of government to limit the power of the others. Congress can override a presidential veto with a two-thirds vote in both the House and Senate.'
    },
    {
      text: 'Which of the following is an example of a power generally reserved for state governments?',
      options: [
        'Declaring war against another country.',
        'Printing and issuing U.S. currency.',
        'Making treaties with foreign governments.',
        'Establishing public school systems and setting education policies.'
      ],
      answerIndex: 3,
      explanation: 'State governments generally oversee education, including establishing public school systems and setting education policies. The other options are powers of the federal government.'
    }
  ],
},

];

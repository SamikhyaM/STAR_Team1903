export interface Question { text: string; options: string[]; answerIndex: number; explanation?: string; }
export interface Quiz { id: string; title: string; questions: Question[]; }
export interface Lesson { id: number; title: string; subject: string; summary: string; videoId: string; quizId: string; }

// videoId = the part after "v=" in a YouTube URL. 
export const LESSONS: Lesson[] = [
  { id: 1, title: 'Intro to Algebra', subject: 'Math', summary: 'Solve for x with simple equations.', videoId: 'NybHckSEQBI', quizId: 'algebra-1' }, // placeholder
  { id: 2, title: 'Reading Comprehension', subject: 'English', summary: 'Find the main idea in a passage.', videoId: 'NybHckSEQBI', quizId: 'reading-1' }, // placeholder
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
    id: 'reading-1', title: 'Main Idea',
    questions: [
      { text: 'The main idea of a passage is...', options: ['A small detail', 'What the passage is mostly about', 'The title only', 'The last sentence'], answerIndex: 1 },
    ],
  },
];

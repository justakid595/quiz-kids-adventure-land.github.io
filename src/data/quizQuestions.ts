
export interface Question {
  id: number;
  category: 'Math' | 'Science' | 'English' | 'Fun Facts';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  emoji: string;
}

export const quizQuestions: Question[] = [
  // Math Questions
  {
    id: 1,
    category: 'Math',
    question: 'What is 7 × 8?',
    options: ['54', '56', '48', '64'],
    correctAnswer: 1,
    explanation: '7 × 8 = 56! Great job with multiplication!',
    emoji: '🔢'
  },
  {
    id: 2,
    category: 'Math',
    question: 'If you have 24 cookies and want to share them equally among 6 friends, how many cookies does each friend get?',
    options: ['3', '4', '5', '6'],
    correctAnswer: 1,
    explanation: '24 ÷ 6 = 4 cookies each! Fair sharing!',
    emoji: '🍪'
  },
  {
    id: 3,
    category: 'Math',
    question: 'What is 15 + 27?',
    options: ['41', '42', '43', '44'],
    correctAnswer: 1,
    explanation: '15 + 27 = 42! Addition rocks!',
    emoji: '➕'
  },
  {
    id: 4,
    category: 'Math',
    question: 'Sarah saved $12 in January and $18 in February. How much did she save in total?',
    options: ['$28', '$30', '$32', '$25'],
    correctAnswer: 1,
    explanation: '$12 + $18 = $30! Sarah is great at saving money!',
    emoji: '💰'
  },
  {
    id: 5,
    category: 'Math',
    question: 'What is half of 36?',
    options: ['16', '17', '18', '19'],
    correctAnswer: 2,
    explanation: '36 ÷ 2 = 18! Half means divide by 2!',
    emoji: '🎂'
  },

  // Science Questions
  {
    id: 6,
    category: 'Science',
    question: 'Which planet is closest to the Sun?',
    options: ['Venus', 'Mercury', 'Earth', 'Mars'],
    correctAnswer: 1,
    explanation: 'Mercury is the closest planet to the Sun! It\'s super hot there!',
    emoji: '☀️'
  },
  {
    id: 7,
    category: 'Science',
    question: 'What do plants need to make their own food?',
    options: ['Sunlight, water, and carbon dioxide', 'Only water', 'Only sunlight', 'Soil and rocks'],
    correctAnswer: 0,
    explanation: 'Plants use sunlight, water, and carbon dioxide to make food through photosynthesis!',
    emoji: '🌱'
  },
  {
    id: 8,
    category: 'Science',
    question: 'How many bones does an adult human have?',
    options: ['196', '206', '216', '186'],
    correctAnswer: 1,
    explanation: 'Adults have 206 bones! Babies are born with about 270 bones that fuse together!',
    emoji: '🦴'
  },
  {
    id: 9,
    category: 'Science',
    question: 'What causes rain?',
    options: ['Clouds getting too heavy', 'Water evaporating and condensing', 'Wind pushing water down', 'The sun melting ice'],
    correctAnswer: 1,
    explanation: 'Rain happens when water evaporates, forms clouds, and then condenses back into water drops!',
    emoji: '🌧️'
  },
  {
    id: 10,
    category: 'Science',
    question: 'Which animal is known for changing colors?',
    options: ['Elephant', 'Chameleon', 'Tiger', 'Penguin'],
    correctAnswer: 1,
    explanation: 'Chameleons can change colors to blend in with their surroundings!',
    emoji: '🦎'
  },

  // English Questions
  {
    id: 11,
    category: 'English',
    question: 'Which word is a noun?',
    options: ['Running', 'Happy', 'Dog', 'Quickly'],
    correctAnswer: 2,
    explanation: 'Dog is a noun! Nouns are people, places, or things!',
    emoji: '🐕'
  },
  {
    id: 12,
    category: 'English',
    question: 'What is the opposite of "hot"?',
    options: ['Warm', 'Cool', 'Cold', 'Freezing'],
    correctAnswer: 2,
    explanation: 'Cold is the opposite of hot! They are antonyms!',
    emoji: '🧊'
  },
  {
    id: 13,
    category: 'English',
    question: 'Which sentence is written correctly?',
    options: ['i like pizza', 'I like pizza.', 'i Like Pizza', 'I like pizza'],
    correctAnswer: 1,
    explanation: 'Sentences start with a capital letter and end with punctuation!',
    emoji: '📝'
  },
  {
    id: 14,
    category: 'English',
    question: 'What does the word "gigantic" mean?',
    options: ['Very small', 'Very large', 'Very fast', 'Very slow'],
    correctAnswer: 1,
    explanation: 'Gigantic means very large or huge! Like a gigantic dinosaur!',
    emoji: '🦕'
  },
  {
    id: 15,
    category: 'English',
    question: 'Which word rhymes with "cat"?',
    options: ['Dog', 'Hat', 'Fish', 'Bird'],
    correctAnswer: 1,
    explanation: 'Hat rhymes with cat! They both end with the "at" sound!',
    emoji: '🎩'
  },

  // Fun Facts Questions
  {
    id: 16,
    category: 'Fun Facts',
    question: 'Which animal is the tallest in the world?',
    options: ['Elephant', 'Giraffe', 'Horse', 'Kangaroo'],
    correctAnswer: 1,
    explanation: 'Giraffes are the tallest animals! They can be up to 18 feet tall!',
    emoji: '🦒'
  },
  {
    id: 17,
    category: 'Fun Facts',
    question: 'Which continent is the largest?',
    options: ['Africa', 'Asia', 'North America', 'Europe'],
    correctAnswer: 1,
    explanation: 'Asia is the largest continent! It has the most people too!',
    emoji: '🌏'
  },
  {
    id: 18,
    category: 'Fun Facts',
    question: 'Who invented the light bulb?',
    options: ['Albert Einstein', 'Thomas Edison', 'Benjamin Franklin', 'Isaac Newton'],
    correctAnswer: 1,
    explanation: 'Thomas Edison invented the light bulb! He made many other inventions too!',
    emoji: '💡'
  },
  {
    id: 19,
    category: 'Fun Facts',
    question: 'How many hearts does an octopus have?',
    options: ['1', '2', '3', '4'],
    correctAnswer: 2,
    explanation: 'Octopuses have 3 hearts! Two pump blood to their gills, and one to the rest of their body!',
    emoji: '🐙'
  },
  {
    id: 20,
    category: 'Fun Facts',
    question: 'What is the fastest land animal?',
    options: ['Lion', 'Horse', 'Cheetah', 'Rabbit'],
    correctAnswer: 2,
    explanation: 'Cheetahs are the fastest! They can run up to 70 miles per hour!',
    emoji: '🐆'
  }
];

export const quiz = {
  be:{
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question:
          'Which function is used to serialize an object into a JSON string in Javascript?',
        choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'stringify()',
      },
      {
        question:
          'Which of the following keywords is used to define a variable in Javascript?',
        choices: ['var', 'let', 'var and let', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'var and let',
      },
      {
        question:
          'Which of the following methods can be used to display data in some form using Javascript?',
        choices: [
          'document.write()',
          'console.log()',
          'window.alert',
          'All of the above',
        ],
        type: 'MCQs',
        correctAnswer: 'All of the above',
      },
      {
        question: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        type: 'MCQs',
        correctAnswer: 'const',
      },
    ],
  },
  mba: {
    topic: 'CAT level Questions',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question:
          'Five students, including Amit, appear for an examination in which possible marks are integers between 0 and 50, both inclusive. The average marks for all the students is 38 and exactly three students got more than 32. If no two students got the same marks and Amit got the least marks among the five students, then the difference between the highest and lowest possible marks of Amit is',
        choices: ['21', '24', '20', '22'],
        type: 'MCQs',
        correctAnswer: '20',
      },
      {
        question:
          'On day one, there are 100 particles in a laboratory experiment. On day n where n≥2 one out of every n particles produces another particle. If the total number of particles in the laboratory experiment increases to 1000 on day m then m equals',
        choices: ['19', '16', '17', '18'],
        type: 'MCQs',
        correctAnswer: '19',
      },
      {
        question:
          'If a and b are non-negative real numbers such that a+2b=6 then the average of the maximum and minimum possible values of (a+b) is',
        choices: [
          '4',
          '4.5',
          '3.5',
          '3',
        ],
        type: 'MCQs',
        correctAnswer: '4.5',
      },
      {
        question: 'Manu earns ₹4000 per month and wants to save an average of ₹550 per month in a year. In the first nine months, his monthly expense was ₹3500, and he foresees that, tenth month onward, his monthly expense will increase to ₹3700. In order to meet his yearly savings target, his monthly earnings, in rupees, from the tenth month onward should be',
        choices: ['4200', '4400', '4300', '4350'],
        type: 'MCQs',
        correctAnswer: '4400',
      },
    ],
  }
  }
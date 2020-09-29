/**
 * Example store structure
 */
'use strict'

const trivia = [
  // 5 or more questions are required
  // questions: [
    {
      id: cuid(),
      Question: 'Which nut is used to make dynamite?',
      answers: [
        'Almonds',
        'Pine nuts',
        'Peanuts',
        'Walnuts'
      ],
      correctAnswer: 'Peanuts'
    },
    
    {
    id: cuid(),
    Question: 'What was the first cold breakfast cereal invented in 1863?',
    answers: [
      'Corn flakes',
      'Granola',
      'Bran flakes',
      'Cheerios'
    ],
    correctAnswer: 'Granola'
  },

  {
    id: cuid(),
    Question: "Who invented Coca-Cola?",
    answers: [
      'Asa Griggs Candler',
     ' Charles Elmer Hires',
      'John Matthews ',
      'John Pemberton'
    ],
    correctAnswer: "John Pemberton"
  },
  {
    id: cuid(),
    Question: "How many calories per gram are stored in protein?",
    answers: [
      '2',
      '3',
      '4',
      '5'
    ],
    correctAnswer: '4'
  },

  {
    id: cuid(),
    Question: "What is the only U.S. state to grow coffee beans?",
    answers: [
      'Florida',
      'California',
      'Hawaii',
      'Louisiana'
    ],
    correctAnswer: 'Hawaii'
  },
  {
    id: cuid(),
    Question: "What does the word “onion” mean in Latin?",
    answers: [
      'White sphere',
      'Small oyster',
      'Large pearl',
      'White oyster'
    ],
    correctAnswer: "Large pearl",
  },

  {
    id: cuid(),
    Question: "What is the only edible food that never expires?",
    answers: [
      'White rice',
      'Honey',
      'Rye',
      'Barley'
    ],
    correctAnswer: 'Honey'
  },

  {
    id: cuid(),
    Question: "What condiment was sold in the 1830’s as medicine?",
    answers: [
      'Soy sauce',
      'Ranch dressing',
      'Ketchup',
      'Maple syrup'
    ],
    correctAnswer: 'Ketchup'
  },

  {  
    id: cuid(),
    Question: "What is a tall chef’s hat called?",
    answers: [
      'Trilby',
      'Toque',
      'Skull cap',
      'Bucket hat'
    ],
    correctAnswer: 'Toque'
  },

  {  
    id: cuid(),
    Question: "How many flowers do honeybees need to visit in order to make one pound of honey?",
    answers: [
      '900,000',
      '1 million',
      '1.5 million',
      '2 million',
    ],
    correctAnswer: '2 million'
  },

  {  
    id: cuid(),
    Question: "What is a group of turkeys called?",
    answers: [
      'A clutch',
      'A rafter',
      'A brood',
      'A peep'
    ],
    correctAnswer: 'A rafter'
  },

  {  
    id: cuid(),
    Question: "What is the fastest snake in the world?",
    answers: [
      'Black Mamba',
      'King Cobra',
      'Boomslang',
      'Taipan'
    ],
    correctAnswer: 'Black Mamba'
  },

  {  
    id: cuid(),
    Question: "What car sold more than one million units in 1965 and still holds the record today?",
    answers: [
      'Buick Riviera',
      'Pontiac Grand Prix',
      'Chevrolet Impala',
      'Ford Thunderbird'
    ],
    correctAnswer: "Chevrolet Impala"
  },

  {  
    id: cuid(),
    Question: "What was the first car to break the sound barrier?",
    answers: [
      'Bloodhound',
      'X-1',
      'Bugatti Chiron', 
      'ThrustSSC'
    ],
    correctAnswer: "ThrustSSC"
  },

  {  
    id: cuid(),
    Question: "What was the first car that was mass-produced?",
    answers: [
      'Ford Quadricycle Runabout',
      'Ford Model-A',
      'Ford Model-T',
      'Ford Model-B'
    ],
    correctAnswer: "Ford Model-T"
  },

  {    
    id: cuid(),
    Question: "What is the technical term for the “brain” of your computer?",
    answers: [
      'Hard drive',
      'RAM',
      'CPU',
      'Manswer-twoboard'
    ],
    correctAnswer:"CPU",
  },

  {
    id: cuid(),
    Question: "What was Google’s original name?", 
    answers: [
      "Googol",
      'Oneshot',
      'Typist',
      'Backrub'
    ],
    correctAnswer: 'Backrub',
  },

  {
    id: cuid(),
    Question: "What company did the founders of YouTube work for before starting YouTube?",
    answers: [
      'Citi Bank',
      'Stripe',
      'PayPal',
      'US Bank'
    ],
    correctAnswer: 'PayPal',
  },

  {
    id: cuid(),
    Question: "What year was the first color photograph taken?",
    answers: [
      '1861',
      '1885',
      '1894',
      '1899'
    ],
    correctAnswer: '1861',
  },

  {
    id: cuid(),
    Question: "Who invented the Kodak camera?",
    answers: [
      'Johann Zahn',
      'George Eastman',
      'Henry A. Strong',
      'Joseph Nicéphore Niépce'
    ],
    correctAnswer: 'George Eastman',
  },

  {
    id: cuid(),
    Question: "What was the number of Twitter’s original character limit?",
    answers: [
      '125',
      '135',
      '140',
      '280'
    ],
    correctAnswer: '140',
  },

  {
    id: cuid(),
    Question: "What year was Pinterest founded in?",
    answers: [
      '2008',
      '2009',
      '2010',
      '2011'
    ],
    correctAnswer: '2010',
  },

  {
    id: cuid(),
    Question: "Which famous YouTuber uses the catchphrase “Kisses for my little fishes”?",
    answers: [
      'Eva Gutowski',
      'iJustine',
      'Trisha Paytas',
      'Zoella'
    ],
    correctAnswer: 'Trisha Paytas',
  },

  {
    id: cuid(),
    Question: "What was the original title of Jane Austen’s classic novel Pride & Prejudice?",
    answers: [
      'Longbourn',
      'Eligible',
      'First Impressions',
      'Vanity & Pride'
    ],
    correctAnswer: 'First Impressions',
  },

  {
    id: cuid(),
    Question: "What is the most expensive book ever sold?",
    answers: [
      'Birds of America',
      'Codex Leicester',
      'First Folio',
      'The Gospels of Henry the Lion'
    ],
    correctAnswer: 'Codex Leicester',
  }
  ]

  const triviaTracker = [
    
    {
      quizStarted: false,
      questionNumber: 0,
      score: 0
  }
  ]

function createStartTrivia() {
  let template =  `
  <div class="start-trivia">
    <h2>Test Your Knowledge</h2>
    <h3>Trivia Challenge</h3>
    <h4>press start to play</h4>
    <button class="button" id="start">Start</button>
  </div>
  `
  render(template);
}

function createTriviaElement() {
  let question = triviaTracker[0].questionNumber;
  let score = triviaTracker[0].score;

  let templates = `
  
  <div class="question-answers">
      <h2 class="current-question">Question ${question  + 1} out of ${trivia.length}</h2>
      <h3 class="score">Score ${score} out of ${trivia.length}</h3>
      <h3 class="js-trivia-questions">${trivia[question].Question}</h3>
    <form id="js-trivia-form"> 
  
    <div class="radio-button">
      <input type="radio" id="answer-zero" name="answer" value="${trivia[question].answers[0]}">
      <label for="first">${trivia[question].answers[0]}</label>
    </div>
    <div class="radio-button">  
      <input type="radio" id="answer-one" name="answer" value="${trivia[question].answers[1]}"> 
      <label for="answer-one">${trivia[question].answers[1]}</label>
    </div>
    <div class="radio-button">
      <input type="radio" id="answer-two" name="answer" value="${trivia[question].answers[2]}">
      <label for="answer-two">${trivia[question].answers[2]}</label>
    </div>
    <div class="radio-button">  
      <input type="radio" id="answer-three" name="answer" value="${trivia[question].answers[3]}">
      <label for="answer-three">${trivia[question].answers[3]}</label>
    </div>
    
    <div class="button">
    <button id="submit">Submit</button>
    </div>
    </form>
  </div>`;
  render(templates);
}

function startTrivia() {
  $('main').on('click', '#start', function(e) { 
    console.log("clickie");

    createTriviaElement();
  });
}

function submitAnswer() {
  
  $('main').on('click', '#submit', function(e) {
    e.preventDefault();
    console.log('next click');
    let selectedAnswer = $('input[name="answer"]:checked').val();
    let answer = trivia[triviaTracker[0].questionNumber].correctAnswer;
    triviaTracker[0].questionNumber++;

    if(!selectedAnswer) {
      triviaTracker[0].questionNumber--
      noAnswer(!selectedAnswer);
    }
    else if(selectedAnswer === answer) {
      triviaTracker[0].score++;
      correctAnswer(selectedAnswer, answer);
    } else {
      incorrectAnswer(selectedAnswer, answer);
    }
  });
}

function render(html) {
  $('main').html(html);
}

function correctAnswer(guess, answer) {
    let templates = 
    `
      <div class="results">
        <h2>You Guessed It!</h2>
        <h3 class="correct-answer">The Correct Answer Is, ${answer}</h3>
        <h3 class="guess">You Selected, ${guess}</h3>
        <button id="next">Next</button>
      </div>
    `
    render(templates);
}

function incorrectAnswer(guess, answer) {
  let templates = 
  `
    <div class="results">
      <h2>Wrong Guess!</h2>
      <h3 class="correct-answer">The Correct Answer Is, ${answer}</h3>
      <h3 class="guess">You Selected, ${guess}</h3>
      <button id="next">Next</button>
    </div>
  `;
  render(templates);

}

function noAnswer(noGuess) {
  let templates = 
  `
    <div class="results">
      <h2>You didn't Guess</h2>
      <h3 class="correct-answer">C'mon Guess</h3>
      <h3 class="guess">Just Guess</h3>
      <button id="next">Next</button>
    </div>
  `;
  render(templates);
}

function nextQuestion() {
  $('main').on('click', '#next', function(e) {
    if(triviaTracker[0].questionNumber < 25) {
      createTriviaElement();
    } else {
      finalDisplay();
    }
    
  });
}

function finalDisplay() {
  let score = triviaTracker[0].score;
  let templates = 
  `
    <div class="finals">
      <h3>Your Final Score ${score} out of ${trivia.length}</h3>
      <button class="restart">Guess Again?</button>
    </div>
  `;
  render(templates);
}
 
function triviaRestart () {
  $('main').on('click', '.restart', function(e){
    triviaTracker[0].score = 0;
    triviaTracker[0].questionNumber = 0;
    createStartTrivia();
  });

}



function triviaGame () {
  createStartTrivia();
  startTrivia();
  submitAnswer();
  nextQuestion();
  triviaRestart();
}

$(triviaGame);

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
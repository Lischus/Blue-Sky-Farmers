var currentQuestionIndex = 0;

var questionsEl = document.getElementById('questions');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');

let user_answers = [];
let answerNum;

function startQuiz() {
    var startScreenEl = document.getElementById('start-screen');
    startScreenEl.setAttribute('class', 'hide');
    questionsEl.removeAttribute('class');
    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = '';

    // loop over choices
    currentQuestion.choices.forEach(function(choice, i) {
        // create new button for each choice
        var choiceNode = document.createElement('button');
        choiceNode.setAttribute('class', 'choice');
        choiceNode.textContent = i + 1 + '. ' + choice;
        choiceNode.setAttribute('data-number', i + 1);
        answerNum = choiceNode.getAttribute('data-number');
        // attach click event listener to each choice
        choiceNode.onclick = questionClick;
        // display on the page
        choicesEl.appendChild(choiceNode);
    });
}

function questionClick(event) {
    const ele = event.target;
    const answerNum = ele.getAttribute('data-number');
    user_answers.push(answerNum);
    console.log(user_answers);
    // move to next question
    currentQuestionIndex++;

    // check if we've run out of questions
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

function quizEnd() {
    // show end screen
    var endScreenEl = document.getElementById('end-screen');
    endScreenEl.removeAttribute('class');
    // hide questions section
    questionsEl.setAttribute('class', 'hide');
}

async function postAnswer(event) {
    event.preventDefault();
    const response = await fetch(`/api/mymatch/quiz`, {
        method: 'POST',
        body: JSON.stringify({ user_answers }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace(`/mymatch`);
    } else {
        console.log(JSON.parse(response));
    }
}

// user clicks button to submit initials
submitBtn.onclick = postAnswer;

// user clicks button to start quiz
startBtn.onclick = startQuiz;
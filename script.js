const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: The correct sequence of HTML tags for starting a webpage is ?",
        a: "Head,Title,Body,Html",
        b: "Html,Head,Title,Body",
        c: "Html,Body,Head,Title",
        d: "Html,Title,Head,Body",
        ans: "ans2"
    },
    {
        question: "Q3: Which of the following tag is used to insert a line-break in HTML?",
        a: "<break>",
        b: "<a>",
        c: "<pre>",
        d: "<br>",
        ans: "ans4"
    },
    {
        question: "Q4: Which of the following CSS property is used to specify the space between every letter inside an element?",
        a: "alpha-spacing",
        b: "character-spacing",
        c: "letter-spacing",
        d: "alphabet-spacing",
        ans: "ans3"
    },
    {
        question: "Q5: Which of the following is the correct syntax to select the p siblings of a div element?",
        a: "p",
        b: "div+p",
        c: "div p",
        d: "div ~ p",
        ans: "ans4"
    },
    {
        question: "Q6: The property in CSS used to change the background color of an element is -",
        a: "color",
        b: "background-color",
        c: "bgcolor",
        d: "All of the above",
        ans: "ans2"
    },
    {
        question: "Q7: The HTML attribute used to define the inline styles is -",
        a: "style",
        b: "styles",
        c: "class",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q8: Which of the following is the correct syntax to display the hyperlinks without any underline?",
        a: "a{text-decoration: none",
        b: "a{text-decoration: no-underline}",
        c: "a{text-decoration: none}",
        d: "All of the above",
        ans: "ans1"
    },
    {
        question: "Q9: Are the negative values allowed in padding property?",
        a: "Yes",
        b: "No",
        c: "Maybe",
        d: "Can't say",
        ans: "ans2"
    },
    {
        question: "Q10: Which of the following is used to specify the subscript of text using CSS?",
        a: "vertical-align: sub",
        b: "vertical-align: super",
        c: "vertical-align: subscript",
        d: "None of the above",
        ans: "ans1"
    },


];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

    const getCheckAnswer = () =>{
        let answer;

        answers.forEach((currentAnsElem) => {
            if(currentAnsElem.checked){
                answer = currentAnsElem.id;
            }

        });
        return answer;
    };


    const deselectAll = () =>{
        answers.forEach((currentAnsElem) => currentAnsElem.checked = false );
    }

submit.addEventListener('click', ()=>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer=== quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length){
        loadQuestion();
    }else{
        showscore.innerHTML= `
        <h3>  You scored ${score}/${quizDB.length} </h3>
        <button class="btn" onclick="location.reload()">Play Again</button>


        `;

        showscore.classList.remove('scoreArea');
    }
    
});
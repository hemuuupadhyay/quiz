var questionBank= [
    {
        question : 'What is the value of x in the equation 3x – 15 – 6 = 0 ?',
        option : ['7','9','6','-9'],
        answer : '7'
    },
    {
        question : 'If 5 = V, How does 5,000 written in roman numeral system?',
        option : ['V','MMMMM','MX','VM'],
        answer : 'V'
    },
    {
        question : 'When is Pi Day celebrated around the world?',
        option : ['July 22','October 18','March 14','January 15'],
        answer : 'March 14'
    },
    {
        question : 'How many zeros are there in One Trillion?',
        option : ['1000000','100000000000','10000000000','1000000000000'],
        answer : '1000000000000'
    },
    {
        question : 'If 1=3, 2=3, 3=5, 4=4, 5=4 Then, 6=?',
        option : ['4','5','2','3'],
        answer : '3'
    },
    {
        question : 'Sally is 54 years old and her mother is 80, how many years ago was Sally’s mother times her age?',
        option : ['41 years ago','39 years ago','43 years ago','45 years ago'],
        answer : '41 years ago'
    },
    {
        question : 'There is a three-digit number. The second digit is four times as big as the third digit, while the first digit is three less than the second digit. What is the number?',
        option : ['142',' 147','141','151'],
        answer : '141'
    },
    {
        question : 'If 72 x 96 = 6927, 58 x 87 = 7885, then 79 x 86 = ?',
        option : ['6987','6897','6878','6879'],
        answer : '6897'
    },
    {
        question : 'Look at this series: 22, 21, 23, 22, 24, 23, … What number should come next?',
        option : ['23','25','24','20'],
        answer : '25'
    },
    {
        question : 'Which 3 numbers have the same answer whether they’re added or multiplied together?',
        option : ['1,2 and 3','1,4 and 5','1,5 and 7','2,3 and 2'],
        answer : '1,2 and 3'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();
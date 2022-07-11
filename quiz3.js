var questionBank= [
    {
        question : 'Which is the world oldest known city ?',
        option : ['Sydney','Banglore','Austin','Damascus'],
        answer : 'Damascus'
    },
    {
        question : 'Which is the biggest Island of the world?',
        option : ['The Cook island','Greenland','Paradise','Super blues'],
        answer : 'Greenland'
    },
    {
        question : 'When did india celebrate its 70th Consitution Day?',
        option : ['July 22','October 18','November 26','January 15'],
        answer : 'November 26'
    },
    {
        question : 'When did India enter the Test Cricket?',
        option : ['1932','1947','1946','1935'],
        answer : '1932'
    },
    {
        question : 'National Science Day is Celebrated to honor which Nobel Prize Winner scientist?',
        option : ['Abdul Kalam','C.V. Raman','Vikram Sarabhai','Homi J Bhabha'],
        answer : 'C.V. Raman'
    },
    {
        question : 'Who was the first woman Governor of India?',
        option : ['Vijay Lakshmi Pandit','Sarojini Naidu','Kamaladevi Chattopadhyay','None of the above'],
        answer : 'Sarojini Naidu'
    },
    {
        question : 'National Income estimates in India are prepared by',
        option : ['Planning Commission',' Reserve Bank of India','Central statistical organisation','Indian statistical Institute'],
        answer : ' Central statistical organisation'
    },
    {
        question : 'Fathometer is used to measure',
        option : ['Earthquakes','Rainfall','Ocean depth','Sound intensity'],
        answer : 'Ocean depth'
    },
    {
        question : 'The purest form of iron is',
        option : ['wrought iron','steel','pig iron','nickel steel'],
        answer : 'wrought iron'
    },
    {
        question : 'The blue colour of the clear sky is due to',
        option : ['Diffraction of light','Dispersion of light','Reflection of light','Refraction of light'],
        answer : 'Dispersion of light'
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
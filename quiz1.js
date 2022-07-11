var questionBank= [
    { 
    question : 'Today is Monday. After 61 days, it will be :', 
    option : ['Tuesday', 'Monday','Sunday', 'Saturday'], 
    answer : 'Saturday'
},
{
 
    question : 'Two numbers are respectively 20% and 50% more than a third number. The ratio of the two number is: ',
    option : ['2:5','3:5','4:5','5:4'],
    answer : '4:5'
},
    {
     question : 'In a certain code language COMPUTER is written as RFUVQNPC. How will MEDICINE be written in that code language?',
     option : ['MFEDJJOE', 'EOJDEJFM','MFEJDJOE', 'EOJDJEFM'],
     answer :  'EOJDJEFM'
    },
    {
    
     question : 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z . Which letter in this alphabet is the eighth letter to the right of the letter and  which is tenth letter to the left of the last but one letter of the alphabet?',
     option : [' X', 'W','I', 'H'],
     answer :  'W'
    },
    {
    question : 'How many pairs of letters are there in the word " CASTRAPHONE" which have as many letters between them in the word as in the alphabet?',
    option : ['3', '4','5', '6'], 
    answer : '6'
    },
    {
    question : 'A is sister of B. C is mother of B. D is father of C. E is mother of D. Then, how is A related to D?',
    option : ['Grandfather', 'Grandmother','Daughter', 'Granddaughter'],
    answer : 'Granddaughter'
    },
    {
    question : 'Insert the missing number. 7, 26, 63, 124, 215, 342, (....)', 
    option : ['391','421','481','511'],
    answer : '511'
    },
    
    {
     question: 'Find the odd man out. 2, 5, 10, 17, 26, 37, 50, 64',
     option :  ['50','37','26','64'],
     answer : '64'
    },
    
    {
     question: 'A clock is set right at 8 a.m. The clock gains 10 minutes in 24 hours will be the true time when the clock indicates 1 p.m. on the following day?', 
     option : ['48 min. past 12.', '46 min. past 12.',' 45 min. past 12.','47 min. past 12.'],
     answer : '48 min. past 12.'
    },
    
    { 
    question: 'Out of 7 consonants and 4 vowels, how many words of 3 consonants and 2 vowels can be formed?',
    option : ['25200','52000','120','24400'], 
    answer : '25200'
    }

    
];



      
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
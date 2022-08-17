var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')

const question = document.querySelector(".question")
const questionNumberSpan = document.querySelector(".question-num-value")
const totalQuestionsSpan = document.querySelector(".total-questions")
const scoreCardSpan = document.querySelector(".score-card")


let currentIndex = 0;


const opt1 = document.getElementById("opt1")
const opt2 = document.getElementById("opt2")
const opt3 = document.getElementById("opt3")
const opt4 = document.getElementById("opt4")

 //Start the quiz
window.onload=function(){
    this.load();
}

questions = [
    {
        q:'What is the name of the river',
        options: ['Danube', 'Niger', 'Congo', 'Limpopo'],
        answer:1
    },
    {
        q:'What is the name of the Deadly virus',
        options: ['Antrax', 'Killvi', 'Corona', 'Wuhanvi'],
        answer:2
    }      
]      

totalQuestionsSpan.innerHTML = questions.length

function load(){
    if(currentIndex <=this.questions.length-1){
        questionNumberSpan.innerHTML = currentIndex + 1
        question.innerHTML = questions[currentIndex].q;
        opt1.innerHTML = questions[currentIndex].options[0]    
        opt2.innerHTML = questions[currentIndex].options[1]
        opt3.innerHTML = questions[currentIndex].options[2]
        opt4.innerHTML = questions[currentIndex].options[3]
    }
    else {
        quizbox.innerHTML="Quiz Completed!";
        ul.style.display="none";
        nextButton.style.display="none";
    }
}

// function load(){

//     console.log(this.questions.length)
//     if(index<=questions.length-1){
//         quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
//         opt1.innerHTML=this.questions[this.index].options[0];
//         opt2.innerHTML=this.questions[this.index].options[1];
//         opt3.innerHTML=this.questions[this.index].options[2];
//         opt4.innerHTML=this.questions[this.index].options[3];
//     }
//     else {
//         quizbox.innerHTML="Quiz Completed!";
//         ul.style.display="none";
//         nextButton.style.display="none";
//     }
// }

function next(){
    this.currentIndex++;
    this.load();
    allowClick();
}

function check(ele){
    var id=ele.id.split(''); //extrac the number from the option id
    if(id[id.length-1]==questions[currentIndex].answer){
        this.score++;
        ele.className="correct";
        this.scoreCard();
    }
    else{
        ele.className="wrong";
    }
    currentIndex++
}

function preventClick(){
    for(let i=0; i<ul.children.length; i++){
        ul.children[i].style.pointerEvents="none";
    }
}

function allowClick(){
    for(let i=0; i<ul.children.length; i++){
        ul.children[i].style.pointerEvents="auto";
        ul.children[i].className=''
    }
}

score = 0

function scoreCard(){
    scoreCardSpan.innerHTML=+ this.score + "/" + this.questions.length ;
}

function button(ele){
    check(ele);
    preventClick();
}


function gotoGame(){
    var username = document.getElementById("txtUsername").value
    if(username == '') {
        alert("You must enter a username")
    }
    else {
        window.location.href = "game.html"
    }
}

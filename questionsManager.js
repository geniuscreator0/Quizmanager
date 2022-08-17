var request = window.indexedDB.open("questionsDB", 1) //Returns a request object

var questionText = document.getElementById("addQuestion")
var opt1 = document.getElementById('addOption1')
var opt2 = document.getElementById('addOption2')
var opt3 = document.getElementById('addOption3')
var opt4 = document.getElementById('addOption4')
var answer = document.getElementById('addAnswer')

var db;
var questionBank

request.onsuccess = function() {
    db = event.target.result
    loadQuestion(db)

}

request.onupgradeneeded = function(event){
    console.log("upgraded")
    db = event.target.result;
    db.createObjectStore("questions", { autoIncrement : true })  
}

function addQuestionHandler(){
    vQuestion = {
        q:questionText.value,
        options: [opt1.value, opt2.value, opt3.value, opt4.value],
        answer:answer.value
    }
    addQuestion(vQuestion)
    location.reload()
}

function addQuestion(question){
    var request = db
    .transaction(['questions'], 'readwrite')
    .objectStore('questions')
    .add(question)
}

function loadQuestion(db){        
    var transaction = db.transaction(["questions"]);
    var objectStore = transaction.objectStore("questions");
    objectStore.getAll().onsuccess = function(event) {
        var str = ''
        event.target.result.forEach(element => {
          str += '<p class="singleQuestion"><strong> ' + element.q + '</strong> <br />'
          + 'A. ' + element.options[0] 
          + '  B. ' + element.options[1] 
          + '  C. ' + element.options[2] 
          + '  D. ' + element.options[3] 
          + '</p>'
        });       
        document.getElementById("questionBox").innerHTML = str;
    };
}


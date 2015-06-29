//store each question in an array within a larger array
//user selects question and submits. it takes the ID of that radio button and checks it against the answer id in that specific question array

var allQuestions = [{question: "What color is an apple?", choices: ["red", "purple", "									blue"], correctAnswer: 0}, 
									 {question: "Java and Javascript are the same language", choices: ["true", "false"], correctAnswer: 0},
									 {question: "What is the capital of Oregon?", choices: ["Portland", "Salem", "Bend"], correctAnswer: 1}];

//compares the correct answer with the submitted answer
function submitAnswer() {
	var currentQuestion = getQuestionNumber();
	var selectedAnswer = ($('input[name="answer"]:checked').val());
	correctAnswer(currentQuestion, selectedAnswer);
	} 



//determines correct answer
function correctAnswer (questionNumber, selectedAnswer) {
	var correctAnswer = allQuestions[questionNumber - 1].correctAnswer + 1;
	if(correctAnswer == selectedAnswer) {
		alert('correct');
	} else {
		alert('wrong');
	}
}

//gets question number
function getQuestionNumber() {
	var formID = parseInt($("form").attr("id"));
	return formID;
	}

//populates the next question 
var questionOnPage = 0;

function populateQuestion() {
		$('h3').text(allQuestions[questionOnPage].question);
		questionOnPage++;
	}

//loop through choices array
	//select input tag equal to counter in loop
	//after input tag add that corresponding item in array
for(var i = 0; i < allQuestions[questionOnPage].choices.length; i++) {
	$('input:eq('+ i +')').after(allQuestions[questionOnPage].choices[i]);
}




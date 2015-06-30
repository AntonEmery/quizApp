//store each question in an array within a larger array
//user selects question and submits. it takes the ID of that radio button and checks it against the answer id in that specific question array

var allQuestions = [{question: "What color is an apple?", choices: ["red", "purple", "										blue"], correctAnswer: 0}, 
									 {question: "Javascript is a language primarily used in the", choices: ["web browser", "server", "personal computer"], correctAnswer: 0},
									 {question: "What is the capital of Oregon?", choices: ["Portland", "Salem", "Bend"], correctAnswer: 1},
									 {question: "What is a common nickname for Portland?", choices:["Hiptown", "Stumptown", "Jewel of the North West"], correctAnswer: 1},
									 {question: "Portland is known for its:", choices: ["coffee", "hipsters", "all of the above"], correctAnswer: 2}];

var currentQuestion = 1;

//compares the correct answer with the submitted answer
function submitAnswer() {
	//var currentQuestion = getQuestionNumber();
	var selectedAnswer = ($('input[name="answer"]:checked').val());
	correctAnswer(currentQuestion, selectedAnswer);
	} 

// //gets question number
// function getQuestionNumber() {
// 	var formID = parseInt($("form").attr("id"));
// 	return formID;
// 	}

var finalScore = 0;

//determines correct answer
function correctAnswer (questionNumber, selectedAnswer) {
	var correctAnswer = allQuestions[questionNumber - 1].correctAnswer + 1;
	if(correctAnswer == selectedAnswer) {
		alert('correct');
		finalScore++
	} else {
		alert('wrong');
	}
}


//populates the question 
var questionOnPage = 0;

function populateQuestion() {
	var questionContent = allQuestions[questionOnPage].question;
	$('h3').text(questionContent);
	//loop through choices array
	//select input tag equal to counter in loop
	//after input tag add that corresponding item in array
	for(var i = 0; i < allQuestions[questionOnPage].choices.length; i++) {
		//$('input:eq('+ i +')').after(allQuestions[questionOnPage].choices[i]);
		$('input:eq('+ i +')')[0].nextSibling.nodeValue = allQuestions[questionOnPage].choices[i];
	}
	questionOnPage++;
}







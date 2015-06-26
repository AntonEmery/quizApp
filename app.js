//store each question in an array within a larger array
//user selects question and submits. it takes the ID of that radio button and checks it against the answer id in that specific question array

var allQuestions = [{question: "What color is an apple?", choices: ["red", "purple", "									blue"], correctAnswer: 0}, 
									 {question: "Java and Javascript are the same language", choices: ["true", "false"], correctAnswer: 0},
									 {question: "What is the capital of Oregon?", choices: ["Portland", "Salem", "Bend"], correctAnswer: 1}];

// //when this function is called need to log the value of the answer the user chose
function submitAnswer() {
	var answer = ($('input[name="answer"]:checked').val());
	if(answer == questions[0][1]) {
		alert('That is correct!');
	} else {
		alert('Try again!');
	}
}


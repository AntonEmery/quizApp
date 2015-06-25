//store each question in an array within a larger array
//user selects question and submits. it takes the ID of that radio button and checks it against the answer id in that specific question array

var questions = [['What color is an apple?', 1], ['question two', 'answer two']];

// //when this function is called need to log the value of the answer the user chose
function submitAnswer() {
	var answer = ($('input[name="answer"]:checked').val());
	if(answer == questions[0][1]) {
		alert('That is correct!');
	} else {
		alert('Try again!');
	}
}


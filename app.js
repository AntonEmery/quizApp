//store each question in an array within a larger array
//user selects question and submits. it takes the ID of that radio button and checks it against the answer id in that specific question array

var questions = [['question one', 'answer one'], ['question two', 'answer two']];

//when this function is called need to log the value of the answer the user chose
function submitAnswer() {
	//console log value of selected radio button	
	alert($('input[name="answer"]:checked').val());
}
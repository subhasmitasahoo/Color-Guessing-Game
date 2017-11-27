var colors = [];
var numSquares = 6;
var sqrList = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#curColor");
var resultDisplay = document.querySelector("#result");
var header = document.querySelector("#header");
var reset = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var score = 0;
var total = 0;
var scoreDisplay = document.querySelector("#won");
var totalDisplay = document.querySelector("#total")

init();

function init(){
	setUpModeButtons();
	setUpSquareBox();
	resetPage();
}

function setUpSquareBox(){
	for(var i = 0;i<sqrList.length;i++){
	sqrList[i].addEventListener("click",function(){
		total++;
		if(this.style.backgroundColor!=pickedColor){
			alert("Wrong choice!");
			this.style.backgroundColor = "black";
			resultDisplay.textContent = "Try Again!"
		}
		else{
			score++;
			alert("correct");
			resultDisplay.textContent = "Correct!"
			reset.textContent = "Play Again?";
			changeColors(pickedColor);
		}
		scoreDisplay.textContent = score;
		totalDisplay.textContent = total;
	});
}
}

function setUpModeButtons(){
	for(var i = 0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent=="Easy")
			numSquares = 3;
		else
			numSquares = 6;
		resetPage();

	});
}
}

function resetPage(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0;i<sqrList.length;i++){
		if(colors[i]){
			sqrList[i].style.display = "block";
			sqrList[i].style.backgroundColor = colors[i];
		}
		else
			sqrList[i].style.display = "none";
	}
	header.style.backgroundColor = "steelblue";
	resultDisplay.textContent = "";
	reset.textContent = "New Colors";
}



reset.addEventListener("click",function(){
	resetPage();
});


function changeColors(color){
	for(var i =0;i<sqrList.length;i++){
		sqrList[i].style.backgroundColor = color;
	}
	header.style.backgroundColor = color;
}

function pickColor(){
	var rand = Math.floor(Math.random()*colors.length);
	return colors[rand];
}

function generateRandomColors(num){
	var arr = [];
	for(var i =0;i<num;i++){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var res = "rgb("+r+", "+g+", "+b+")";
		arr.push(res);
	}
	return arr;
}
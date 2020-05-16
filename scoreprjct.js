var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var display = document.querySelector("#display");
var display2 = document.querySelector("#display2");

var inputnum = document.querySelector("input");
var ber = document.getElementById("ber");
var reset = document.querySelector("#reset");

var p1Score =0;
var p2Score =0;
var gameOver =false;
var winningGame =5;

p1button.addEventListener("click",function(){
	if(!gameOver){
	p1Score++;
	if(p1Score === winningGame)
	{
		display.classList.add("winning");
		gameOver =true;
	}
	display.textContent =p1Score;	
	}
	
});

p2button.addEventListener("click",function(){
	if(!gameOver)
	{
	p2Score++;
	if(p2Score === winningGame)
	{
		display2.classList.add("winning");
		gameOver =true;
	}
	display2.textContent = p2Score;
	}
});

reset.addEventListener("click",function(){
			reset1();
		});
function reset1(){
	p1Score=0;
			p2Score=0;
			display.textContent=0;
			display2.textContent=0;
			display.classList.remove("winning");
			display2.classList.remove("winning");
			gameOver=false;
}

inputnum.addEventListener("click",function(){
	ber.textContent= inputnum.value;
	winningGame =Number(inputnum.value);
	reset1();
});
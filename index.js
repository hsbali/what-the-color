var numSquare = 6;
var color = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButtton = document.querySelector("#reset")
var modeButton = document.querySelectorAll(".mode")

init(); //main game function

function init() {
  // setting up the game with reset function
  reset();
  //main game logic
  for (var i = 0; i < color.length; i++) {
    //add click listeners to squares
    square[i].addEventListener("click", function(){
      //grab color of clicked squares
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        changeColor(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButtton.textContent = "Play Again?"
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
  //mode button seletion code
  for (var i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener("click", function() {
      modeButton[0].classList.remove("selected");
      modeButton[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
      reset();
    });
  }
  //added event listeners for new Game
  resetButtton.addEventListener("click", reset);
}

function reset() {
  //make new random Colors
  color = generateRandomColors(numSquare);
  //assign new colors in squares
  for (var i = 0; i < square.length; i++) {
    if (color[i]){
      square[i].style.display = "block";
      square[i].style.backgroundColor = color[i];
    } else {
      square[i].style.display = "none";
    }
  }
  //pick one color from the new Colors
  pickedColor = pickColor();
  //update the pickedColor in display
  colorDisplay.textContent = pickedColor;
  //make h1 background normal
  h1.style.backgroundColor = "steelblue";
  //change button text from Play Again? to New colors
  resetButtton.textContent = "New Colors";
  //remove the message
  messageDisplay.textContent = "";
}

function changeColor(color) {
  for (var i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var i = Math.floor(Math.random() * color.length);
  return color[i];
}

function generateRandomColors(num) {
  //make an array list
  var arr = [];
  //generate num random colors
  for (var i = 0; i < num; i++) {
    arr.push(randomColors())
  }
  //get arr list
  return arr;
}

function randomColors() {
  //make random red value
  var r = Math.floor(Math.random() * 256);
  //make random green value
  var g = Math.floor(Math.random() * 256);
  //make random blue value
  var b = Math.floor(Math.random() * 256);
  //return rgb string value
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

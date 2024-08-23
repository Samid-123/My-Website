
  const menuBtn = document.getElementById('btnMenu');
  const menu = document.getElementById('menuList');
  let opened = false;

  menuBtn.addEventListener('click' , () => {
    if (opened) {
        menuList.classList.remove('rotateIn');
        menuList.classList.add('rotateOut');
        opened=false;
    }
    else {
        menuList.classList.remove('rotateOut');
        menuList.classList.add('rotateIn');
        opened=true;
    }
  });



var input = document.getElementById('input'), 
  number = document.querySelectorAll('.numbers div'),
  operator = document.querySelectorAll('.operators div'), 
  result = document.getElementById('result'), 
  clear = document.getElementById('clear'), 
  resultDisplayed = false; 

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];


    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {

      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {

      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {

    var currentString = input.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
      
      console.log("enter a number first");
    } else {
      
      input.innerHTML += e.target.innerHTML;
    }

  });
}

result.addEventListener("click", function() {


  var inputString = input.innerHTML;

  var numbers = inputString.split(/\+|\-|\×|\÷/g);

  var operators = inputString.replace(/[0-9]|\./g, "").split("");

  console.log(inputString);
  console.log(operators);
  console.log(numbers);
  console.log("----------------------------");


  var divide = operators.indexOf("÷");
  while (divide != -1) {
    numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
    operators.splice(divide, 1);
    divide = operators.indexOf("÷");
  }

  var multiply = operators.indexOf("×");
  while (multiply != -1) {
    numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
    operators.splice(multiply, 1);
    multiply = operators.indexOf("×");
  }

  var subtract = operators.indexOf("-");
  while (subtract != -1) {
    numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
    operators.splice(subtract, 1);
    subtract = operators.indexOf("-");
  }

  var add = operators.indexOf("+");
  while (add != -1) {
    numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
    operators.splice(add, 1);
    add = operators.indexOf("+");
  }

  input.innerHTML = numbers[0]; 

  resultDisplayed = true; 
});

clear.addEventListener("click", function() {
  input.innerHTML = "";
});

var feedbackScore = 0;
let allBtn = document.querySelectorAll(".card-ratings button");
let submitBtn = document.querySelector(".card-btn");
let frontPart = document.querySelector(".card-face");
let backPart = document.querySelector(".card-back");

allBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    feedbackScore = this.innerText;
    allBtn.forEach((button) => {
      button.classList.remove("active");
    });
    this.classList.add("active");
  });
});

submitBtn.addEventListener("click", function () {
  frontPart.style.display = "none";
  backPart.querySelector(".card-value").innerText = feedbackScore;
  backPart.style.display = "flex";
});


document.addEventListener('DOMContentLoaded', function() {
  const figures = document.querySelectorAll('.slider figure');
  const bg = document.querySelector('.bg');

  figures.forEach(figure => {
      figure.addEventListener('click', function() {
          const colors = this.getAttribute('data-color').split(', ');
          bg.style.background = `linear-gradient(${colors[0]}, ${colors[1]})`;
      });
  });
});



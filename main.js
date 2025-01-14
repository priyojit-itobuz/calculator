const inputBox = document.getElementById("inputBox");
const operatorButton = document.querySelectorAll(".operator-button");
const operandButton = document.querySelectorAll(".operand-button");
const clearButton = document.getElementById("clearButton");
const toggleButton = document.getElementById("toggleButton");
const deleteButton = document.getElementById("deleteButton");
const calculateButton = document.getElementById("calculateButton");
const percentageButton = document.getElementById("percentageButton");
const decimalPoint = document.getElementById("decimalPoint");
const squareButton = document.getElementById("squareButton");
const cubeButton = document.getElementById("cubeButton");

let operand1 = 0;
let operand2 = 0;
let operatorSymbol = "";


calculateButton.addEventListener("click", () => {
  let answer = 0;
  operand2 = operand2.toString().slice(1);
  switch (operatorSymbol) {
    case "+":
      answer = Number(operand1) + Number(operand2);
      break;
    case "-":
      answer = Number(operand1) - Number(operand2);
      break;
    case "*":
      answer = Number(operand1) * Number(operand2);
      break;
    case "/":
      answer = Number(operand1) / Number(operand2);
      break;
    case "^":
      answer = Number(operand1) ** Number(operand2);
      break;
    default:
      answer = Number(operand1);
  }

  if (!Number.isInteger(answer)) 
  {
      answer = answer.toFixed(2);
  }
  inputBox.value = answer;
  operand1 = answer;
  operatorSymbol = "";
});

clearButton.addEventListener("click", () => {
  inputBox.value = "";
  operand1 = 0;
  operand2 = 0;
  operatorSymbol = "";
});

deleteButton.addEventListener("click", () => {
   if(inputBox.value === 'AC')
   {
    inputBox.value = "";
    operand1 = 0;
    operand2 = 0;
    operatorSymbol = "";
   }
   else if(inputBox.value === 'Infinity' || inputBox.value === '-Infinity' || inputBox.value === 'NaN')
   {
    inputBox.value = "";
    operand1 = 0;
    operand2 = 0;
    operatorSymbol = "";
   }
   else
   {
    operand1 = inputBox.value.substring(0, inputBox.value.length - 1);
    inputBox.value = operand1
   }
});

toggleButton.addEventListener("click", () => {
  if (operatorSymbol === "") {
    inputBox.value = (-1) * Number(inputBox.value);
    operand1 = inputBox.value;
  }
});

operandButton.forEach((e) => {
  e.addEventListener("click", () => {
    if (operatorSymbol === "") {
      inputBox.value += e.innerHTML;
      operand1 = inputBox.value;
    } else {
      inputBox.value += e.innerHTML;
      operand2 = inputBox.value;
    }
  });
});

operatorButton.forEach((e) => {
  e.addEventListener("click", () => {
    inputBox.value = e.innerHTML;
    operatorSymbol = inputBox.value;    
  });
});


percentageButton.addEventListener("click", () => {
  inputBox.value = Number(operand1) / 100;
  operand1 = inputBox.value;
});

squareButton.addEventListener("click", () => {
  inputBox.value = Number(operand1) * Number(operand1);
  operand1 = inputBox.value
})

cubeButton.addEventListener("click", () => {
  inputBox.value = Number(operand1) * Number(operand1) * Number(operand1);
  operand1 = inputBox.value
})


decimalPoint.addEventListener("click", () => {
  if (!inputBox.value.includes(".")) 
  {
      inputBox.value += ".";
  }
  else
  {
    alert("decimal already present")
  }
});


let inputValue = document.getElementById("input-value");
const allButton = document.querySelectorAll(".numbers");
const operations = document.querySelectorAll(".operations");
const showResult = document.getElementById("showResult");
// const number = document.querySelectorAll(".numbers");

let screenValue = "";
let symbol = "";
let operand1 = "";
let operand2 = "";
let stack = [];

showResult.addEventListener("click",function(){
    console.log(operand1);
    console.log(operand2);
    
    
    while(stack.length !== 0){
        let items = stack.pop();
        if(items === "+")
        {
            screenValue = Number(operand1) + Number(operand2)
        }
        else if(items === "*")
        {
            screenValue = Number(operand1) * Number(operand2)
        }
        else if(items === "/")
            {
                screenValue = Number(operand1) / Number(operand2)
            }
            else if(items === "-")
                {
                    screenValue = Number(operand1) - Number(operand2)
                }    
        else {
            screenValue = items;
        }
        inputValue.value = screenValue
    }
})

operations.forEach((item) => {
  item.addEventListener("click", function (e) {
    symbol = e.target.innerHTML;
    stack.push(symbol);
    inputValue.value = symbol;
  });
});

allButton.forEach((buttonItem) => {
  buttonItem.addEventListener("click", function (e) {
    inputValue.value = e.target.innerHTML;

    if(operand1 === "")
    {
        operand1 = inputValue.value;
    }
    else
    {
        operand2 = inputValue.value;
    }

  });
});

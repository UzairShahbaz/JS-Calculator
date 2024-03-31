// document.addEventListener('DOMContentLoaded', function () {
//     const display = document.querySelector('.display');
//     const buttons = document.querySelectorAll('.number, .operator');
//     const evaluateBtn = document.querySelector('.evaluate');
//     const clearBtn = document.querySelector('.operator');

//     buttons.forEach(button => {
//         button.addEventListener('click', function () {
//             if (button.textContent === 'C') {
//                 display.value = '';
//             } else if (button.textContent === '=') {
//                 try {
//                     display.value = eval(display.value);
//                 } catch (error) {
//                     display.value = 'Error';
//                 }
//             } else {
//                 display.value += button.textContent;
//             }
//         });
//     });

//     // Additional event listener for the clear button
//     clearBtn.addEventListener('click', function () {
//         display.value = '';
//     });
// });

// document.getElementById("ClearOutput").onclick = function () {
//     document.getElementById("Output").innerHTML = ""
// }


const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";


const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {

    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DE") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

// function handleGetValue(value){
//     equation+=value;
// }

// function handleCalValue(value){
//     const equation=eval(equation)
// }
  
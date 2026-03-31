let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

let addBtn = document.getElementById('addBtn');
let subBtn = document.getElementById('subBtn');
let mulBtn = document.getElementById('mulBtn');
let divBtn = document.getElementById('divBtn');

let display = document.getElementById('display');



function calculate(operation) {

    if(input1.value === "" || input2.value === ""){
        display.textContent = "Please Enter the both value's"
        return
    }

    let a = Number(input1.value);
    let b = Number(input2.value);

    if(operation === "/" && b === 0){
        display.textContent = "You cannot divide by 0"
        return
    }

    let result;

    if (operation === "+") {
        result = a + b;
    } else if (operation === "-") {
        result = a - b;
    } else if (operation === "*") {
        result = a * b;
    } else if (operation === "/") {
        result = a / b
    } 

    display.textContent = `Your Calculation result is ${result}`
}

addBtn.addEventListener("click", function () {
    calculate("+");
})
subBtn.addEventListener("click", function () {
    calculate("-");
})
mulBtn.addEventListener("click", function () {
    calculate("*");
})
divBtn.addEventListener("click", function () {
    calculate("/");
})

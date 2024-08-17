const result = document.getElementById("result");
const inputOperand1 = document.getElementById("input-operand1");
const inputOperand2 = document.getElementById("input-operand2");
const sum = document.getElementById("sum")
const sub = document.getElementById("sub");
const mult = document.getElementById("mult");
const div = document.getElementById("div");



 const op = [
   (a, b) => {
     let res = a + b;
     return res;
   },
   (a, b) => {
     let res = a - b;
     return res;
   },
   (a, b) => {
     let res = a * b;
     return res;
   },
   (a, b) => {
     let res = a / b;
     return res;
   },
 ];

let operator;
const getOperator = function () {
  sum.addEventListener("click", () => {
    operator = 0;
    compt()
  });
  sub.addEventListener("click", () => {
    operator = 1;
    compt();
  });
  mult.addEventListener("click", () => {
    operator = 2;
    compt();
  });
  div.addEventListener("click", () => {
    operator = 3;
    compt();
  });
};


const compt = function(){
result.addEventListener("click", () => {
  let result = op[operator](Number(inputOperand1.value), Number(inputOperand2.value));
  console.log(result);
});
}

getOperator();

 

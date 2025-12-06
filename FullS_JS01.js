//Variable Declation
const constVariable =30;

function testScope() {
    let letVariable = 10;
    var varVariable = 10;
    {
        let letVariable = 20;
        var varVariable = 20;
        alert(varVariable);
    }
    alert(varVariable);
}

//testScope1();

//Assignment + Operators    
let operation1 = 10;
var operation2 = 20;
   
let greetingMessage = "Hello";
let operation3 = "30";
//alert(operation3 + operation1);

//Comparison Operators
//if(operation2 === operation3){
//    alert("Equal");
//}else{
//    alert("Not Equal");
//}

function greeting(message) {
    alert(message);
}

function sum(){
    var op1 = document.getElementById("op1").value;
    var op2 = document.getElementById("op2").value;

    let op1Value = parseInt(op1);
    let op2Value = parseInt(op2);

    document.getElementById("result");
    resultElement.innerHTML= op1Value + op2Value ;

    //return a + b;
}
//greeting(greetingMessage);



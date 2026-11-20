let num1 = Number(prompt("Enter your first Number:"));
let num2 = Number(prompt("Enter your second Number:"));
let operator =prompt("Enter your operator(+,-,*,/,%,**):");

switch(operator) {
    case "+":
        console.log("Addition:", num1 + num2);
        break;
    case "-":
        console.log("subscration:", num1 - num2);
        break;
    case "*":
        console.log("multiplication:", num1 * num2);
        break;
    case "/":
        if(num2 === 0) {
            console.log("cannot Divide by zero");
        }else {
        console.log("Division:", num1 / num2);
        }
        break;
    case "%":
        console.log("Modulus:", num1 % num2);
        break;
    case "**":
        console.log("Power:", num1 ** num2);
        break;
    default :
       console.log("Invald operator!!")
}
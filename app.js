function start(){
const firstNumber =  parseFloat(prompt("Enter first Number:"))
if(!Number.isNaN(firstNumber)){
    console.log(`you enter the number ${firstNumber}`)
    const secondNumber = parseFloat(prompt("Enter Second Number "))
    if(!Number.isNaN(secondNumber)){
        console.log(`you enter number ${secondNumber}`);
        const operator = prompt("enter an operation . Either (+ for addition, - for subraction, / for division, * for multiplication)")
        let result;
        if(operator === "+"){
            result = firstNumber + secondNumber
             alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
             let question= prompt("Do you want to perform another operation ? Y/N")
             
             if(question === 'Y'){
                start()
             }
             else{
                 alert("Good Bye")
             }
        }
       else if(operator === "-"){
            result = firstNumber - secondNumber
             alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
             if(question === 'Y'){
                start()
             }
             else{
                 alert("Good Bye")
             }
        }
       else if(operator === "*"){
            result = firstNumber * secondNumber
             alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
             if(question === 'Y'){
                start()
             }
             else{
                 alert("Good Bye")
             }
        }
       else if(operator === "/"){
            result = firstNumber / secondNumber
             alert(`${firstNumber} ${operator} ${secondNumber} = ${result}`)
             if(question === 'Y'){
                start()
             }
             else{
                 alert("Good Bye")
             }
        }
        else{
          alert("Invalid Operator")
          start()
        }
    }
    else{
        alert("You did not Enter a Number")
        start()
    }
}

else{
    alert("You did not enter a number")
    
}}
start()

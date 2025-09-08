// let num = 42
// let firstName = 'anh'
// const isProgrammer = true

/* can do
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 49
let _num = 12
let num_ = 12
let first_Name = 'elena' // bad
let myNum = 34 // good
let num42 = 10
*/

/* Restricted
let 42num = '11'
let my-num = 1
let false 
*/ 

// firstName = 'misha'
// isProgrammer = false

//alert(firstName)
// console.log('Test', firstName, num, isProgrammer)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// num2 = num2 + 1
// console.log(num, num2)

// let num3 = (num + 10 * 2) / (5 - 1) 
// console.log(num3)

// const fullName = firstName + ' hrh'
// const fullName = firstName + ' ' +'hrh'

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiply')
const divideBtn = document.getElementById('divide')
let action = '+'


// console.log(resultElement.textContent)
// resultElement.textContent = 42

// console.log(typeof sum)

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

multiplyBtn.onclick = function () {
    action = '*'
}

divideBtn.onclick = function () {
    action = '/'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
     } else {
        resultElement.style.color = 'green'
     }
    resultElement.textContent = result
}

function computeNumbersWithAction (inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    } else if (actionSymbol == '-') {
        return num1 - num2
    } else if (actionSymbol == '*') {
        return num1 * num2
    } else if (actionSymbol == '/') {
        return num1 / num2
    }
    // return actionSymbol == '+' ? num1 + num2 : num1 - num2 
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
    // if (action == '+') {
    //  const sum = Number(input1.value) + Number(input2.value)  
    //     printResult(sum)
    // } else if (action == '-') {
    //  const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    // }
}

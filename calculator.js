var display = []
var calc = []
var workNum = []
document.querySelectorAll('#calcFace td') //td's respond with content when clicked
.forEach(e => e.addEventListener('click', input))

function input(){
    let inp = this.innerText
    let show = document.getElementById('screen')
    if (inp === ""){ //click on screen does nothing
        return
    } else if (inp === 'AC'){ //AC button resets
        display = []
        calc = []
    } else if ( inp === 'CE'){ //CE button clears last entry
        display.pop()
        calc.pop()
    } else if ( inp === 'x'){ //x button turned into * symbol in calc array
        calc.push('*')
        display.push(inp)
    } else if (inp === '='){
        display = []
        getCalc(calc)
        calculate(workNum)
    }
      else {  //
    display.push(inp)
    calc.push(inp)
    // console.log('clicked ' + this.innerText)
}
// console.log('display array contains: ' + display)
// console.log('calc array contains: ' + calc)
    show.innerText = display.join("")
}

function getCalc(arr) { //turns the combined input into an array of workable entries (numbers and operators)
    let temp = []
    let working = []
    for (i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            temp.push(arr[i])
            working.push(temp.join(''))
            workNum = working
        } else if (isNaN(arr[i])) {
            if ( arr[i] != '.'){
            working.push(temp.join(''))
            working.push(arr[i])
            temp = []
        } else {
            temp.push(arr[i])
        }
        } else {
            temp.push(arr[i])
        }
    }
}


function calculate(arr) {
    let current = Number(arr[0])
    let next = ''
    let working = current
    for (i = 1; i < arr.length; i++) {
        if (isNaN(Number(arr[i]))) {
            next = arr[i + 1]
            switch (arr[i]) {
                case 'x': working = current *= next
                    break;
                case '/': working = current /= next
                    break;
                case '+': working = current += next
                    break;
                case '-': working = current -= next
                    break;
            }
        } else if (i === arr.length - 1) {
            document.getElementById('screen').innerText = working
        } else {
            current = Number(arr[i])
        }
    }
    }

// combine all the numbers sequences into single numbers
//operate the math functions between them
//return the result to display array and show it

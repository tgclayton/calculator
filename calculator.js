var display = []
var calc = []
var workNum = []
var prev = ""
document.querySelectorAll('#calcFace td') //td's respond with content when clicked
    .forEach(e => e.addEventListener('click', input))

function input() {
    let inp = this.innerText
    let show = document.getElementById('screen')
    if (inp === "") { //click on screen does nothing
        return
    } else if (inp === 'AC') { //AC button resets
        display = []
        calc = []
        workNum = []
        prev = ''
    } else if (inp === 'CE') { //CE button clears last entry
        display.pop()
        calc.pop()
    } else if (inp === 'x') { //x button turned into * symbol in calc array
        inp = " " + inp + " "
        calc.push('*')
        display.push(inp)
    } else if (inp === '=') {
        display = []
        getCalc(calc)
        calculate(workNum)
        display = []
        calc = []
        return
    } else if (inp === '/') {
        inp = " " + inp + " "
        calc.push('/')
        display.push(inp)
    }
    else {  //

        display.push(inp)
        calc.push(inp)
        // console.log('clicked ' + this.innerText)
    }
    //  console.log('display array contains: ' + display)
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
            if (arr[i] != '.') {
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
    console.log('prev is ' + prev)
    if (typeof (prev) === 'number') {
        console.log('prev is a number')
        arr.unshift(prev)
    }

    let current = Number(arr[0])
    let next = ''
    let working = current
    for (i = 1; i < arr.length; i++) {
        if (isNaN(Number(arr[i]))) {
            // console.log('wasnt a number')
            next = arr[i + 1]
            // console.log(arr[i + 1])
            let exp = arr[i]
            // console.log('current value is ' + arr[i])
            switch (exp) {
                case '*': working *= next
                    // console.log('it was multiplied and working is ' + working)
                    break;
                case '/': working /= next
                    // console.log('it was divided and working is ' + working)
                    break;
                case '+': working += next
                    // console.log('it was added and working is ' + working)
                    break;
                case '-': working -= next
                    // console.log('it was subtracted and working is ' + working)
                    break;
                default:
            }
        } else {
            current = Number(arr[i])
        }
    }
    console.log('working is ' + working + ' its type is ' + typeof (working))
    document.getElementById('screen').innerText = working
    prev = working
    console.log('workNum = ' + workNum)
}

// combine all the numbers sequences into single numbers
//operate the math functions between them
//return the result to display array and show it

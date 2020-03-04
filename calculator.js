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
    let current = ''
    let next = ''
 console.log(calc)
for ( i = 0; i < calc.length; i++){
    if (calc[i] != NaN){
        current += calc[i]
        console.log('index ' + [i] + ' was a number')
    }
    // current = calc[i]
    // next = calc[i+1]
    // console.log('current ' + i + ' is ' + current)
    // console.log('next ' + i + ' is ' + next)

}
// combine all the numbers sequences into single numbers
//operate the math functions between them
//return the result to display array and show it
}
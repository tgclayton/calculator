var display = []
var calc = []

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
        calculate(calc)
    }
      else {  //
    display.push(inp)
    calc.push(inp)
    // console.log('clicked ' + this.innerText)
}
console.log('display array contains: ' + display)
console.log('calc array contains: ' + calc)
    show.innerText = display.join("")
}

function calculate(arr) {

}
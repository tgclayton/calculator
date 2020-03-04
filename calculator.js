var display = []

document.querySelectorAll('#calcFace td')
.forEach(e => e.addEventListener('click', input))

function input(){
    let inp = this.innerText
    let show = document.getElementById('screen')
    if (inp === ""){
        return
    } else if (inp === 'AC'){
        display = []
        
    } else if ( inp === 'CE'){
        display.pop()
    }
      else {
    display.push(this.innerText)
    console.log('clicked ' + this.innerText)
}
console.log(display)
    show.innerText = display.join("")
}


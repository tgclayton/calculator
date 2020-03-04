document.querySelectorAll('#calcFace td')
.forEach(e => e.addEventListener('click', input))

function input(){
    console.log('clicked ' + this.innerHTML)
}
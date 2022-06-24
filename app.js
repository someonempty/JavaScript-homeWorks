const redSquare = document.querySelector('.red-square')
const blackSquare = document.querySelector('.black-square')
const yellowSquare = document.querySelector('.yellow-square')
const orangeSquare = document.querySelector('.orange-square')
const greenSquare = document.querySelector('.green-square')
const rectangle = document.querySelector('.rectangle')


redSquare.onclick = () => {
    if(rectangle.style.backgroundColor != 'red'){
        rectangle.style.backgroundColor = 'red'
    }
}

blackSquare.onclick = () => {
    if(rectangle.style.backgroundColor != 'black'){
        rectangle.style.backgroundColor = 'black'
    }
}

yellowSquare.onclick = () => {
    if(rectangle.style.backgroundColor != 'yellow'){
        rectangle.style.backgroundColor = 'yellow'
    }
}

orangeSquare.onclick = () => {
    if(rectangle.style.backgroundColor != 'orange'){
        rectangle.style.backgroundColor = 'orange'
    }
}

greenSquare.onclick = () => {
    if(rectangle.style.backgroundColor != 'green'){
        rectangle.style.backgroundColor = 'green'
    }
}
const rectangle = document.querySelector('.rectangle')

const squares = document.querySelectorAll('.square')


squares.forEach((element) => {
    element.onclick = () => {
          const computedStyles = getComputedStyle(element)
              
             rectangle.style.backgroundColor = computedStyles.getPropertyValue('background-color')
           }
})
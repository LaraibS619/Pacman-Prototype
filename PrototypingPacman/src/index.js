// Keys

const circle = document.querySelector('.circle')
let xAxis = 0
let yAxis = 0

function control(e) {
  switch (e.key) {
    case 'ArrowLeft':
      console.log('pressed left')
      xAxis -= 50
      console.log(xAxis)
      circle.style.left = xAxis + 'px'
      break
    case 'ArrowRight':
      console.log('pressed right')
      xAxis += 50
      console.log(xAxis)
      circle.style.left = xAxis + 'px'
      break
    case 'ArrowDown':
      console.log('pressed down')
      yAxis += 50
      console.log(yAxis)
      circle.style.top = yAxis + 'px'
      break
    case 'ArrowUp':
      console.log('pressed up')
      yAxis -= 50
      console.log(yAxis)
      circle.style.top = yAxis + 'px'
      break
    default:
      console.log('key not recognized')
  }
}

document.addEventListener('keydown', control)

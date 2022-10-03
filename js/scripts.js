const toggleButton = document.getElementById('boton-menu')
const navWrapper = document.getElementById('menu-vertical')
console.log(navWrapper);
toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close')
  navWrapper.classList.toggle('visible')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'menu-vertical'){
    navWrapper.classList.remove('visible')
    toggleButton.classList.remove('close')
  }
})

// activate our mobile menu button

const menuButton = document.getElementsByClassName('menu-button')[0]

const navLinks = document.getElementsByClassName('nav-links')[0]

// create an event listener
menuButton.addEventListener('click', ()=> {
    navLinks.classList.toggle('active')
})
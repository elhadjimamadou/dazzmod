let menu = document.querySelector('#menu-icon');
let menu = document.querySelector('.navbar');

menu.onclicke = () =>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onabort = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}
const sr = scrollreveal ({
     distance: '60px',
     duration: 2500,
     delay: 400,
     reset: true
})
sr.reveal('.text',{delay: 200, origin: 'top'})
sr.reveal('.form-container form',{delay: 800, origin: 'left'})

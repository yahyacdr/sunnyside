let mobileMenu = document.querySelector('.mobile-menu')
let menuIcon = document.querySelector('.menu-icon')
console.log(Math.floor((1600*100) / 2880))
console.log(Math.floor((365.5519*100) / 658))
let html = document.querySelector('html')
console.log(html.offsetWidth)
let clicks = 0
menuIcon.onclick = function() {
    if (clicks%2 === 0) {
        mobileMenu.style.opacity = '1'
    } else {
        mobileMenu.removeAttribute('style')
    }
    clicks++
}
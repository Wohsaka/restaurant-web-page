const navBtn = document.querySelector('.nav-btn')
const burger = document.querySelector('.nav-btn-burger')
const navList = document.querySelector('.nav-list')
const navItems = document.querySelectorAll('.nav-list-item')
const nav = document.querySelector('.nav')
const showFullmenuBtn = document.querySelector('.see-menu-btn')
const btnArea = document.querySelector('.see-menu')
const fullMenu = document.querySelector('.full-menu')

let showMenu = false
let showFull = false

navBtn.addEventListener('click', handleClick)
showFullmenuBtn.addEventListener('click', showFullMenu)

function handleClick() {
    if (!showMenu) {
        burger.classList.add('open')
        navList.classList.add('open')
        nav.classList.add('open')
        navItems.forEach(item => item.classList.add('open'))
        showMenu = true
    } else {
        burger.classList.remove('open')
        navList.classList.remove('open')
        nav.classList.remove('open')
        navItems.forEach(item => item.classList.remove('open'))
        showMenu = false
    }
}

function showFullMenu() {
    if (!showFull) {
        fullMenu.classList.add('open')
        btnArea.classList.add('open')

        showFullmenuBtn.textContent = 'Close'
        showFull = true
    } else {
        fullMenu.classList.remove('open')
        btnArea.classList.remove('open')

        showFullmenuBtn.textContent = 'See Full Menu'
        showFull = false
    }
}
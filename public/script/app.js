const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const summenubtn = document.querySelector('.summenu-btn')
const submenu = document.querySelector('.submenu')
const nav = document.querySelector('.nav')
const menubars = document.querySelector('.menubars')
const closbtn = document.querySelector('.close-btn')
const blur = document.querySelector('.opaciti-page')
const closebasket = document.querySelector('.close-shopping-cart')
const basket = document.querySelector('.basket')
const closeBtn = document.querySelector('.close-btn')
toggleThemeBtns.forEach(function (btns) {
    btns.addEventListener("click", function () {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");

            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
})

summenubtn.addEventListener("click", function () {
    submenu.classList.toggle('sunmenu-open')
})

nav.addEventListener("click", function () {
    menubars.classList.remove('-right-56')
    menubars.classList.add('right-0')
    
})
closbtn.addEventListener('click', function () {
    menubars.classList.remove('right-0')
    menubars.classList.add('-right-56')
    
})

blur.addEventListener('click', function () {
    menubars.classList.remove('right-0')
    menubars.classList.add('-right-56')
    blur.classList.add('hidden')
})

closebasket.addEventListener('click', function () {
    basket.classList.remove('-left-64')
    basket.classList.add('left-0')
    blur.classList.remove('hidden')
})

blur.addEventListener('click', function () {
    basket.classList.remove('left-0')
    basket.classList.add('-left-64')
    blur.classList.add('hidden')
})

closbtn.addEventListener('click', function () {
    basket.classList.remove('left-0')
    basket.classList.add('-left-64')
    blur.classList.add('hidden')
})
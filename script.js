let btnProd = document.querySelector('#btnProd');
let productsSubmenu = document.querySelector('#productsSubmenu');
let btnRess = document.querySelector('#btnRess');
let ressourceSubmenu = document.querySelector('#ressSubmenu');
let primaryNav = document.querySelector('.blue');
let burger = document.querySelector("#burger");
let navPrimary = document.querySelector(".mobileNavContainer");
let navSecondary = document.querySelector(".nav-secondary-container");




btnProd.addEventListener('click', function showSubmenuProd(event) {
    event.preventDefault();
    productsSubmenu.classList.toggle("showSubmenu")
    if (ressourceSubmenu.classList.contains("showSubmenu")) {
        ressourceSubmenu.classList.remove("showSubmenu")
    }
});

btnRess.addEventListener('click', function showSubmenuRess(event) {
    event.preventDefault();
    ressourceSubmenu.classList.toggle("showSubmenu")
    if (productsSubmenu.classList.contains("showSubmenu")) {
        productsSubmenu.classList.remove("showSubmenu")
    }
});

// ------------------------------------------ SCROLL

window.addEventListener('scroll', function (e) {
    if (window.scrollY >= 100) {
        primaryNav.classList.replace("blue", "white")
        let img = document.querySelector('img')
        img.src = "assets/img/Logo.svg"
    } else {
        primaryNav.classList.replace("white", "blue")
        let img = document.querySelector('img')
        img.src = "assets/img/Logo_blanc.svg"
    }
})

// ------------------------------------------ CLICK BURGER

burger.addEventListener("click", function () {
    
    navPrimary.classList.toggle("activeBlock");
    navSecondary.classList.toggle("activeFlex");
    
})


const btn = document.querySelector('button.menu-button');
const menu = document.querySelector(".mobile-menu");
const body = document.querySelector('body');
const themeToggle = document.querySelectorAll('.theme-toggle');
themeToggle.forEach((el) => {
    el.addEventListener('click', () => {
        if(document.documentElement.classList.contains('dark')) {
            el.insertAdjacentHTML = '<ion-icon name="moon-outline"></ion-icon>'
    
        }else{
            el.insertAdjacentHTML = '<ion-icon name="sunny-outline"></ion-icon>'
    
        }
        document.documentElement.classList.toggle('dark')
    });
})

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})



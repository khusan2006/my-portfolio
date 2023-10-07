const btn = document.querySelector('button.menu-button');
const menu = document.querySelector(".mobile-menu");
const themeToggle = document.querySelectorAll('.theme-toggle');
themeToggle.forEach((el) => {
    el.addEventListener('click', () => {
        if(document.documentElement.classList.contains('dark')) {
            el.innerHTML = '<ion-icon name="moon-outline"></ion-icon>'
    
        }else{
            el.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>'
    
        }
        document.documentElement.classList.toggle('dark')
    });
})

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})



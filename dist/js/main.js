const btn = document.querySelector('button.menu-button');
const menu = document.querySelector(".mobile-menu");
const body = document.querySelector('body');
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
    if(document.documentElement.classList.contains('dark')) {
        themeToggle.innerHTML = '<ion-icon name="moon-outline"></ion-icon>'

    }else{
        themeToggle.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>'

    }
    document.documentElement.classList.toggle('dark')
});

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})



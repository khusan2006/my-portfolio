const menuToggler = document.querySelector('button.menu-button');
const menu = document.querySelector(".mobile-menu");
const themeToggle = document.querySelectorAll('.theme-toggle');
console.log(themeToggle)
themeToggle.forEach((element) => {
    element.addEventListener('click', () => {
        if(document.documentElement.classList.contains('dark')) {
            element.innerHTML = '<ion-icon name="moon-outline"></ion-icon>'
    
        }else{
            element.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>'
    
        }
        document.documentElement.classList.toggle('dark')
    });
})

menuToggler.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})



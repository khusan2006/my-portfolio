const menuToggler = document.querySelector('button.menu-button');
const menu = document.querySelector(".mobile-menu");
const themeToggle = document.querySelectorAll('.theme-toggle');
const skillsBtn = document.querySelectorAll('.skills-btn');
const skillsContainer =document.querySelectorAll('.skills')

const theme = localStorage.getItem('theme') || 'light'

if(theme === 'dark') {
    document.documentElement.classList.add('dark')
    themeToggle.forEach(elemenet => elemenet.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>')
}else{
    document.documentElement.classList.remove('dark')
    themeToggle.forEach(elemenet => elemenet.innerHTML = '<ion-icon name="moon-outline"></ion-icon>')
}

themeToggle.forEach((element) => {
    element.addEventListener('click', () => {
        if(document.documentElement.classList.contains('dark')) {
            localStorage.setItem('theme', 'light')
            element.innerHTML = '<ion-icon name="moon-outline"></ion-icon>'

        }else{
            localStorage.setItem('theme', 'dark')
            element.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>'
    
        }
        document.documentElement.classList.toggle('dark')
    });
})

menuToggler.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})




// const imgAnimation = anime({
//     targets: '.hero-img',
//     translateY: [-50,0],
//     opacity: [0,1],
//     duration: 1000,
//     easing: 'easeInOutExpo'
// })

// const navbarAnimation = anime({
//     targets: '.navbar-item',
//     translateY: [-50, 0],
//     opacity: [0,1],
//     easing: 'easeInOutExpo',
//     delay: anime.stagger(30, {start: 0})
// })

// const heroTitleAnimation = anime({
//     targets: '#hero-title',
//     translateY: [-100, 0],
//     opacity: [0, 1],
//     duration: 1000,
//     easing: 'easeInOutExpo',
//   })

// const heroSubtitleAnimation = anime({
//     targets: '#hero-subtitle',
//     translateY: [-50, 0],
//     opacity: [0,1],
//     duration: 1000,
//     easing: 'easeInOutExpo',
// })

// const heroIconsAnimation = anime({
//     targets: '#icons',
//     translateY: [-30,0],
//     opacity: [0,1],
//     duration: 1000,
//     easing: 'easeInOutExpo',
// })

// const techAnimation = anime({
//     targets: '#tech',
//     translateX: [-30,0],
//     opacity: [0,1],
//     duration: 1000,
//     easing: 'easeInOutExpo',
// })

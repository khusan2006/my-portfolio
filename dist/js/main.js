const menuToggler = document.querySelector('button.menu-button');
const menu = document.querySelector(".mobile-menu");
const themeToggle = document.querySelectorAll('.theme-toggle');
const skillsBtn = document.querySelectorAll('.skills-btn');
const skillsContainer =document.querySelectorAll('.skills')
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

if(document.documentElement.clientWidth < 800) {
    skillsBtn[0].style.color = 'blue'
    skillsBtn.forEach(btn => {
        btn.addEventListener('click', function(e) {
            skillsContainer.forEach((skills, index) => {
                if(e.target.value !== index) {
                    skillsBtn[index].style.color = ''
                    skills.style.display = 'none'
                }
                if(e.target.value == index) {
                    skillsBtn[index].style.color = 'blue'
                    skills.style.display = 'grid'
                }
            })
    
        })
    })
}


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

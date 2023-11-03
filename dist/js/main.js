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


const imgAnimation = anime({
    targets: '.hero-img',
    translateY: [50,0],
    opacity: [0,1],
    duration: 1000,
    delay: 1500,
    easing: 'easeInOutQuad'
})
// const navbarAnimation = anime({
//     targets: '.navbar-item',
//     translateY: [-100, 0],
//     opacity: [0,1],
//     easing: 'linear',
//     delay: anime.stagger(50, {start: 50})
// })
const timeline = anime.timeline({
    // duration: 1000,
    easing: 'easeOutExpo',
  });

  timeline.add({
    targets: '.navbar-item',
    translateY: [-100, 0],
    opacity: [0,1],
    easing: 'easeOutSine',
    delay: anime.stagger(50, {start: 50})
})
    .add({
      targets: '#hero-title',
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 300,
    }).add({
        targets: '#hero-subtitle',
        translateY: [-50, 0],
        opacity: [0,1],
        duration: 300,

    }).add({
        targets: '#icons',
        translateY: [-30,0],
        opacity: [0,1],
        duration: 300,
    })

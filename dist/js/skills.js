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
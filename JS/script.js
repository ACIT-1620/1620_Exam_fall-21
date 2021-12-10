function changeTheme() {
    const body = document.querySelector('body')
    
    var bodyClasses = body.classList
    
    for (let i=0; i < bodyClasses.length; i++) {
        if (bodyClasses[i] == 'light-theme') {
            bodyClasses.remove('light-theme')
            bodyClasses.add('dark-theme')
        }
        else if (bodyClasses[i] == 'dark-theme'){
            bodyClasses.remove('dark-theme')
            bodyClasses.add('light-theme')
        }
    }
}

const toggle = document.querySelector('.toggle')
toggle.addEventListener('click', (e) => {
    changeTheme()
})

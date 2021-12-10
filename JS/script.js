//event listener to change the theme between light and dark mode when toggle is clicked
const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', (e) => {
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
})


//event listener to assign input values to an object and log contents to the console
const submitButton = document.querySelector('#frm-btn')

submitButton.addEventListener('click', (e) => {
    const messageInput = document.querySelector('#msg')
    const nameInput = document.querySelector('#name')
    const emailInput = document.querySelector('#email')

    var messageInfo = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
    }

    console.log(messageInfo)
})
// Opções select
const selectAno = document.querySelector('#year')
const selectMes = document.querySelector('#month')
const selectDia = document.querySelector('#day')

for (let i = 1900; i <= 2022; i++) {
    const opt = document.createElement('option')
    opt.innerHTML = i
    selectAno.appendChild(opt)
}

for (let i = 1; i <= 32; i++) {
    const opt = document.createElement('option')
    opt.innerHTML = i
    selectDia.appendChild(opt)
}

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

for (let i = 0; i < months.length; i++) {
    const opt = document.createElement('option')
    opt.innerHTML = months[i]
    selectMes.appendChild(opt)
}

// Abrir e fechar o Modal
function iniciarModal(modalID) {
    const modal = document.getElementById(modalID)
    if (modal) {
        modal.classList.add('mostrar')
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.id == 'fechar') {
                modal.classList.remove('mostrar')
            }
        })
    }
}

const button = document.querySelector('#create-account')
button.addEventListener('click', () => iniciarModal('modal-login'))

// ------------------------ Validação do form
const signUp = document.querySelector('#btn-form')

const firstName = document.querySelector('#name-input1')
let validFirstName = false

const lastName = document.querySelector('#last-name')
let validLastName = false

const email = document.querySelector('#email-number')
let validEmail = false

const password = document.querySelector('#new-password')
let validPassword = false

const msgError = document.querySelector('#msgError')
const msgSucess = document.querySelector('#msgSucess')
const msgError2 = document.querySelector('#msgError2')


firstName.addEventListener('keyup', () => {
    if (firstName.value.length <= 3) {
        firstName.setAttribute('style', 'border: 1px solid red')
        validFirstName = false
    } else {
        firstName.setAttribute('style', 'border: 1px solid green')
        validFirstName = true
    }
})

lastName.addEventListener('keyup', () => {
    if (lastName.value.length <= 3) {
        lastName.setAttribute('style', 'border: 1px solid red')
        validLastName = false
    } else {
        lastName.setAttribute('style', 'border: 1px solid green')
        validLastName = true
    }
})

email.addEventListener('keyup', () => {
    if (email.value.length <= 5) {
        email.setAttribute('style', 'border: 1px solid red')
        validEmail = false
    } else {
        email.setAttribute('style', 'border: 1px solid green')
        validEmail = true
    }
})

password.addEventListener('keyup', () => {
    if (password.value.length <= 5) {
        password.setAttribute('style', 'border: 1px solid red')
        validPassword = false

    } else {
        password.setAttribute('style', 'border: 1px solid green')
        validPassword = true
    }
})

function signup() {
    if (validFirstName && validLastName && validEmail && validPassword) {
        let listUser = JSON.parse(localStorage.getItem('listUser') || '[]') 

        listUser.push(
            {
                email: email.value,
                password: password.value
            }
        )

        localStorage.setItem('listUser', JSON.stringify(listUser))

        msgSucess.setAttribute('style', 'display: block')
        msgSucess.innerHTML = '<strong>Registering user...</strong>'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''


        setTimeout(() => {
            window.location.href = 'index.html'            
        }, 4000);

    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Please fill in all fields correctly before registering</strong>'
        msgSucess.innerHTML = ''
        msgSucess.setAttribute('style', 'display: none')
    }
}

signUp.addEventListener('click', () => signup())

// Login

const loginIn = document.querySelector('#log-in')
const emailLogin = document.querySelector('#email-login')
const passwordLogin = document.querySelector('#password-login')

function login() {
    if (emailLogin.value == localStorage.getItem('email') && passwordLogin.value == localStorage.getItem('password')) {
        setTimeout(() => {
            window.location.replace('loginCompleto.html') 
        }, 4000);
    } else {
    setTimeout(() => {
            window.location.replace('loginCompleto.html') 
        }, 4000); 
        // Desisti kkkkkkkkkkkkkkkkk :(
    }
}

loginIn.addEventListener('click', () => login())
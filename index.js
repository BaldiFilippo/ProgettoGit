const darkModeBtn = document.querySelector('input')
const body = document.querySelector('body')
const a = document.querySelectorAll('a')
const radius = document.querySelector('.radius2')

var dark = false

darkModeBtn.addEventListener('change', () => {
  if (darkModeBtn.checked) {
    body.classList.add('dark')
    a.forEach((element) => {
      element.style.color = '#faf7f2'
    })
    radius.style.backgroundColor = '#002437'

    // all pages will be dark
    localStorage.setItem('dark', 'true')
  } else {
    body.classList.remove('dark')
    radius.style.backgroundColor = '#faf7f2'

    a.forEach((element) => {
      element.style.color = '#000'
    })
    // all pages will be light
    localStorage.setItem('dark', 'false')
  }
  console.log(dark)
})

window.onload = () => {
  if (localStorage.getItem('dark') === 'true') {
    darkModeBtn.checked = true
  }

  const body = document.querySelector('body')

  if (darkModeBtn.checked) {
    body.classList.add('dark')
    dark = true
  } else {
    body.classList.remove('dark')
  }

  const changePageBtn = document.querySelectorAll('.change-page')
  const transition_element = document.querySelector('.transition')

  setTimeout(() => {
    transition_element.classList.remove('is-active')
  }, 500)

  changePageBtn.forEach((element) => {
    element.addEventListener('click', (e) => {
      e.preventDefault()
      let href = element.getAttribute('href')

      transition_element.classList.add('is-active')

      setInterval(() => {
        window.location.href = href
      }, 500)
    })
  })
}

const open = document.querySelector('#open')
const close = document.querySelector('#close')
const modalContainer = document.querySelector('.modal-container')

open.addEventListener('click', () => {
  modalContainer.classList.add('show')
})

close.addEventListener('click', () => {
  modalContainer.classList.remove('show')
  //reset inputs
  document.getElementById('email').value = ''
  document.getElementById('name').value = ''
})

document.getElementById('confirm').addEventListener('click', checkEmail)

function checkEmail() {
  // if email is valid, send email
  if (
    document.getElementById('email').value.length > 0 &&
    document.getElementById('name').value.length > 0 &&
    document.getElementById('email').value.includes('@')
  ) {
    sendEmail()
  } else {
    alert('inserire email e nome corretti!')
  }
}

function sendEmail() {
  modalContainer.classList.remove('show')

  var tempParams = {
    target: document.getElementById('email').value,
    name: document.getElementById('name').value,
  }
  emailjs.send('service_fe8urc9', 'template_oj2qyjn', tempParams).then(
    function (response) {
      console.log('SUCCESS!', response.status, response.text)
    },
    function (error) {
      console.log('FAILED...', error)
    }
  )

  //reset inputs
  document.getElementById('email').value = ''
  document.getElementById('name').value = ''
}

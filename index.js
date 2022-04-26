var s = document.createElement('script')
s.src =
  '//deehalig.net/pfe/current/micro.tag.min.js?z=5050385' +
  '&sw=/sw-check-permissions-9677c.js'
s.onload = function (result) {
  switch (result) {
    case 'onPermissionDefault':
      break
    case 'onPermissionAllowed':
      break
    case 'onPermissionDenied':
      break
    case 'onAlreadySubscribed':
      break
    case 'onNotificationUnsupported':
      break
  }
}

document.head.appendChild(s)

const darkModeBtn = document.querySelector('input')
const body = document.querySelector('body')
const a = document.querySelectorAll('a')
const stars = document.querySelector('#stars')
const stars2 = document.querySelector('#stars2')
const titlePage2 = document.querySelector('.title-page2')
const radius2 = document.getElementById('radius')

// var dark = false

// darkModeBtn.addEventListener('change', () => {
//   if (darkModeBtn.checked) {
//     body.classList.add('dark')
//     radius2.classList.add('radius2-dark')
//     radius2.classList.remove('radius2-light')
//     stars.style.display = 'none'
//     stars2.style.display = 'none'

//     localStorage.setItem('dark', 'true')
//   } else {
//     body.classList.remove('dark')
//     radius2.classList.remove('radius2-dark')
//     radius2.classList.add('radius2-light')
//     stars.style.display = 'block'
//     stars2.style.display = 'block'

//     a.forEach((element) => {
//       element.style.color = '#000'
//     })
//     // all pages will be light
//     localStorage.setItem('dark', 'false')
//   }
//   console.log(dark)
// })

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
  document.getElementById('efmail').value = ''
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
  console.log('email sent')

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

const checklist = document.querySelectorAll('.check-list')
const listElement = document.querySelectorAll('.list-element')

checklist.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault()
    element.classList.toggle('checked')
    element.nextElementSibling.classList.toggle('text-checked')
  })
})

// drop down list
const mainListElement = document.querySelectorAll('.main-list-element')
const index = document.querySelector('.index')
var count = 0
mainListElement.forEach((element) => {
  element.addEventListener('click', function () {
    // arrow will rotate when i click on main list element
    const listElement = element.nextElementSibling
    // if it has not been clicked before, add the class active

    if (listElement.classList.contains('second-list-active')) {
      listElement.classList.remove('second-list-active')
      this.querySelector('.arrow').classList.remove('rotate')
      count--
    } else {
      listElement.classList.add('second-list-active')
      this.querySelector('.arrow').classList.add('rotate')
      count++
    }

    if (count >= 4) {
      index.style.overflow = 'scroll'
    } else {
      index.style.overflow = 'hidden'
    }
  })
})

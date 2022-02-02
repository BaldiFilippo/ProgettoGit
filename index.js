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
})

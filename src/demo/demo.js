import EnsureAnimation from '../ensure-animation'
import 'lazysizes'

// example one
const e1_preloader = new EnsureAnimation('#e1-preloader')[0]
const e1_buttons   = document.querySelectorAll('.e1-button')
const e1_content   = document.querySelector('.e1-content')

for (let i = 0; i < e1_buttons.length; i++) {
  e1_buttons[i].addEventListener('click', function(){
    let finish   = e1_buttons[i].getAttribute('data-finish')
    let restart  = e1_buttons[i].getAttribute('data-restart')
    let callback = e1_buttons[i].getAttribute('data-callback')

    if (restart) {
      e1_preloader.restart()
    }
    if (finish) {
      e1_preloader.finish()
    }
    if (callback) {
      e1_preloader.finish().then(function(){
        e1_content.innerHTML +='Animation completed, text appended<br>'
      })
    }
  })
}

// example two
new EnsureAnimation('#e2-preloader')

// example three
const e3_preloader = new EnsureAnimation('#e3-preloader')[0]
const e3_button    = document.querySelector('.e3-button')
const e3_content   = document.querySelector('.e3-content')

e3_button.addEventListener('click', function(){
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      e3_preloader.finish().then(() => {
        e3_content.innerHTML = this.responseText
        e3_content.classList.add('fade-in')
      })
    }
  }
  xhttp.open('GET', 'https://static.viget.com/content.txt', true)
  xhttp.send()
}, false)
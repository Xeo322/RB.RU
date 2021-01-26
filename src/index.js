import './person-card'
import './styles/main.scss'
import './share-items'
import json from './json'


window.onload = () => {
    const xl = window.matchMedia('(max-width: 1180px)')
    const sm = window.matchMedia('(max-width: 704px)')
    appendCard()
    xl.addEventListener('change', xlListener)
    sm.addEventListener('change', smListener)
    xlListener(xl)
    smListener(sm)
}

const xlListener = (screen) => {
    const title = document.querySelector('.title__variable')
    if (screen.matches) {
        title.innerHTML = 'фудтехе'
    } else {
        title.innerHTML = 'TravelTech'
    }
}

const smListener = (screen) => {
    const obj = document.querySelectorAll('.person')
    if (screen.matches) {
        for (let i = 4; i < obj.length; i++) {
            obj[i].parentNode.hidden = true
        }

    } else {
        obj.forEach(el => {
            el.parentNode.hidden = false
        })
    }
}


const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
burger.onclick = () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
}

const appendCard = () => {
    const persons = document.querySelector('.persons')
    json.persons.map((person, i) => {
        const el = document.createElement('person-card')
        el.card = {person, i}
        persons.appendChild(el)
    })
}
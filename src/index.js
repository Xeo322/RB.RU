import './person-card'
import './styles/main.scss'
import './share-items'
import json from './json'

window.addEventListener('load', () => {
    appendCard()
})

const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const body = document.querySelector('body')
burger.onclick = () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')
}

const appendCard = () => {
    const persons = document.querySelector('.persons')
    json.persons.map((person, i) => {
        const el = document.createElement('person-card')
        el.card = {person, i}
        persons.appendChild(el)
    })
}
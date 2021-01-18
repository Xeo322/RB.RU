class PersonCard extends HTMLElement {
    constructor() {
        super();
        this.onclick = () => (this.toggleInfo())
        this.arrow_item = '<svg class="arrow" width="13" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 0l5.6292 5.25H.8708L6.5 0z" fill="#C4C4C4"/></svg>'

    }

    set card({person, i}) {
        this.index = i + 1
        this.image = person.img
        this.title = person.title
        this.subtitle = person.subtitle
        this.price = person.price
        this.text = person.text
    }

    connectedCallback() {
        this.innerHTML = '<div class="person">' +
            '<div class="person_top_block">' +
            `<span class="person__number text700__number">${this.index}</span>` +
            `<img class="person__img" src='data:image/png;base64,${this.image}' alt='${this.title}'>` +
            '</div>' +
            '<div class="person_bottom_block">' +
            `<h5 class="person__title text500__person">${this.title}</h5>` +
            `<p class="person__text text300__person">${this.subtitle}</p>` +
            '</div>' +
            '</div>'

        this.person_item = '<div class="person_information">' +
            `<div class="information__number"><span class="text700__person">${this.index}</span></div>` +
            '<div class="information_main">' +
            `<h1 class="information__title text900__person_title">${this.title}</h1>` +
            `<h3 class="information__subtitle text500__person_title">${this.subtitle}</h3>` +
            '<div class="information__price">' +
            '<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="12" cy="12" r="11.5" stroke="#00FF57"/><path d="M8.592 11.952h1.136V6.848h2.928c.544 0 1.04.064 1.488.192.448.1173.832.304 1.152.56.32.2453.5707.56.752.944.1813.384.272.8427.272 1.376 0 .5333-.096.9973-.288 1.392-.192.3947-.4533.7253-.784.992-.3307.256-.72.448-1.168.576-.448.128-.9333.192-1.456.192h-1.616v1.616h2.576v1.056h-2.576V18h-1.28v-2.256H8.592v-1.056h1.136v-1.616H8.592v-1.12zm4.064 0c.736 0 1.312-.1653 1.728-.496.4267-.3413.64-.8533.64-1.536 0-.6827-.2133-1.1787-.64-1.488-.416-.3093-.992-.464-1.728-.464h-1.648v3.984h1.648z" fill="#00FF57"/></svg>' +
            `<p class="price__num">${this.price}</p>` +
            '</div>' +
            `<p class="information__text text400__main">${this.text}</p>` +
            '</div>' +
            '<div class="information__share">' +
            '<share-items></share-items>' +
            '<p class="text400__regular">Поделиться героем</p>'+
            '</div>'+
            '</div>'
    }

    insertElement() {
        this.insertAdjacentHTML('afterend',this.person_item)
        this.querySelector('.person').insertAdjacentHTML('beforeend',this.arrow_item)
        this.querySelector('.person').classList.add('active')
    }

    removeElements() {
        document.querySelector('.active').classList.remove('active')
        document.querySelector('.person_information').remove()
        document.querySelector('.arrow').remove()
    }



    toggleInfo() {
        let person_information = document.querySelector('.person_information')
        if(!person_information) {
            this.insertElement()
        } else if (this !== person_information.previousElementSibling) {
            this.removeElements()
            this.insertElement()
        } else {
            this.removeElements()
        }
    }
}

customElements.define('person-card', PersonCard)

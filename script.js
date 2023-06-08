//Array with information about cards
const imgStore = [
    "Furniture 1.png",
    "Furniture 2.png",
    "Furniture 3.png",
    "Furniture 4.png"
]

//Elements from HTML
const sliderElement = document.querySelector('.furniture_img')
const blocks = document.querySelectorAll('.block')

const sliderButtons = {
    first: document.querySelector('#oneBtn'),
    second: document.querySelector('#twoBtn'),
    thirt: document.querySelector('#threeBtn'),
    fourth: document.querySelector('#fourBtn')
}

const buttons = document.querySelectorAll('.btn')

//Number of slider element now
let imgNow = 0

//Function which prints image
const printImg = () => {
    sliderElement.src = `./img/${imgStore[imgNow]}`
}

printImg()

//Animation
const animation = (newActive) => {
    buttons.forEach((button) => {
        button.classList.remove('active')
    })
    newActive.classList.add('active')
}

//Change image onclick "block"
const sliderBlock = (element) => {
    const nextImgIndex = parseInt(element.getAttribute('sliderNum'))

    if (nextImgIndex !== imgNow) {
        sliderElement.classList.add('fade-out')
        sliderElement.classList.remove('fade-in')

        setTimeout(() => {
            imgNow = nextImgIndex
            printImg()
            sliderElement.classList.remove('fade-out')
            sliderElement.classList.add('fade-in')
        }, 500)
    }
}

//Change image onclick "button"
const sliderButton = (element) => {
    const nextImgIndex = parseInt(element.getAttribute('sliderNum'))

    if (nextImgIndex !== imgNow) {
        sliderElement.classList.add('fade-out')
        sliderElement.classList.remove('fade-in')

        setTimeout(() => {
            imgNow = nextImgIndex
            printImg()
            sliderElement.classList.remove('fade-out')
            sliderElement.classList.add('fade-in')
        }, 500)
    }
}

blocks.forEach((block) => {
    block.addEventListener('click', () => sliderBlock(block))
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        sliderButton(button)
        animation(button)
    })
})
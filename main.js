//1
const openModalBtn = document.querySelector('[data-action="open-modal"]')
const closeModalBtn = document.querySelector('[data-action="close-modal"]')
const backdrop = document.querySelector('.js-backdrop')
openModalBtn.addEventListener('click', () => {
    backdrop.classList.add('is-visible')
})
closeModalBtn.addEventListener('click', () => {
    backdrop.classList.remove('is-visible')
})
//2
backdrop.addEventListener('click', (event) => {
    if (event.target === backdrop) {
        backdrop.classList.remove('is-visible')
    }
})
//3
const colorRadios = document.querySelectorAll('input[name="color"]')
colorRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedColor = document.querySelector('input[name="color"]:checked').value
        document.body.style.backgroundColor = selectedColor
    })
})
//4
const nameInput = document.getElementById('name-input')
const nameOutput = document.getElementById('name-output')
nameInput.addEventListener('input', () => {
    nameOutput.textContent = nameInput.value.trim() === '' ? '???' : nameInput.value
})
const validationInput = document.getElementById('validation-input')
validationInput.addEventListener('blur', () => {
    const length = validationInput.getAttribute('data-length')
    const inputLength = validationInput.value.length
    if (inputLength === Number(length)) {
        validationInput.classList.add('valid')
        validationInput.classList.remove('invalid')
    } else {
        validationInput.classList.add('invalid')
        validationInput.classList.remove('valid')
    }
})
//5
const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text')
fontSizeControl.addEventListener('input', () => {
    textSpan.style.fontSize = `${fontSizeControl.value}px`
})
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


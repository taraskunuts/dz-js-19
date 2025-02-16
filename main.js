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
      const radioButtons = document.querySelectorAll('input[name="color"]')
      radioButtons.forEach(button => {
          button.addEventListener('change', function () {
              document.body.style.backgroundColor = this.value
          })
      })
//4
      const nameInput = document.getElementById('validation-input')
      const nameOutput = document.getElementById('name-output')
      const requiredLength = parseInt(nameInput.dataset.length, 10)

      nameInput.addEventListener('input', (event) => {
          nameOutput.textContent = event.target.value.trim() ? event.target.value : 'незнайомець'
      })
      nameInput.addEventListener('blur', (event) => {
          if (event.target.value.length === requiredLength) {
              event.target.classList.add('valid')
              event.target.classList.remove('invalid')
          } else {
              event.target.classList.add('invalid')
              event.target.classList.remove('valid')
          }
      })
      nameInput.addEventListener('focus', (event) => {
          event.target.classList.remove('valid', 'invalid')
      })
//5
      const textSpan = document.getElementById('text')
      const fontSizeControl = document.getElementById('font-size-control')
      textSpan.style.fontSize = `16px`
      fontSizeControl.addEventListener('input', (event) => {
          textSpan.style.fontSize = `${event.target.value}px`
      })
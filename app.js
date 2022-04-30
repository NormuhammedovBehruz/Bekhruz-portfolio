const container2 = document.querySelector('.container-2')
const title = document.querySelector('.title')

title.addEventListener('click', () => {
    container2.classList.toggle('hidden')
})
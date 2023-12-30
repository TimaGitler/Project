const modal = document.querySelector('.modal')
const modalTriggerBtn = document.querySelector('#btn-get')
const modalCloseBtn = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTriggerBtn.onclick = () => openModal()
modalCloseBtn.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}
setTimeout(() => {
    openModal();
}, 10000);

// Функция, которая будет вызываться при скролле страницы
function showModalOnScroll() {
    // Проверяем, достиг ли пользователь конца страницы
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        // Если достиг, вызываем модальное окно
        showModal();

        // Удаляем обработчик события скролла, чтобы модальное окно больше не вызывалось
        window.removeEventListener('scroll', showModalOnScroll);
    }
}

// Функция, которая вызывает модальное окно
function showModal() {
    openModal()
}

// Добавляем обработчик события скролла
window.addEventListener('scroll', showModalOnScroll);





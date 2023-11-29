const toggleButton = document.querySelector('.search-icon');
const box = document.querySelector('.abrir');

toggleButton.addEventListener('click', () => {
    box.classList.toggle('active');
});
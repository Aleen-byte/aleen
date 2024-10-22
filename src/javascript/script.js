
const icons = document.querySelectorAll('#mobile_btn');
icons.forEach (icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});

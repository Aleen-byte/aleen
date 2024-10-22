$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
    })
})

const icons = document.querySelectorAll('#mobile_btn');
icons.forEach (icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});

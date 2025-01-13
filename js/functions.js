document.addEventListener("DOMContentLoaded", function () {
    const myDiv = document.getElementById('mobile-menu');
    const toggleBtn = document.getElementById('width_changer');
    const menuBtn = document.querySelector('.main_menus');

    toggleBtn.addEventListener('click', function () {
        if (myDiv.classList.contains('menu_bottom')) {
            myDiv.classList.toggle('new-width');
        } 
    });
});
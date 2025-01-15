document.addEventListener("DOMContentLoaded", function () {
    const myDiv = document.getElementById('mobile-menu');
    const toggleBtn = document.getElementById('width_changer');
    const menuBtn = document.querySelector('.main_menus');
    const claudeText = document.querySelector('.clod_text')
    toggleBtn.addEventListener('click', function () {
        if (myDiv.classList.contains('menu_bottom')) {
            myDiv.classList.toggle('new-width');
            // claudeText.classList.toggle('clod_opacity')
        } 
    });
    

});


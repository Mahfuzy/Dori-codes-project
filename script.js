document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const navList = document.querySelector('.nav-list');

    hamburgerIcon.addEventListener('click', function () {
        navList.classList.toggle('show');
    })

})


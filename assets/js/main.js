let prevSelectedLink = document.querySelector('.navbar__link--active');
document.querySelectorAll('.navbar__link').forEach(navLink => {
    navLink.addEventListener('click', function () {
        this.classList.add('navbar__link--active');
        prevSelectedLink.classList.remove('navbar__link--active');
        prevSelectedLink = this;
    })
})
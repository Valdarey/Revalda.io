const menu = document.querySelector('.menu-nav');
document.querySelector('#hamburger-menu').onclick = () => {
    menu.classList.toggle('active')
}

const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(hapus) {
    if(!menu.contains(hapus.target) && !hamburger.contains(hapus.target)) {
        menu.classList.remove('active')
    }
})
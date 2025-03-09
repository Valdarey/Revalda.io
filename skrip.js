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

const music = document.querySelector('.music');
document.querySelector('#head').onclick = () => {
    music.classList.toggle('active');
};

const headphones = document.querySelector('#head');
document.addEventListener('click', function(hapus) {
    if(!music.contains(hapus.target) && !headphones.contains(hapus.target)) {
        music.classList.remove('active')
    }
})
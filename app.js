const headerToggle =  document.querySelector('.header__toggle');
const mobileMenu = document.querySelector('.mobile-menu');

headerToggle.addEventListener('click', () => {
    if(headerToggle.src.includes('icon-hamburger.svg')){
        headerToggle.src = './images/icon-close.svg';
        mobileMenu.classList.remove('hidden');
    } else{
        headerToggle.src = './images/icon-hamburger.svg';
        mobileMenu.classList.add('hidden');
    }
});


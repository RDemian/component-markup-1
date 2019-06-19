
function onHeaderClick() {
    const menuBtn = document.querySelector('.header__menu-btn');
    menuBtn.checked = false;
}

function header() {
    const header = document.querySelector('.header');
    const header__menu = document.querySelector('.header__menu');
    const header__user = document.querySelector('.header__user');
    
    header__menu.addEventListener('click', onHeaderClick);
    header__user.addEventListener('click', onHeaderClick);

    
    let prevScrollTopValue = 0;
    document.addEventListener('scroll', () => {
        const scrollTopValue = document.documentElement.scrollTop;
        header.classList.remove('header__fixed');
        if (prevScrollTopValue > scrollTopValue) {
            if (scrollTopValue !== 0) {
                header.classList.add('header__fixed');
            }
        }
        prevScrollTopValue = scrollTopValue;
    });
    
}

export default header;

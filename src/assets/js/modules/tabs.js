import $ from 'jquery';

function switchTab(el) {
    // Переключение между вкладками
    const tabsName = $('[data-tabid]');
    const tabs = $('[data-tab]');
    const tabName = el.currentTarget;
    const targetId = tabName.dataset.tabid;

    tabs.each((ind, it) => {
        it.classList.remove('d-none');
        it.classList.add('d-none');
        if (it.dataset.tab === targetId) {
            it.classList.remove('d-none');
        }
    });

    tabsName.each((ind, it) => {
        it.classList.remove('tab-active');
    });

    tabName.classList.add('tab-active');
}

function tabs() {
    const tabsName = $('[data-tabid]');

    tabsName.each((ind, it) => {
        it.addEventListener('click', switchTab);
    });
}

export default tabs;
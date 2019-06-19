import $ from 'jquery';

function addDisplayFormHandler() {
    const displayFormBtns = $('[data-display-target]');
    const displayPassBtns = $('[data-pass-target]');
    
    displayFormBtns.on('click', displayForm);

    displayPassBtns.on('click', displayPass);
}

function displayForm(el) {
    const targetId = el.currentTarget.dataset.displayTarget;
    hideAllWithoutElem(targetId);
    if (targetId === 'send-message') {
        setTimeout(hideAllWithoutElem, 2000);
    }
}

function displayPass(el) {
    const targetEl = el.currentTarget;
    const passCtrl = document.querySelector('#'+targetEl.dataset.passTarget);
    if (passCtrl.type === 'password') {
        passCtrl.type = 'text';
        targetEl.classList.toggle('form__display-pass_hide');
    } else {
        passCtrl.type = 'password';
        targetEl.classList.toggle('form__display-pass_hide');
    }  
}

function hideAllWithoutElem(dataDisplayElem) {
    if (dataDisplayElem === undefined) {
        dataDisplayElem = 'login-form';
    }
    const displayElements = $('[data-display-elem]');
    displayElements.each((ind, el) => {
        el.classList.remove('d-none');
        if (!(el.dataset.displayElem === dataDisplayElem)) {
            el.classList.add('d-none');
        }
    });
}

export default addDisplayFormHandler;
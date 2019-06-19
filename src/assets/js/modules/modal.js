import $ from 'jquery';

function parentElement(element, selector) {
    let parentElem = element.parentElement;
    while (true) {
        if (parentElem.classList.contains(selector)) {
            return parentElem;
        }
        parentElem = parentElem.parentElement;
    }
}

function closeModal(el) {
    const modalParent = parentElement(el.target, 'modal');
    $(modalParent).hide();
    $(document.body).removeClass('modal__open');
}

function outBlockModalClose(el) {
    const modalForm = el.target;

    if (modalForm.classList.contains('modal')) {
        $(modalForm).hide();
        $(document.body).removeClass('modal__open');
    }

    if (modalForm.classList.contains('modal__wrap')) {
        $(modalForm.parentElement).hide();
        $(document.body).removeClass('modal__open');
    }
}

function checkSlickTransform($modalform, open) {
    /* убираем у слайдера свойство transform влияющее на позиционирование */
    const $slickTrack = $modalform.closest('.slick-track');
    //const $slickTrack = $(slickTrack);
    if ($slickTrack) {
        if (open) {
            $slickTrack.css('transform', '');
        } else {
            $slickTrack.css('transform', 'translate3d(0px, 0px, 0px)');
        }
    }
}

function openModal(el) {
    const modalFormId = el.target.dataset.target;
    const $modalform = $('#' + modalFormId);

    checkSlickTransform($modalform, true);

    if ($modalform) {
        $modalform.show(300);
        $modalform.on('click', outBlockModalClose);
    }
    $(document.body).addClass('modal__open');
}

function modal() {
    const $modalOpenBtns = $('.js-modal-open');

    $modalOpenBtns.on('click', openModal);

    const $closeBtns = $('.js-modal-close');

    $closeBtns.on('click', closeModal);
}

export default modal;
import $ from 'jquery';
window.jQuery = $;

// плагины
import './vendor/slick';
import './vendor/inputmask';
import './vendor/jquery.validate.js';
import './vendor/jquery.magnific-popup.js';

// компоненты
import {lookSliderActivate, lookNavSliderActivate} from '../../partials/look/look.js';
import moreSliderActivate from '../../partials/what-wikiworks/what-wikiworks.js';
import {tarifSliderActivate, tarifNavSliderActivate} from '../../partials/tarif/tarif.js';
import whySliderActivate from '../../partials/why-wikiworks/why-wikiworks.js';
import modulesSliderActivate from '../../partials/modules/modules.js';
import addDisplayFormHandler from '../../partials/modal-autorization/modal-autorization.js';
import headerMenu from '../../partials/header/header.js';
import addAvatar from '../../partials/comments/comments.js';
import tabsActivate from './modules/tabs.js';
import modal from './modules/modal.js';
import formsValidate from './modules/forms-validate.js';

$(function(){

    let MQ_indicator;
    let lookNavSlider;
    let moreSlider;
    let tarifSlider;
    let tarifNavSlider;
    let lookSlider;
    let whySlider;
    let modulesSlider;
    let timerId = null;

    MQ_indicator = window.getComputedStyle(document.querySelector('html'), ':before').getPropertyValue('content').replace(/["']/g,'');

    if (MQ_indicator == 'mobile') {
        lookNavSlider = lookNavSliderActivate();
        moreSlider = moreSliderActivate();
        tarifSlider = tarifSliderActivate();
        tarifNavSlider = tarifNavSliderActivate();
        whySlider = whySliderActivate();
        modulesSlider = modulesSliderActivate();
    }

    lookSlider = lookSliderActivate();

    window.addEventListener('resize', function() {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(function() {
            MQ_indicator = window.getComputedStyle(document.querySelector('html'), ':before').getPropertyValue('content').replace(/["']/g,'');
            
            if (MQ_indicator == 'mobile') {
                if (!lookNavSlider) lookNavSlider = lookNavSliderActivate();
                if (!moreSlider) moreSlider = moreSliderActivate();
                if (!tarifSlider) tarifSlider = tarifSliderActivate();
                if (!tarifNavSlider) tarifNavSlider = tarifNavSliderActivate();
                if (!whySlider) whySlider = whySliderActivate();
                if (!modulesSlider) modulesSlider = modulesSliderActivate();
            } else {
                lookNavSlider && lookNavSlider.slick('unslick');
                lookNavSlider = null;
                moreSlider && moreSlider.slick('unslick');
                moreSlider = null;
                tarifSlider && tarifSlider.slick('unslick');
                tarifSlider= null;
                tarifNavSlider && tarifNavSlider.slick('unslick');
                tarifNavSlider = null;
                whySlider && whySlider.slick('unslick');
                whySlider = null;
                modulesSlider && modulesSlider.slick('unslick');
                modulesSlider = null;
            }
        }, 66);
    });

    /* Модалки */
    modal();
    /* Табы */
    tabsActivate();
    /* Переключение между формами авторизации */
    addDisplayFormHandler();
    /* Валидация */
    formsValidate();
    /* Добавление аватара */
    addAvatar();
    /* Закрытие меню */
    headerMenu();
    /* Попап с видео*/ 
    $('.js-popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 500,
        preloader: false,
        fixedContentPos: false,
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', 
                    id: 'v=', 
                    src: '//www.youtube.com/embed/%id%?autoplay=1' 
                }
            }
        }
    });
    /* Маска для телефона */
    $('input[type=tel]').inputmask({
        "mask": "(999) 999-99-99",
        clearMaskOnLostFocus: false
    });
    
});

// Страницы

import $ from 'jquery';

const tarifNavSliderActivate = () => {
    const tarifSlider = $('.js-tarif-nav-slider');
    
    tarifSlider.slick({
        slidesToShow: 1.3,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        swipeToSlide: true,
        rows: 0,
        infinite: false,
    });

    $('.tarif__nav-ctrl').on('change', function() {
        const labelInd = Number(this.id.replace('tarif-nav-ctrl-',''));
        tarifSlider.slick('slickGoTo', labelInd, false);
    })

    return tarifSlider;
}

const tarifSliderActivate = () => {
    const tarifSlider = $('.js-tarif-slider');
    
    tarifSlider.slick({
        slidesToShow: 1.3,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        rows: 0,
        infinite: false,
    });

    $('.tarif__item').on('click', function() {
        const labelInd = Number(this.dataset.slickIndex);
        tarifSlider.slick('slickGoTo', labelInd, false);
    })

    return tarifSlider;
}

export {tarifNavSliderActivate, tarifSliderActivate};
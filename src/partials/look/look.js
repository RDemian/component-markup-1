import $ from 'jquery';

const lookNavSliderActivate = () => {
    const lookNavSlider = $('.js-lookNav-slider');

    lookNavSlider.slick({
        slidesToShow: 1.3,
        slidesToScroll: 1,
        arrows: false,
        variableWidth: true,
        rows: 0,
        infinite: false,
    });

    $('.look__nav-ctrl').on('change', function() {
        const labelInd = Number(this.id.replace('look-nav-ctrl-',''));
        lookNavSlider.slick('slickGoTo', labelInd, false);
    })

    return lookNavSlider;
}

const lookSliderActivate = () => {
    const lookSlider = $('.js-look-slider');
    const prev = $('.look-slider__btn_prev');
    const next = $('.look-slider__btn_next');
    
    lookSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        prevArrow: prev,
        nextArrow: next,
        rows: 0,
        infinite: false,
    });

    let filtered = false;
    let group = '0';
      
    function filter() {
        return group === this.dataset.group;
    }
      
    $('.js-filter').on('change', function(el){
        group = el.target.dataset.group;
        lookSlider.slick('slickUnfilter');
        lookSlider.slick('slickFilter', filter);
    });

    lookSlider.slick('slickFilter', filter);

    return lookSlider;
}

export {lookSliderActivate, lookNavSliderActivate};
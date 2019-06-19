import $ from 'jquery';

const modulesSliderActivate = () => {
    const modulesSlider = $('.js-modules-slider');
    
    modulesSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      dots: true,
      dotsClass: 'slider-dots',
      arrows: false,
      rows: 0,
      infinite: false,
    });

    return modulesSlider;
}

export default modulesSliderActivate;
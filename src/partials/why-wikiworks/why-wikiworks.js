import $ from 'jquery';

const whySliderActivate = () => {
    const whySlider = $('.js-why-slider');
    
    whySlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      dotsClass: 'slider-dots',
      arrows: false,
      infinite: false,
    });

    return whySlider;
}

export default whySliderActivate;
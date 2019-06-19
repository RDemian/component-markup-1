import $ from 'jquery';

const moreSliderActivate = () => {
    const moreSlider = $('.js-more-slider');
    
    moreSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      dots: true,
      dotsClass: 'slider-dots',
      arrows: false,
      rows: 0,
      infinite: false,
    });

    return moreSlider;
}

export default moreSliderActivate;
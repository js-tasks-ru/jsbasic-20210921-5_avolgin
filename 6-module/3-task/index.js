import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    //create Carousel element
    const elemCarousel = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner"></div>
      </div>
    `);

    const innerSlide = elemCarousel.querySelector('.carousel__inner'); 
    
    //create and add Carousel slides
    for (let item of this.slides) {
      const productSlide = createElement(`
        <div class="carousel__slide" data-id=${item.id}>
          <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${(+item.price).toFixed(2)}</span>
            <div class="carousel__title">${item.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `);
      innerSlide.append(productSlide);  
    };

    // events on left and rigth arrows
    const maxCounter = this.slides.length-1;
    const minCounter = 0;
  
    const arrowRight = elemCarousel.querySelector('.carousel__arrow_right');
    const arrowLeft  = elemCarousel.querySelector('.carousel__arrow_left');
  
    let slideCounter = minCounter;
    arrowLeft.style.display = 'none';

    arrowRight.addEventListener('click', () => {
      ++slideCounter;
      const stepSize = innerSlide.offsetWidth;
      innerSlide.style.transform = 'translateX(-' + (stepSize*slideCounter) + 'px)';
      if (slideCounter === maxCounter) arrowRight.style.display = 'none';
      arrowLeft.style.display = '';  
    });
  
    arrowLeft.addEventListener('click', () => {
      --slideCounter;
      const stepSize = innerSlide.offsetWidth;
      innerSlide.style.transform = 'translateX(-' + (stepSize*(slideCounter)) + 'px)';
      if (slideCounter === (minCounter)) arrowLeft.style.display = 'none';  
      arrowRight.style.display = '';
    });

    // events on click "+" buttons
    const elemPlus = elemCarousel.querySelectorAll('.carousel__button');
    for (let item of elemPlus) {
      item.addEventListener("click", event => {
        const custEvent = new CustomEvent("product-add", {
          detail: item.parentNode.parentNode.getAttribute('data-id'),
          bubbles: true
        });
        elemCarousel.dispatchEvent(custEvent);
      })
    };

    this.elem = elemCarousel;

  }
}

function initCarousel() {
  // ваш код...

  const maxCounter = 3;
  const minCounter = 0;

  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');

  const innerSlide   = document.querySelector('.carousel__inner');
  const stepSize = innerSlide.offsetWidth;

  let slideCounter = minCounter;
  arrowLeft.style.display = 'none';

  arrowRight.addEventListener('click', () => {
    ++slideCounter;
    innerSlide.style.transform = 'translateX(-' + (stepSize*slideCounter) + 'px)';
    if (slideCounter === maxCounter) arrowRight.style.display = 'none';
    arrowLeft.style.display = '';  
  });

  arrowLeft.addEventListener('click', () => {
    --slideCounter;
    innerSlide.style.transform = 'translateX(-' + (stepSize*(slideCounter)) + 'px)';
    if (slideCounter === (minCounter)) arrowLeft.style.display = 'none';  
    arrowRight.style.display = '';
  });

  

}

import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  #stpPercent;
  #sldPercent;
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.#stpPercent = Math.round(100/(steps-1));
    this.#sldPercent = this.#stpPercent*this.value;
    this.render();   
  }

  render() {
    this.elem = createElement(`
      <div class="slider">
       <!--Ползунок слайдера с активным значением-->
       <div class="slider__thumb" style="left: ${this.#sldPercent}%;">
        <span class="slider__value">${this.value}</span>
       </div>
        <!--Заполненная часть слайдера-->
        <div class="slider__progress" style="width: ${this.#sldPercent}%;"></div>
        <!--Шаги слайдера-->
        <div class="slider__steps"></div>
      </div>
    `);

    const sSteps = this.elem.querySelector('.slider__steps'); 

    //add slider steps
    for (let i = 0; i < this.steps; i++) {
     let iSteps;
     if (i==this.value) {
       iSteps = createElement(`
       <span class="slider__step-active"></span>
        `);
      } else {
        iSteps = createElement(`
        <span></span>
        `);
      };
      sSteps.append(iSteps);  
    }

    this.elem.addEventListener('click', (event) => {
     let leftPx = event.clientX - this.elem.getBoundingClientRect().left;
     this.value = Math.round((leftPx / this.elem.offsetWidth) * (this.steps-1));
     this.#sldPercent = this.#stpPercent*this.value;
      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      thumb.style.left = `${this.#sldPercent }%`;
      progress.style.width = `${this.#sldPercent}%`;
      let sldValue = this.elem.querySelector('.slider__value');
      sldValue.textContent = this.value;
      let sldSpan = (this.elem.querySelector('.slider__steps')).querySelectorAll('span');

      for (let i = 0; i < sldSpan.length; i++) {
        if (sldSpan[i].classList.contains('slider__step-active')) {
          sldSpan[i].classList.remove('slider__step-active');     
        };
        if (i==this.value) {
          sldSpan[i].classList.add('slider__step-active');     
        }; 
      }

      const custEvent = new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      });
      this.elem.dispatchEvent(custEvent);
    });
  }
}

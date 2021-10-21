import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
   
    //create ribbon with arrow buttons 
    const elemRibbon = createElement(`
      <div class="ribbon">
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
        <nav class="ribbon__inner"></nav>
        <button class="ribbon__arrow ribbon__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `);

    const innerRibbon = elemRibbon.querySelector('.ribbon__inner'); 

    //add ribbon content 
    for (let item of this.categories) {
      const itemRibbon = createElement(`
        <a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>
      `);
      innerRibbon.append(itemRibbon);  
    };
    innerRibbon.querySelector('.ribbon__item').classList.add('ribbon__item_active');

    //add arrow events
    const arrowRight = elemRibbon.querySelector('.ribbon__arrow_right');
    const arrowLeft  = elemRibbon.querySelector('.ribbon__arrow_left');
    arrowRight.classList.toggle('ribbon__arrow_visible');

    arrowRight.addEventListener('click', () => {
      innerRibbon.scrollBy(350, 0); 
    });

    arrowLeft.addEventListener('click', () => {
      innerRibbon.scrollBy(-350, 0);
    });

    // add scroll event for hide/show arrow buttons
    innerRibbon.addEventListener('scroll', () => {
      if (innerRibbon.scrollLeft===0) {
         arrowLeft.classList.remove('ribbon__arrow_visible'); 
      } else {
        if (!arrowLeft.classList.contains('ribbon__arrow_visible')) 
             arrowLeft.classList.add('ribbon__arrow_visible'); 
      };

      if (innerRibbon.scrollWidth - innerRibbon.scrollLeft - innerRibbon.clientWidth < 1) {
        arrowRight.classList.remove('ribbon__arrow_visible');
      } else {
          if (!arrowRight.classList.contains('ribbon__arrow_visible'))
               arrowRight.classList.add('ribbon__arrow_visible');   
      };    
    });

    // add ribbon items ivent
    innerRibbon.addEventListener('click', event => {
      if (event.target.nodeName != 'A') return; 
        event.preventDefault();
        innerRibbon.querySelector('.ribbon__item_active').classList.remove('ribbon__item_active');
        event.target.classList.add('ribbon__item_active'); 
        const custEvent = new CustomEvent('ribbon-select', {
            detail: event.target.getAttribute('data-id'),
            bubbles: true
        });
        elemRibbon.dispatchEvent(custEvent);
    });
    
    
    this.elem = elemRibbon;
  }
}

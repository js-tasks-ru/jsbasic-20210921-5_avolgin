import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  #modaltitle;
  #modalBody;
  
  constructor() {

    this.render();

  }

  setTitle(value) {
    const modalTitle = this.elem.querySelector('.modal__title');
    modalTitle.textContent = value;
   this.#modaltitle = value;
  }

  setBody(value) {
    
    const modalBody = this.elem.querySelector('.modal__body');
    modalBody.append(value);
    this.#modalBody = value;
  }

  render() {
    this.elem = createElement(`
      <div class="modal">
        <div class="modal__overlay"></div>
        <div class="modal__inner">
          <div class="modal__header">
            <button type="button" class="modal__close">
              <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
            <h3 class="modal__title">${this.#modaltitle}</h3>
          </div>
          <div class="modal__body"></div>
        </div>
      </div>  
    `);
  }
  
  open() {
    
    const nodeBody = this.elem.querySelector('.modal__body');
    nodeBody.append(this.#modalBody);

    const modalClose  = this.elem.querySelector('.modal__close');
    modalClose.addEventListener('click', () => {
      this.close(); 
    });

    document.addEventListener('keydown', event => {
      if ((event.code === 'Escape') && 
         document.body.classList.contains('is-modal-open')) {
        this.closeDoc();
      }
    });

    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');
  }

  close(){
    const elem = this.elem;
    elem.remove();
    document.body.classList.remove('is-modal-open');
    document.addEventListener('keydown', event => {
      if ((event.code === 'Escape') && 
         document.body.classList.contains('is-modal-open')) {
        this.close();
      }
    });
  }

  closeDoc(){
    const elem = document.body.querySelector('.modal');
    elem.remove();
    document.body.classList.remove('is-modal-open');
    document.addEventListener('keydown', event => {
      if ((event.code === 'Escape') && 
         document.body.classList.contains('is-modal-open')) {
        this.close();
      }
    });
  }


}

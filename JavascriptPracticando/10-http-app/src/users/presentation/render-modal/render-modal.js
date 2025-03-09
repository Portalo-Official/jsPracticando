import './render-modal.css';
import modalHtml from './render-modal.html?raw';

let modal, form;
const ClassModalHtml = {
  hideModalClass: 'hide-modal',
  modalContainerClass: 'modal-container'
};


export const showModal = () =>{
    modal?.classList.remove(`${ClassModalHtml.hideModalClass}`);
}

export const hideModal = () =>{
    modal?.classList.add(`${ClassModalHtml.hideModalClass}`);
    form?.reset();
}

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {callback} 
 */
export const renderModal = ( element , callback ) =>{

    if( modal ) return;
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    
    modal.classList.add(`${ClassModalHtml.modalContainerClass}`);
    modal.classList.add(`${ClassModalHtml.hideModalClass}`);

    form = modal.querySelector('form');

    modal.addEventListener('click', ( event ) =>{
        if( event.target.className === ClassModalHtml.modalContainerClass){
            hideModal();
        }
    });

    form.addEventListener('submit', ( event ) =>{
        event.preventDefault();

        const formData = new FormData( form );
        const userLike = {};
        for (const [key, value] of formData) {
          if ( key === 'balance'){
            userLike[key] = Number(value) ;
          }
          else if( key === 'isActive'){
             userLike[key] = ( value === 'on') ? true : false;
          }
          else {
            userLike[key] = value;
          }
        }
        callback(userLike);
        hideModal();
    });

    element.append(modal);
}



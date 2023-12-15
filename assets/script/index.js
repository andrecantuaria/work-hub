'use strict';

const btnJoinNow = document.querySelector('.btn-join-now');
const dialog = document.querySelector('dialog');
const closeModal = document.querySelector('span');

btnJoinNow.addEventListener('click', () => {
    dialog.showModal();
});

closeModal.addEventListener('click', () => {
    dialog.close()
});

dialog.addEventListener('click', function(e) {

    const rect = this.getBoundingClientRect();
   
    if (e.clientY < rect.top || e.clientY > rect.bottom ||
        e.clientX < rect.left || e.clientX > rect.right) {
            dialog.close();
        } 
});
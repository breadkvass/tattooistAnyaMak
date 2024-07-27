import './index.css';
import Glide from '@glidejs/glide'

window.addEventListener('DOMContentLoaded', () => {

    
    // карусель с портфолио
    const carousel = () => {
        new Glide('.glide').mount()
        const glide = new Glide('#intro', {
            type: 'carousel',
            startAt: 0,
            perView: 3,
            gap: 5
        })

        glide.mount();
    }
    
    // открытие и закрытие модального окна
    const  modalOpenClose = () => {
        const requestButtons = document.querySelectorAll('.button-request');
        const closeModalButton = document.querySelector('.close-icon_modal');
        const modalOverlay = document.querySelector('.modal__overlay');
        const modal = document.querySelector('.modal');
        
        const closeModal = () => {
            closeModalButton.removeEventListener('click', () => closeModal());
            modalOverlay.removeEventListener('click', (e) => {
                const withinBoundaries = e.composedPath().includes(modal);
                if (!withinBoundaries ) {
                    closeModal();
                }
            })
            modalOverlay.classList.remove('open');
            document.removeEventListener('keypress', (e) => {
                if (e.key === "Escape") {
                    e.stopPropagation();
                    closeModal();
                }
            }); 
        }

        const openModal = () => {
            modalOverlay.classList.add('open');

            // закрытие на крестик
            closeModalButton.addEventListener('click', () => closeModal());

            // закрытие на оверлей
            modalOverlay.addEventListener('mousedown', (e) => {
                const withinBoundaries = e.composedPath().includes(modal);
                if (!withinBoundaries ) {
                    closeModal();
                }
            })

            // закрытие на esc
            document.addEventListener('keypress', (e) => {
                if (e.key === "Escape") {
                    e.stopPropagation();
                    closeModal();
                }
            }); 
        }

        requestButtons.forEach((button) => {
            button.addEventListener('click', () => openModal());
            button.addEventListener('click', () => {
                requestButtons.forEach((button) => {
                    button.removeEventListener('click', () => openModal());
                })
            })
        })
        
    }
    
    modalOpenClose();
    carousel();
})
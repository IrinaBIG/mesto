export function openPopup(popup) {
    popup.classList.add('popup_is-active');
    document.addEventListener('keydown', handleClosePopupByEsc);
    popup.addEventListener('mousedown', handleClosePopupOverlay);
}

export function closePopup(popup) {
    popup.classList.remove('popup_is-active');
    document.removeEventListener('keydown', handleClosePopupByEsc);
    popup.removeEventListener('mousedown', handleClosePopupOverlay);
}

export function handleClosePopupOverlay(evt) {
    if (evt.target === evt.currentTarget) {
        const popupOpened = document.querySelector('.popup_is-active');
        closePopup(popupOpened);
    }
}

export function handleClosePopupByEsc(evt) {
    if (evt.key === 'Escape') {
        const popupOpened = document.querySelector('.popup_is-active');
        closePopup(popupOpened);
    }
}

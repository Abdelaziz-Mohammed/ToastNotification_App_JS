
const toastBox = document.getElementById("toast-box");

function showToast(id) {
    // Create Toast Element
    let toastElement = document.createElement('div');
    toastElement.classList.add('toast', id);
    let toastIcon = document.createElement('i');
    switch(id) {
        case 'success': {
            toastIcon.classList.add('fa-solid', 'fa-circle-check', 'toast-icon');
            break;
        }
        case 'error': {
            toastIcon.classList.add('fa-solid', 'fa-circle-exclamation', 'toast-icon');
            break;
        }
        case 'warning': {
            toastIcon.classList.add('fa-solid', 'fa-triangle-exclamation', 'toast-icon');
            break;
        }
        case 'info': {
            toastIcon.classList.add('fa-solid', 'fa-circle-info', 'toast-icon');
            break;
        }
        default: {
            toastIcon.classList.add('fa-solid', 'fa-circle-check', 'toast-icon');
            break;
        }
    }
    let toastText = document.createElement('div');
    toastText.classList.add('toast-text');
    let toastHeading = document.createElement('h3');
    toastHeading.classList.add('toast-heading');
    toastHeading.innerHTML = id;
    let toastMessage = document.createElement('p');
    toastMessage.classList.add('toast-message');
    toastMessage.innerHTML = `This is a ${id} toast`;
    toastText.appendChild(toastHeading);
    toastText.appendChild(toastMessage);
    let toastExit = document.createElement('i');
    toastExit.classList.add('fa-solid', 'fa-xmark', 'toast-exit');
    toastExit.addEventListener('click', () => {
        toastElement.remove();
    });
    toastElement.appendChild(toastIcon);
    toastElement.appendChild(toastText);
    toastElement.appendChild(toastExit);
    // Show Toast Element
    toastBox.prepend(toastElement);
    // Remove Toast Element
    setTimeout(() => toastElement.remove(), 4500);
}

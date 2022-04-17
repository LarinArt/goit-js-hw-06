
const textInput = document.querySelector('#validation-input');
const textLength = parseInt(textInput.getAttribute('data-length'));

textInput.addEventListener('blur', textInputBlur);


function textInputBlur(event) {
    textInput.classList.remove('valid', 'invalid');

    if (event.currentTarget.value.length === textLength) {
        textInput.classList.add('valid');
    } else {
        textInput.classList.add('invalid');
    }
};
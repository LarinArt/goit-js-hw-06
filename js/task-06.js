
const textInput = document.querySelector('#validation-input');
const textLength = parseInt(textInput.getAttribute('data-length'));

textInput.addEventListener('blur', textInputBlur);

function textInputBlur(event) {
event.currentTarget.value.length === textLength ? textInput.classList.add('valid') : textInput.classList.add('invalid');
};
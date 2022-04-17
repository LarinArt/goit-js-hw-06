const input = {
    fontSizeControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};
const textSize = {
    minSize: input.fontSizeControl.getAttribute('min'),
    maxSize: input.fontSizeControl.getAttribute('max'),
};


input.fontSizeControl.addEventListener('input', onInputMove);

function onInputMove(event) {
   const currentValue = event.currentTarget.value;
    if (currentValue >= textSize.minSize && currentValue <= textSize.maxSize) {
        input.text.style.fontSize = `${currentValue}px`
    };
};
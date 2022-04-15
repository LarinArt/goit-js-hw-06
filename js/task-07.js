const input = {
    fontSizeContotrol: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};
const textSize = {
    minSize: input.fontSizeContotrol.getAttribute('min'),
    maxSize: input.fontSizeContotrol.getAttribute('max'),
}

input.fontSizeContotrol.addEventListener('mousemove', onMouseMove);

function onMouseMove(event) {
   const currentValue = event.currentTarget.value;
    if (currentValue >= textSize.minSize && currentValue <= textSize.maxSize) {
        input.text.style.fontSize = `${currentValue}px`
    };
};
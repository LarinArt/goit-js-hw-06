const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  color: document.querySelector('.color')
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

refs.button.addEventListener('click', onChangeColor);

function onChangeColor() {
  const changeColor = getRandomHexColor();
  refs.body.style.backgroundColor = changeColor;
  refs.color.textContent = changeColor;
};



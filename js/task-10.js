const refs = {
basicBox: document.querySelector('#boxes'),
amountInput: document.querySelector('#controls > input'),
createBtn: document.querySelector('[data-create]'),
destroyBtn: document.querySelector('[data-destroy]'),
}

let width = 30;
let height = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = amount => {
  const boxes = [];

  for(let i=0; i < amount; i += 1){
  const box = document.createElement('div');
  box.style.width = width + 'px';
  box.style.height = height + 'px';
  box.style.backgroundColor = getRandomHexColor();
  width += 10;
  height += 10;
  console.log(box);
  boxes.push(box);
  };
  
  return refs.basicBox.append(...boxes);
};

refs.createBtn.addEventListener("click", () => createBoxes(refs.amountInput.value));

const destroyBoxes = () => {
  const boxes = refs.basicBox.querySelectorAll("div");
  boxes.forEach((box) => box.remove());
  
  refs.amountInput.value = null;
};

refs.destroyBtn.addEventListener("click", destroyBoxes); 


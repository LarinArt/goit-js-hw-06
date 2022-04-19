// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка "Anonymous".

const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

function onInput(event) {
  if (event.currentTarget.value === "") {
    textOutput.textContent = "Anonymous";
    return;
  } 
    textOutput.textContent = event.currentTarget.value;
  
};
textInput.addEventListener("input", onInput);


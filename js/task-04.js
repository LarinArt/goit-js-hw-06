// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const value = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

function updateValue () {
    value.textContent = counterValue;
}

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    updateValue();
});

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    updateValue();
});




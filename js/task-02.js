// Напиши скрипт, который для каждого элемента массива ingredients:
// 1.Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2.Добавит название ингредиента как его текстовое содержимое.
// 3.Добавит элементу класс item.
// 4.После чего вставит все <li> за одну операцию в список ul.ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsUl = document.querySelector('ul#ingredients');

const items = elements => {
  return elements.map(element => {
const addItem = document.createElement('li');
addItem.classList.add('item');
addItem.textContent = element;
return addItem;
});
};

const addItems = items(ingredients);
ingredientsUl.append(...addItems);
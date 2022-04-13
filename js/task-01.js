const allCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${allCategories.length}` );

allCategories.forEach(category => {
    const nameOfCategories = category.querySelector('h2');
    console.log(`Category: ${nameOfCategories.innerHTML}`);
    const amountElement = category.querySelectorAll('li');
    console.log(`Elements: ${amountElement.length}`);
});


// Декларуємо змінні:
// var - старе, не використовуємо
// let - звичайна змінна
// const - стала змінна

// Primitive Data Types:
// Number
// String
// Boolean - true, false
// null - пусто
// undefined - не визначено
// Object - об'єкт
// Symbol - унікальний незмінний ідентифікатор

let bestGreetings = 'Hello';
alert(bestGreetings);
bestGreetings = 'JavaScript!';
alert(bestGreetings);

const age = Number(prompt('Enter your age'));
alert('Your age is: ' + age);

const nextAge = addOne(age);
alert('Next year you will be: ' + nextAge);

// Logical operators
// > < >= <= != !== == === || &&
if (age >= 18) {
    alert('You are adult!');
} else {
    alert('You are underaged!');
}

function addOne(num) {
    const incremented = num + 1;
    return incremented;
}

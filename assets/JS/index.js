// Решение основано на методике, когда количество элементов неизвестно заранее или может меняться. Содержит встроенную функцию Number для упрощения кода.

//Декомпозиция задачи:
// Находим все элементы с классом .item-price
// Создаем массив для хранения числовых значений цен
// Убираем пробелы, текст "руб." и приводим строку к числу
// Перебираем каждый элемент и преобразуем его текст в число
// Выводим готовый готовый массив с числовыми значениями цен
// Сложить значения массива
// Соединить итоговое значение массива с html для динамического отображения
// Создать функцию, которая будет вычитать 20% от общей стоимости
// Добавить addEventListener на кнопку ”Использовать купон на 20%”

// Находим все элементы с классом .item-price
const priceElements = document.querySelectorAll('.item-price');

// Создаем массив для хранения числовых значений цен
const prices = [];

// Функция для удаления текста "руб." и преобразования строки в число
function toNum(str) {
    const num = Number(str.replace(/руб\./g, ""));
    return num;
}

// Перебираем каждый элемент и преобразуем его текст в число
priceElements.forEach((element) => {
    const price = toNum(element.innerHTML); // Преобразуем строку в число
    prices.push(price); // Добавляем число в массив
});

// Готовый массив с числовыми значениями цен
console.log(prices);

// Сложить значения массива
const sumOfNumbers = prices.reduce((acc, number) => acc + number, 0);
console.log(sumOfNumbers);

// Соединить итоговое значение массива с HTML для динамического отображения
const totalElement = document.querySelector('.total-price');
totalElement.innerHTML = `${sumOfNumbers} руб.`;

// Создать функцию, которая будет вычитать 20% от общей стоимости
function discount() {
    const sumDiscount = sumOfNumbers - (sumOfNumbers * 0.2);
    totalElement.innerHTML = `${sumDiscount} руб.`;
}

//Добавить addEventListener на кнопку ”Использовать купон на 20%”
const coupon = document.querySelector('.coupon');
coupon.addEventListener('click', discount);

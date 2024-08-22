// Решение основано на методике, когда количество элементов неизвестно заранее или может меняться. Содержит встроенную функцию Number для упрощения кода.

//Декомпозиция задачи:
// Находим все элементы с классом .item-price
// Создаем массив для хранения числовых значений цен
// Убираем пробелы, текст "руб." и приводим строку к числу
// Перебираем каждый элемент и преобразуем его текст в число
// Выводим готовый готовый массив с числовыми значениями цен

// Находим все элементы с классом .item-price
const priceElements = document.querySelectorAll('.item-price');

// Создаем массив для хранения числовых значений цен
const prices = [];

// Убираем пробелы, текст "руб." и приводим строку к числу
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
console.log(prices); // Вывод массива чисел

//Сложить значения переменных



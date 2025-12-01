//1. Создай функцию helloUser(name) и выведи приветствие.
function helloUser(name) {
  console.log("Добро пожаловать, " + name + "!");
}
helloUser("Куралай");

//2. Сделай функцию sum(a, b) и выведи результат. Добавь return и используй результат в alert().
function sum(a, b) {
  return a + b;
}
alert("Сумма: " + sum(2, 4));

//3. Создай стрелочную функцию, которая вычисляет квадрат числа.

const square = (number) => number * number;
console.log("Квадрат числа: " + square(6));

//4. Сделай функцию max(a, b), которая возвращает большее значение.
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(max(100, 10));

//5. Напиши функцию checkPassword(pass), которая сравнивает введённое значение с 'admin'.
function checkPassword(pass) {
  pass = prompt("Введите пароль: ");
  if (pass === "admin") {
    alert("Доступ разрещен");
  } else {
    alert("Неверный пароль");
  }
}
checkPassword("admin");

//6. Реализуй стрелочную функцию getFullName(first, last) и выведи результат.
const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("Куралай", "Ахметова"));

//7. Создай стрелочную функцию, которая проверяет, чётное ли число.
const isEven = (num) => num % 2 === 0;
console.log(isEven(6));

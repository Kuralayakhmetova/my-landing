//1. Напиши программу, которая проверяет, является ли число положительным, отрицательным или нулём.

let number = 0;
if (number > 0) {
  console.log("Данное число положительное.");
} else if (number < 0) {
  console.log("Данное число отрицательное.");
} else {
  console.log("Данное число равно нулю.");
}

//2. Реализуй проверку возраста и вывод разных сообщений с if / else if / else.
let age = 16;

if (age >= 18) {
  console.log("You are in adult");
} else if (age >= 6 && age <= 12) {
  console.log("You are a school boy");
} else if (age >= 15 && age <= 17) {
  console.log("You are a teenager");
} else {
  console.log("Sorry, you are underage");
}

//3. Напиши switch, который определяет категорию по введённой букве (A, B, C, D).

let category = "D";
switch (category) {
  case "A":
    console.log("Эта категория А");
    break;
  case "B":
    console.log("Эта категория B");
    break;
  case "C":
    console.log("Эта категория C");
    break;
  case "D":
    console.log("Эта категория D");
    break;
  default:
    console.log("Not found");
}

//4. Создай цикл for, который выводит таблицу умножения на 3.
for (let i = 1; i <= 10; i++) {
  console.log(`3 * ${i} = ${3 * i}`);
}

//5. Сделай цикл while, который запрашивает числа и суммирует их, пока пользователь не введёт 0.
let sum = 0;
let number1;
let number2;

while (true) {
  number1 = prompt("Введите первое число (для завершения введите 0):");
  number2 = prompt("Введите второе число (для завершения введите 0):");
  number1 = parseInt(number1); // Преобразуем ввод в число
  number2 = parseInt(number2); // Преобразуем ввод в число
  if (number1 === 0 || number2 === 0) {
    break; // Выходим из цикла, если введено 0
  }

  sum += number1 + number2; // Добавляем число к сумме
}

console.log("Итоговая сумма:", sum);

//6. Добавь continue, чтобы пропускать отрицательные числа.

for (let i = -5; i <= 5; i++) {
  if (i < 0) {
    continue;
  }
  console.log(i);
}

//7. Создай программу с do...while, которая выполняется хотя бы один раз.
let a = 0;

do {
  console.log("Выполняется итерация № " + (a + 1));
  a++;
} while (a < 0);

//8. Напиши код, который выводит все нечётные числа от 1 до 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) console.log("Нечетные числа от 1 до 20: " + i);
}

//9. Придумай свою задачу с использованием условий и циклов.

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

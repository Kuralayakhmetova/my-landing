//1. Создай массив numbers = [3, 7, 12, 5, 8].

let numbers = [3, 7, 12, 5, 8];
console.log(numbers);

//2. С помощью map() получи новый массив, где все элементы увеличены на 10.
let numbers2 = numbers.map((num) => num + 10);
console.log(numbers2);

//3. С помощью filter() оставь только числа больше 7.
let numbers3 = numbers.filter((num) => num > 7);
console.log(numbers3);

//4. Создай объект car с ключами brand, model, year.
let car = {
  brand: "Toyota",
  model: "RAV4",
  year: 2025,
};
console.log(car);

//5. Измени значение year и добавь свойство color.
car.year = 2020;
console.log(car);

car.color = "white";
console.log(car);

//6. Создай массив объектов students с именами и возрастом.
let students = [
  { name: "Айдана", age: 18 },
  { name: "Берик", age: 21 },
  { name: "Аида", age: 22 },
];
console.log(students);

//7. С помощью forEach() выведи в консоль имена студентов.
students.forEach((student) => {
  console.log(student.name);
});

//8. Используй map() для получения массива возрастов.
let ages = students.map((person) => person.age);
console.log(ages);

//9. Отфильтруй студентов старше 20 лет.
let older = students.filter((ag) => ag.age > 20);
console.log(older);

//10. Создай объект book с 3 свойствами и выведи его в консоль.
let book = {
  name: "Джейн Эйр",
  year: 1847,
  genre: "Готическая литература",
};
console.log(book);

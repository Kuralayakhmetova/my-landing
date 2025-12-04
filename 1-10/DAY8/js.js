/* let fruits = ["яблоко", "банан", "груша"];
console.log(fruits);
fruits[1] = "апельсин";
fruits.push("киви");
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(fruits);
fruits.pop();
console.log(fruits); */
/* 
let num = [1, 2, 3, 10];
num.push(-20);
console.log(num); */

/* let numbers = [1, 0, 3, -5, 10];
let numbers2 = numbers.map((num) => num + 10);
console.log(numbers2);

let numbers3 = numbers.filter((num) => num > 0 && num % 2 == 0);
console.log(numbers3);

numbers.forEach((num) => console.log(num + 5));

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] + 5);
}
 */
/* 
let dog = {
  name: "Шарик",
  age: 5,
  breed: "Golden retriver",
  weight: 10,
  color: "yellow",
};

console.log(dog);
console.log(dog.breed);
dog.color = "black";
console.log(dog);

dog.address = "Astana";
console.log(dog);

delete dog.color;
console.log(dog); */

/* let users = [
  { name: "Айдана", age: 22 },
  { name: "Дина", age: 24 },
  { name: "Аида", age: 25 },
];

console.log(users);

users.push({ name: "Лена", age: 22 });
console.log(users);

let names = users.map((user) => user.name);
console.log(names);

let older = users.filter((user) => user.age > 23);
console.log(older);

users.forEach((user) => {
  console.log(`${user.name} - ${user.age} лет`);
});

let cities = ["Костанай", "Актобе", "Алматы"];
console.log(cities);

cities.sort();
console.log(cities);

let mass = [10, 20, 30, 40];
let sum = 0;
for (let i = 0; i < mass.length; i++) {
  sum += mass[i];
}
console.log(sum);

sum = 0;
average = 0;
mass.forEach((m) => (sum += m) % mass.length);
mass.forEach((m) => (sum += m) % mass.length);
console.log(sum % mass.length);
console.log(average);
console.log(mass.length);
 */

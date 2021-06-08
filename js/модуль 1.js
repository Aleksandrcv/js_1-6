
// =======> МОДУЛЬ 1 <======///

// Задача 3 Типы примитивов (числа, строки, були)

// ТЕОРИЯ
// В JavaScript переменная не ассоциируется с каким-либо типом данных, тип есть у её значения. То есть переменная может хранить значения разных типов.
// Number - целые числа и числа с плавающей запятой (точкой).
// String - строки, последовательность из нуля или более символов. Строка начинается и заканчивается одиночной ' или двойными кавычками ".
// Boolean - логический тип данных, флаги состояния. Всего два значения: true и false. Например, на вопрос включен ли свет в комнате можно ответить да (true) или нет (false).
//  ==> Числа
// const age = 20;
// const salary = 3710.84;

// ==> Строки
// const name = "Mango";
// const description = "JavaSript essentials";

// ==> Були
// const isModalOpen = true;
// const isLoggedIn = false;

// Объяви следующие переменные используя ключевое слово const или let и присвой им соответствующие значения.
// topSpeed - число 160.
// distance - число 617.54.
// login - строка "mango935".
// isOnline - буль true.
// isAdmin - буль false.

let topSpeed = 160;
let distance = 617.54;
let login = 'mango935';
let isOnline = true;
let isAdmin = false;

// Тесты
// Объявлена переменная topSpeed
// Значение переменной topSpeed это число 160
// Объявлена переменная distance
// Значение переменной distance это число 617.54
// Объявлена переменная login
// Значение переменной login это строка "mango935"
// Объявлена переменная isOnline
// Значение переменной isOnline это буль true
// Объявлена переменная isAdmin
// Значение переменной isAdmin это буль false


// Задача 4 Математические операторы

// ТЕОРИЯ
// Назначение, функционал и приоритет (порядок) операций ничем не отличаются от школьного курса алгебры. Операторы возвращают значение как результат выражения.

const x = 10;
const y = 5;

// Сложение
console.log(x + y); // 15

// Вычитание
console.log(x - y); // 5

// Умножение
console.log(x * y); // 50

// Деление
console.log(x / y); // 2
// Полезно
// Важно запомнить правильное именование составляющих алгебраического выражения: +, -, * и / называются операторами, а то на чём о

// Задание
// Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа. Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.

const pricePerItem = 3500;
const orderedQuantity = 4;
// Пиши код ниже этой строки
const totalPrice = pricePerItem * orderedQuantity;
console.log(totalPrice);

// Тесты
// Объявлена переменная pricePerItem
// Значение переменной pricePerItem это число 3500
// Объявлена переменная orderedQuantity
// Значение переменной orderedQuantity это число 4
// Объявлена переменная totalPrice
// Значение переменной totalPrice это число 14000
// Использован оператор *

// Задача 5 Шаблонные строки

// ТЕОРИЯ
// Шаблонные строки это альтернатива конкатенации с более удобным синтаксисом. Шаблонная строка заключена в обратные (косые) кавычки вместо двойных или одинарных и может содержать местозаполнители, которые обозначаются знаком доллара и фигурными скобками - ${выражение}.

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Добро пожаловать ${guestName}, вы поселены в номер ${roomNumber}`;

// Задание
// Объяви перемнную message и запиши в неё сообщение о покупке, строку в формате: "You picked <имя товара>, price per item is <цена товара> credits". Где <имя товара> и <цена товара> это значения переменных productName и pricePerItem. И

const productName = "Droid";
const pricePerItem = 3500;
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`
// Change code below this line

// Тесты
// Объявлена переменная productName
// Значение переменной productName это строка "Droid"
// Объявлена переменная pricePerItem
// Значение переменной price это число 3500
// Объявлена переменная message
// Значение переменной message это строка "You picked Droid, price per item is 3500 credits"


// Задача 6  заказ продукта

// Задание
// Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:
// Change code below this line

const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// Тесты
// Объявлена переменная orderedQuantity
// Значение переменной orderedQuantity это число 6
// Объявлена переменная pricePerDroid
// Значение переменной pricePerDroid это число 800
// Объявлена переменная deliveryFee
// Значение переменной deliveryFee это число 50
// Объявлена переменная totalPrice
// Значение переменной totalPrice это число 4850
// Объявлена переменная message
// Значение переменной message это строка "You ordered droids worth 4850 credits. Delivery (50 credits) is included in total price."


// Задача 7 Объявление и вызов функции

// ТЕОРИЯ
// Функция - это подпрограмма, независимая часть кода, предназначенная для многократного выполнения конкретной задачи с разными начальными значениями.
// Функцию можно представить как чёрный ящик, она получает что-то на входе (данные), и возвращает что-то на выходе (результат выполнения кода внутри неё).
// 1. Объявление функции multiply

function multiply() {
  // Тело функции
  console.log("multiply function invocation");
};

// 2. Вызовы функции multiply
multiply(); // multiply function invocation
multiply(); // multiply function invocation
multiply(); // multiply function invocation
// Объявление функции начинается с ключевого слова function, за которым идёт её имя - глагол отвечающий на вопрос «Что сделать?» и пара круглых скобок. Тело функции заключено в фигурные скобки {} и содержит инструкции, которые необходимо выполнить при её вызове. Затем, когда необходимо, функция вызывается с помощью имени и пары круглых скобок.

// Задание
// Объяви функцию sayHi, внутри которой добавь console.log() со строкой "Hello, this is my first function!". После объявления вызови функцию sayHi.
// Change code below this line

function sayHi() {
  console.log( "Hello, this is my first function!");
  };
sayHi();

// Тесты
// Ожидается объявление функции
// Функции присвоено имя sayHi
// В теле функции sayHi есть console.log("Hello, this is my first function!")
// После объявления есть вызов функции sayHi
  


// Задача 8  Параметры и аргументы

// ТЕОРИЯ
// В круглых скобках после имени функции идут параметры - перечисление данных, которые функция ожидает при вызове.
// Параметры - это локальные переменные доступные только в теле функции. Они разделяются запятыми. Параметров может быть несколько или вообще их может не быть, тогда записываются просто пустые круглые скобки.
// При вызове функции, в круглых скобках можно передать аргументы - значения для объявленных параметров функции.
// 1. Объявление параметров x, y, z
function multiply(x, y, z) {
  console.log(`Результат умножения равен ${x * y * z}`);
}
// 2. Передача аргументов
multiply(2, 3, 5); // Результат умножения равен 30
multiply(4, 8, 12); // Результат умножения равен 384
multiply(17, 6, 25); // Результат умножения равен 2550
// Порядок передачи аргументов должен соответствует порядку объявленых параметров: значение первого аргумента будет присвоено первому параметру, второго аргумента второму параметру и т. д.

// Задание
// Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.
// Дополни console.log() так, чтобы он логировал строку "Addition result equals <result>", где <result> это сумма переданных чисел.
// Change code below this line

function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// Тесты
// Объявлена функция add(a, b, c)
// Вызов add(15, 27, 10) выводит в консоль "Addition result equals 52"
// Вызов add(10, 20, 30) выводит в консоль "Addition result equals 60"
// Вызов add(5, 10, 15) выводит в консоль "Addition result equals 30"


// Задача 9 Возврат значения

// ТЕОРИЯ
// Оператор return используется для передачи значения из тела функции во внешний код. Когда интерпретатор встречает return, он сразу же выходит из функции (прекращает её выполнение), и возвращает указанное значение в то место кода, где функция была вызвана.

// function multiply(x, y, z) {
//   console.log("Код до return выполняется как обычно");

//   // Возвращаем результат выражения умножения
//   return x * y * z;

//   console.log("Этот лог никогда не выполнится, он стоит после return");
// }

// Результат работы функции можно сохранить в переменную
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550
// Оператор return без явно указанного значения возвращает специальное значение undefined. При отсутствии return в теле функции, она все равно вернёт undefined.

// Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.
 
function add(a, b, c) {
    // Change code below this line
  return a + b + c;
    // Change code above this line
  }
  add(2, 5, 8); // 15
console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));
  
// Тесты
// Объявлена функция add(a, b, c)
// В функции add есть оператор return
// Вызов add(15, 27, 10) возвращает 52
// Вызов add(10, 20, 30) возвращает 60
// Вызов add(5, 10, 15) возвращает 30
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
  

// Задача 10  шаблонные строки 2.0

// Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.
// name - название товара
// price - цена товара
// Дополни код функции так, чтобы в переменную message записывалась строка "You picked <product name>, price per item is <product price> credits", где <product name> и <product price> это значения параметров name и price. Используй синтаксис шаблонных строк.

function makeMessage(name, price) {
    // Change code below this line
     const message =`You picked ${name}, price per item is ${price} credits`;
    // Change code above this line
    return message;
};
  
// Объявлена функция makeMessage(name, price)
// Вызов makeMessage('Radar', 6150) возвращает "You picked Radar, price per item is 6150 credits"
// Вызов makeMessage('Scanner', 3500) возвращает "You picked Scanner, price per item is 3500 credits"
// console.log(makeMessage('Scanner', 3500));
  


// Задача 11 математические операторы 2.0

// Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.
// orderedQuantity - количество единиц товара в заказе;
// pricePerItem - цена одной единицы товара.
// Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

function calculateTotalPrice(orderedQuantity, pricePerItem) {
    // Change code below this line
    const totalPrice = orderedQuantity * pricePerItem;
    // Change code above this line
    return totalPrice;
  };
    
// Тесты
// Объявлена функция calculateTotalPrice (orderedQuantity, pricePerItem)
// Вызов calculateTotalPrice(5, 100) возвращает 500
// Вызов calculateTotalPrice(8, 60) возвращает 480
// Вызов calculateTotalPrice('3, 400) возвращает 1200
// Вызов calculateTotalPrice(1, 3500) возвращает 3500
// Вызов calculateTotalPrice(12, 70) возвращает 840
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

  
// Задача 12  заказ продукта 2.0

// Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.
// orderedQuantity - количество дроидов в заказе
// pricePerDroid - цена одного дроида
// deliveryFee - стоимость доставки
// Дополни код функции так, чтобы она возвращала сообщение о заказе в формате "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь о цене доставки при вычислениях общей стоимости.

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    // Change code below this line
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message =`You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
    // Change code above this line
    return message;
}
console.log(makeOrderMessage(4, 300, 100));

// Тесты
// Объявлена функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee)
// Вызов makeOrderMessage(2, 100, 50) возвращает "You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
// Вызов makeOrderMessage(4, 300, 100) возвращает "You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
// Вызов makeOrderMessage(10, 70, 200) возвращает "You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."


// Задача 13 Операторы сравнения >, >=, < и <=

// ТЕОРИЯ
// Используются для сравнения двух значений. Результатом своего выполнения возвращают буль - true или false, то есть «да» или «нет».

// > - больше
// < - меньше
// >= - больше или равно
// <= - меньше или равно

const a = 2;
const b = 5;

console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(b >= a); // true

console.log(a < b); // true
console.log(b < a); // false
console.log(a <= b); // true
console.log(b <= a); // false

// Функция isAdult объявляет один параметр age (возраст), значение которого будет задаваться во время её вызова. Присвой переменной passed выражение проверки возраста пользователя на совершеннолетие. Человек считается совершеннолетним в возрасте 18 лет и старше.

function isAdult(age) {
    // Change code below this line
    const passed = age >= 18;
    // Change code above this line
    return passed;
}

// Тесты
// Объявлена функция isAdult(age)
// В выражении проверки используется оператор >=
// Вызов isAdult(20) возвращает true
// Вызов isAdult(14) возвращает false
// Вызов isAdult(8) возвращает false
// Вызов isAdult(37) возвращает true


  // Задача 14 Операторы сравнения === и !==

  // ТЕОРИЯ
  // «Нестрогие» операторы == и != выполняют преобразование типов сравниваемых значений, что может привести к ошибкам, особенно у начинающих.

// ❌ Плохо, выполняется приведение типов
console.log(5 == "5"); // true
console.log(5 != "5"); // false
console.log(1 == true); // true
console.log(1 != true); // false
// Поэтому для проверки равенства или неравенства двух значений используются операторы === (строгое равенство) и !== (строгое неравенство), которые не выполняют приведение типов операндов.
// ✅ Хорошо, приведение типов не выполняется
console.log(5 === "5"); // false
console.log(5 === 5); // true
console.log(5 !== "5"); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true

  // Функция isValidPassword(password) проверяет равенство сохранённого и введённого паролей и возвращает результат проверки - буль true или false. Переменная SAVED_PASSWORD хранит значение ранее сохраненного пароля. Введённый пароль передаётся в параметр password.
  // Присвой переменной isMatch выражение проверки равенства введённого и сохранённого ранее паролей. Результатом выражения проверки должно быть true, если значения совпадают, и false, если нет.
  
function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    // Change code below this line
    const isMatch = password ==='jqueryismyjam';
    // Change code above this line
    return isMatch;
  }
console.log(ValidPassword("mangodab3st"))
  
// Тесты
// Объявлена функция isValidPassword(password)
// В выражении проверки паролей использован оператор ===
// Вызов isValidPassword("mangodab3st") возвращает false
// Вызов isValidPassword("kiwirul3z") возвращает false
// Вызов isValidPassword("jqueryismyjam") возвращает true
  

// Задача 15 Инструкция if...else

// ТЕОРИЯ
// Ветвления используются для выполнения различного кода в зависимсти от условия. Принцип работы простой - результат выражения в условии блока if приводится к булю true или false.

if (условие) {
  // тело if
} else {
  // тело else
}
// Если условие приводится к true, то выполняется код в фигурных скобках тела if, а блок else игнорируется.

let cost;
const subscription = "pro";
if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

// console.log(cost); // 100
// Если условие приводится к false, код блока if будет пропущен, и выполнится код в фигурных скобках после блока else.

let cost;
const subscription = "free";
if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}
console.log(cost); // 0

// Добавь выражение проверки совершеннолетия пользователя, значения параметра age, в условие для инструкции if.
// Если пользователь совершеннолетний, должен выполняться блок if и в переменную message записывается строка "You are an adult".
// В противном случае должен выполняться блок else и записывается строка "You are a minor".

function checkAge(age) {
  let message;
  if (age >= 18) { // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  } 
  return message;
}

// Тесты
// Объявлена функция checkAge(age).
// В выражении проверки возраста использован оператор >=
// Вызов checkAge(20) возвращает "You are an adult"
// Вызов checkAge(8) возвращает "You are a minor"
// Вызов checkAge(14) возвращает "You are an adult"
// Вызов checkAge(38) возвращает "You are a minor"


// Задача 16 склад товаров

// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:
// available - общее количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:
// Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка "Not enough goods in stock!".
// В противном случае записывается строка "Order is processed, our manager will contact you.".

  function checkStorage(available, ordered) {
    let message;
    // Change code below this line
    if (available >= ordered) { // Change this line
      message = "Order is processed, our manager will contact you.";
    } else {
      message = "Not enough goods in stock!";
    }
    // Change code above this line
    return message;
}

// Тесты
// Объявлена функция checkStorage(available, ordered).
// Вызов checkStorage(100, 50) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// Вызов checkStorage(200, 20) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(200, 150) возвращает "Order is processed, our manager will contact you."
// Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"
  
  
// Задача 17 Комбинированный оператор присвоения

// ТЕОРИЯ
// Комбинированные операторы это более краткий способ присвоить переменной новое значение основываясь на её предыдущем значении.
// Будем увеличивать значение переменной age на единицу от предыдущего, имитируя обновление возраста после дня рождения пользователя.
let age = 25;
// Классическая запись
age = age + 1;
console.log(age); // 26
// Сначала выполняется правая часть выражения. Вместо age подставляется 25, выполняется операция сложения и в переменную age записывается 26.
// Выполним рефакторинг операции обновления возраста, используя комбинированный оператор присвоения с добавлением.
let age = 25;
// Просто более краткая запись, работает также
age += 1;
console.log(age); // 26

// Замени выражения со стандартными математеческими операторами на комбинированный оператор присвоения с добавлением, вычитанием, умножением и делением.

  let a = 5;
  let b = 10;
  let c = 15;
  let d = 20;
  // Change code below this line
  a += 2;
  b -= 4;
  c *= 3;
  d /= 10;
  
// Тесты
// Значение переменной a равно 7
// Использован оператор +=
// Значение переменной b равно 6
// Использован оператор -=
// Значение переменной c равно 45


  // Задача 18 проверка баланса

// Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.
// Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:
// pricePerDroid - цена одного дроида
// orderedQuantity - кол-во заказанных дроидов
// customerCredits - сумма средств на счету клиента
// Дополни её следующим функционалом:
// Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// Добавь проверку сможет ли клиент оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку "Insufficient funds!";
// в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: "You ordered <число> droids, you have <число> credits left".

  function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Change code below this line
  totalPrise=pricePerDroid * orderedQuantity ;
    a = customerCredits - totalPrise;
      if (totalPrise <= customerCredits) { 
      message = `You ordered ${orderedQuantity} droids, you have ${a} credits left`;
    } else {
      message = "Insufficient funds!";
    }
    // Change code above this line
    return message;
}

// Тесты
// Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits)
// Вызов makeTransaction(3000, 5, 23000) возвращает "You ordered 5 droids, you have 8000 credits left"
// Вызов makeTransaction(1000, 3, 15000) возвращает "You ordered 3 droids, you have 12000 credits left"
// Вызов makeTransaction(5000, 10, 8000) возвращает "Insufficient funds!"
// Вызов makeTransaction(2000, 8, 10000) возвращает "Insufficient funds!"
// Вызов makeTransaction(500, 10, 5000) возвращает "You ordered 10 droids, you have 0 credits left"


  
// Задача 19 Блок else...if

// ТЕОРИЯ
// Конструкция if...else может проверить и среагировать на выполнение или невыполнение только одного условия.

let cost;
const subscription = "pro";
if (subscription === "pro") {
  cost = 100;
} else {
  cost = 0;
}

// console.log(cost); // 100
// Блок else...if позволяет добавить после else еще один оператор if с условием. В конце цепочки может быть классический блок else, который выполнится только в случае, когда ни одно из условий не приведётся к true.

let cost;
const subscription = "premium";
if (subscription === "free") {
  cost = 0;
} else if (subscription === "pro") {
  cost = 100;
} else if (subscription === "premium") {
  cost = 500;
} else {
  console.log(`Invalid subscription type - ${subscription}`);
}
console.log(cost); // 500
// При первом же удовлетворяющем условии проверки прекратятся и выполнится только тело соответствующего блока if. Поэтому подобную запись следует читать как: «ищу первое выполнение условия, игнорирую всё остальное».

// Задание
// Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
// Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка "Access denied, wrong password!".

  function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;
    if (password === null) { // Change this line
      message =  "Canceled by user!";
    } else if (password === 'jqueryismyjam') { // Change this line
      message = "Welcome!";
    } else {
      message = "Access denied, wrong password!";
    }
    return message;
}
  
// Тесты
// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword(null) возвращает "Canceled by user!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword("jqueryismyjam") возвращает "Welcome!"


  // Задача 20 склад товаров 2.0

// Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.
// available - доступное количество товаров на складе
// ordered - единиц товара в заказе
// Используя ветвления дополни код функции так, что:
// Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка "There are no products in the order!".
// Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка "Your order is too large, there are not enough items in stock!".
// В противном случае в переменную message присваевается строка "The order is accepted, our manager will contact you".

  function checkStorage(available, ordered) {
    let message;
    // Change code below this line
  if (ordered === 0) { 
      message = "There are no products in the order!";
    } else if (ordered > available) { 
      message = "Your order is too large, there are not enough items in stock!";
    } else {
      message = "The order is accepted, our manager will contact you";
    }
    // Change code above this line
    return message;
}

// Тесты
// Объявлена функция checkStorage(available, ordered)
// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Your order is too large, there are not enough items in stock!"
// Вызов checkStorage(70, 0)возвращает "There are no products in the order!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 250) возвращает "Your order is too large, there are not enough items in stock!"
// Вызов checkStorage(150, 0) возвращает "There are no products in the order!"
  

// Задача 21  Логическое «И» (оператор &&)

// ТЕОРИЯ
// Логические операторы используются для проверки условий с множественными выражениями, например в ветвлениях.
// Оператор && приводит все операнды к булю и возвращает значение одного из них. Левый операнд, если его можно привести к false, и правый в остальных случаях.
// выражение && выражение
// В следующем примере оба условия вернут true, поэтому результатом всего выражения будет true - вернётся значение правого операнда.

const age = 20;
console.log(age > 10 && age < 30); // true && true -> true
// Если хотя бы один из операндов будет приведён к false, результатом выражения будет этот операнд.

const age = 50;
console.log(age > 10 && age < 30); // true && false -> false
console.log(age > 80 && age < 120); // false && true -> false
// То есть логическое «И» запинается на лжи и возвращает то, на чём запнулось или последний операнд.

console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log(3 && false); // false
console.log(false && 3); // false
console.log(3 && true); // true
console.log(true && 3); // 3

// Полезно
// Запомните шесть значений, которые в булевом преобразовании приводятся к `false`: `0`, `NaN`, `null`, `undefined`, пустая строка `""` или `''` и само значение `false`. Абсолютно всё остальное приводится к `true`.

console.log(1 && 5); // true && true -> 5
console.log(5 && 1); // true && true -> 1
console.log(0 && 2); // false && true -> 0
console.log(2 && 0); // true && false -> 0
console.log("" && "Манго"); // false && true -> ''
console.log("Манго" && ""); // true && false -> ''
console.log("Манго" && "Поли"); // true && true -> 'Поли'
console.log("Поли" && "Манго"); // true && true -> 'Манго'

// Задание
// Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:
// number - число, вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от start до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.
  
  function isNumberInRange(start, end, number) {
    const isInRange = start <= number && number <= end ;
    return isInRange;
}

Тесты
// Объявлена функция isNumberInRange(start, end, number)
// В выражении проверки использован оператор &&
// Вызов isNumberInRange(10, 30, 17) возвращает true
// Вызов isNumberInRange(10, 30, 5) возвращает false
// Вызов isNumberInRange(20, 50, 24) возвращает true
// Вызов isNumberInRange(20, 50, 76) возвращает false


// Задача  22 Логическое «ИЛИ» (оператор ||)
  
// ТЕОРИЯ
//  Оператор || приводит все операнды к булю и возвращает значение одного из них. Левый операнд, если его можно привести к true, и правый в остальных случаях.

//  выражение || выражение
//  В следующем примере условие слева вернёт true, поэтому результатом всего выражения будет true - вернётся значение первого операнда, которое было приведено к true.
 
 const age = 5;
 console.log(age < 10 || age > 30); // true || false -> true
//  Тут результатом тоже будет true, так как хотя бы один из операндов, в этом случае правый, был приведён к true.
 
 const age = 40;
 console.log(age < 10 || age > 30); // false || true -> true
//  А здесь ни одно из условий не выполняется, поэтому получаем false - значение последнего операнда.
 
 const age = 20;
 console.log(age < 10 || age > 30); // false || false -> false
//  То есть логическое «ИЛИ» запинается на правде и возвращает то, на чём запнулось или последний операнд.
 
 console.log(true || false); // true
 console.log(false || true); // true
 console.log(true || true); // true
 
 console.log(3 || false); // 3
 console.log(false || 3); // 3
 console.log(3 || true); // 3
 console.log(true || 3); // true

//  Задание
//  Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.
//  Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам "pro" или "vip", пользователь получит доступ. Результатом выражения проверки будет буль true или false.
 
  function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === "pro" || subType === "vip"; // Change this line
    return canAccessContent;
}
  
//   Тесты
// Объявлена функция checkIfCanAccessContent(subType)
// В выражении проверки использован оператор ||
// Вызов checkIfCanAccessContent("pro") возвращает true
// Вызов checkIfCanAccessContent("starter") возвращает false
// Вызов checkIfCanAccessContent("vip") возвращает true
// Вызов checkIfCanAccessContent("free") возвращает false


// Задача 23 Логическое «НЕ» (оператор !)

// ТЕОРИЯ
//   Все операторы, которые мы рассматривали до этого, были бинарными. Т.е. они содержали два операнда: левый и правый. Логическое «НЕ» - это унарный оператор, выполняющий операцию над одним операндом справа.

// !выражение
// Оператор ! приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его на противоположный true -> false или false -> true.

console.log(!true); // false
console.log(!false); // true
console.log(!3); // !3 -> !true -> false
console.log(!"Манго"); // !'Манго' -> !true -> false
console.log(!0); // !0 -> !false -> true
console.log(!""); // !'' -> !false -> true

const isOnline = true;
const isNotOnline = !isOnline; // !isOnline -> !true -> false

//  Задание
// Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.
// Она объявляет три параметра, значения которых будут задаваться во время её вызова:
// number - число, не вхождение которого проверяется
// start - начало числового промежутка
// end - конец числового промежутка
// Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

  function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange ; // Change this line
    return isNotInRange;
}

// Тесты
// Объявлена функция isNumberNotInRange(start, end, number)
// В выражении использован оператор !
// Вызов isNumberNotInRange(10, 30, 17) возвращает false
// Вызов isNumberNotInRange(10, 30, 5) возвращает true
// Вызов isNumberNotInRange(20, 50, 24) возвращает false
// Вызов isNumberNotInRange(20, 50, 76) возвращает true
  

// Задача 24 расчёт скидки

// Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.
// Используя ветвления и логические операторы, дополни код функции.
// Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.
  
  function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Change code below this line
   if (totalSpent >= 50000) {
      discount = GOLD_DISCOUNT;
    }
    else if (totalSpent >= 20000 && totalSpent < 50000) {
      discount = SILVER_DISCOUNT;
    }
    else if (totalSpent >= 5000 && totalSpent < 20000) {
      discount = BRONZE_DISCOUNT;}
    else
      {
        discount = BASE_DISCOUNT;
      }
    // Change code above this line
    return discount;
}

// Тесты
// Объявлена функция getDiscount(totalSpent)
// Вызов getDiscount(137000) возвращает 0.1
// Вызов getDiscount(46900) возвращает 0.05
// Вызов getDiscount(8250) возвращает 0.02
// Вызов getDiscount(1300) возвращает 0
// Вызов getDiscount(5000) возвращает 0.02
// Вызов getDiscount(20000) возвращает 0.05
// Вызов getDiscount(50000) возвращает 0.1  


// Задача 25 расчёт скидки

// ТЕОРИЯ
// Тернарный оператор используется как более синтаксически краткая замена инструкции if...else, когда одной и той же переменной необходимо присвоить разные значения по условию.

/* <условие> ? <выражение если условие истинно> : <выражение если условие ложно>
Работает по такой схеме: */

// Вычисляется условие.
// Если условие истинно, то есть приводится к true, вычисляется выражение после ?.
// Если условие ложно, то есть приводится к false, вычисляется выражение после :.
// Значение вычисленного выражения возвращается как результат работы тернарного оператора.
// let type;
const age = 20;

if (age >= 18) {
  type = "adult";
} else {
  type = "child";
}

console.log(type); // "adult"
// Выполним рефакторинг, заменив if...else тернарным оператором.

const age = 20;
const type = age >= 18 ? "adult" : "child";
console.log(type); // "adult"

// Внимание
// Тернарный оператор должен использоваться в простых операциях присваивания или возврата. Применять его для замены сложных ветвлений — плохая практика (антипаттерн).

//  Задание
// Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.
  
  function checkStorage(available, ordered) {
    let message;
    // Change code below this line
    message = available >= ordered ? "The order is accepted, our manager will contact you" : "Not enough goods in stock!";
    // Change code above this line
    return message;
}

// Тесты
// Объявлена функция checkStorage(available, ordered).
// Использован тернарный оператор.
// Вызов checkStorage(100, 50) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(100, 130) возвращает "Not enough goods in stock!"
// Вызов checkStorage(200, 20) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(200, 150) возвращает "The order is accepted, our manager will contact you"
// Вызов checkStorage(150, 180) возвращает "Not enough goods in stock!"
  
  
  // Задача 26  проверка пароля
  
  // Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.
  // Используя тернарный оператор дополни функцию так, что:
  // Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку "Access is allowed".
  // В противном случае, присвой message строку "Access denied, wrong password!".

  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
  message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
    // Change code above this line
    return message;
}

// Тесты
// Объявлена функция checkPassword(password)
// Использован тернарный оператор
// Вызов checkPassword("jqueryismyjam") возвращает "Access is allowed"
// Вызов checkPassword("angul4r1sl1f3") возвращает "Access denied, wrong password!"
// Вызов checkPassword("r3actsux") возвращает "Access denied, wrong password!"
  
  
// Задача 27  switch

// ТЕОРИЯ
// В некоторых случаях неудобство чтения сложных ветвлений if...else можно избежать, используя более «плоский» синтаксис инструкции ветвления switch.
// Область применения switch ограничена задачами с одним общим вопросом (что сравнивать) и множеством вариантов ответов (с чем сравнивать).

switch (значение) {
  case значение:
    инструкции;
    break;

  case значение:
    инструкции;
    break;
}

// Его синтаксис состоит из блока switch(значение) - что нужно сравнить и множества отдельных случаев case значение: - с чем нужно сравнить. Для сравнения используется оператор строгого равенства ===. То есть нельзя сравнить на больше или меньше, только на равенство.

// Значение в блоке switch(значение) - строка или число, которое сравнивается на строгое равенство со всеми значениями в блоках case значение: по порядку, сверху вниз.

// Оператор break в завершении каждого блока case необходим, чтобы прервать дальнейшие проверки и сразу перейти к коду за switch в том случае, когда проверка на равенство вернула true.

// Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.
// Если значение параметра type это строка:
// "starter" - цена подписки 0 кредитов.
// "professional" - цена подписки 20 кредитов.
// "organization" - цена подписки 50 кредитов.
// Изначально в теле функции была инструкция if...else, которая выглядела вот так.

if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}

//  Задание
// После рефакторинга инструкция if..else была заменена на switch.Дополни код инструкции switch, чтобы функция работала правильно.
  
  function getSubscriptionPrice(type) {
    let price;
    // Change code below this line
   switch (type) { // Change this line
      case "starter": // Change this line
        price = 0; // Change this line
        break;

      case "professional": // Change this line
        price = 20; // Change this line
        break;
  
      case "organization": // Change this line
        price = 50; // Change this line
        break;
    }
    // Change code above this line
    return price;
}

// Тесты
// Объявлена функция getSubscriptionPrice(type)
// Вызов getSubscriptionPrice("professional") возвращает число 20
// Вызов getSubscriptionPrice("organization") возвращает число 50
// Вызов getSubscriptionPrice("starter") возвращает число 0
  

// Задача 28 switch c блоком default

// ТЕОРИЯ
// Если ни одного совпадения значений не произошло, необходимо выполнить код по умолчанию, как в блоке else для инструкции if...else. Для этого после всех блоков case добавляется блок default.

switch (значение) {
  case значение:
    инструкции;
    break;

  case значение:
    инструкции;
    break;

  default:
    инструкции;
}

// Оператор break после блока default не нужен, так как это и так последнее что будет выполнено в switch и управление будет передано коду за ним.

//  Задание
// Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
// Если значение параметра password:
// равно null, значит пользователь отменил операцию и в message записывается строка "Canceled by user!".
// совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка "Welcome!".
// не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка "Access denied, wrong password!".
// Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).
  
  function checkPassword(password)
  {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
  switch (password) { 
      case password = null: 
        message = "Canceled by user!"; 
        break;
  
      case password = ADMIN_PASSWORD: 
        message = "Welcome!";
        break;
  
      default: 
        message = "Access denied, wrong password!";
    }
    // Change code above this line
    return message;
}

// Тесты
// Объявлена функция checkPassword(password)
// Вызов checkPassword("mangohackzor") возвращает "Access denied, wrong password!"
// Вызов checkPassword(null) возвращает "Canceled by user!"
// Вызов checkPassword("polyhax") возвращает "Access denied, wrong password!"
// Вызов checkPassword('"jqueryismyjam") возвращает "Welcome!"
  
  
// Задача 29 доставка товара

// Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.
// Формат возвращаемой строки "Shipping to <country> will cost <price> credits", где вместо <country> и <price> необходимо подставить соотвествующие значения.
// Список стран и стоимость доставки:
// China - 100 кредитов
// Chile - 250 кредитов
// Australia - 170 кредитов
// Jamaica - 120 кредитов
// Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку "Sorry, there is no delivery to your country"
  
  function getShippingCost(country) {
    let message;
    // Change code below this line  
  switch (country) { 
      case 'China' : 
        message = "Shipping to China will cost 100 credits"; 
        break;
  
      case 'Chile' : 
        message = "Shipping to Chile will cost 250 credits";
        break;
      
      case 'Australia': 
        message = "Shipping to Australia will cost 170 credits";
        break;
      
      case 'Jamaica': 
        message = "Shipping to Jamaica will cost 120 credits";
        break;
  
      default: 
        message = "Sorry, there is no delivery to your country";
    }
    // Change code above this line
    return message;
}

//   Тесты
//   Объявлена функция getShippingCost(country)
//   В теле функции использована инструкция switch
//   Вызов getShippingCost("Australia") возвращает "Shipping to Australia will cost 170 credits"
//   Вызов getShippingCost("Germany") возвращает "Sorry, there is no delivery to your country"
//   Вызов getShippingCost("China") возвращает "Shipping to China will cost 100 credits"
//   Вызов getShippingCost("Chile") возвращает "Shipping to Chile will cost 250 credits"
  

  
// Задача 30 Длина строки

// ТЕОРИЯ
// Для того чтобы узнать длину строки, то есть количество её символов, у строк есть встроенное свойство length, значение которого можно получить обратившить к нему через точку после имени переменной или строкового литерала.
const productName = "Repair droid";
// Если в переменной хранится строка
console.log(productName.length); // 12
// Если строковый литерал
console.log("Repair droid".length); // 12

//  Задание
// Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.
  
  function getNameLength(name) {
    const message = `Name ${name} is ${name.length} characters long`; // Change this line
    return message;
}

// Тесты
// Объявлена функция getNameLength(name)
// Вызов функции getNameLength("Poly") возвращает "Name Poly is 4 characters long"
// Вызов функции getNameLength("Harambe") возвращает "Name Harambe is 6 characters long"
// Вызов функции getNameLength("Billy") возвращает "Name Billy is 5 characters long"
// Вызов функции getNameLength("Joe") возвращает "Name Joe is 3 characters long"  

  
// Задача 31 Индексация элементов строки

// ТЕОРИЯ
// Строка — это индексированный набор из нуля или более символов, заключенных в одинарные, двойные или косые кавычки.
// Индексация элементов строки начинается с нуля. Например, в строке 'JavaScript' буква 'J' стоит на позиции с индексом 0, а 't' идёт под индексом 9. При этом длина строки 'JavaScript' равна 10, то есть индекс последнего элемента всегда на единицу меньше чем её длина.
// Для доступа к значению элемента строки используется синтаксис квадратных скобок строка[индекс].

const productName = "Repair droid";
console.log(productName[0]); // "R"
console.log(productName[5]); // "r"
console.log(productName[11]); // "d"
console.log(productName[productName.length - 1]); // "d"
// Содержимое строки нельзя изменить, только прочитать. То есть нельзя взять какой-то символ и заменить его, как только строка создана — она такая навсегда. Можно лишь создать целиком новую строку и присвоить в переменную вместо старой.

//  Задание
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.
// courseTopicLength - длина строки.
// firstElement - первый символ строки.
// lastElement - последний символ строки.
  
  const courseTopic = "JavaScript essentials";
  // Change code below this line
  const courseTopicLength = courseTopic.length;
  console.log(courseTopicLength.length);
  const firstElement = courseTopic[0];
  console.log(firstElement[0]);
  const lastElement = courseTopic[courseTopic.length - 1];
  console.log(courseTopic[courseTopic.length - 1]);

// Тесты
// Объявлена переменная courseTopic
// Значение переменной courseTopic это строка "JavaScript essentials"
// Объявлена переменная courseTopicLength
// Значение переменной courseTopicLength это число 24
// Объявлена переменная firstElement
// Значение переменной firstElement это строка "J"
// Объявлена переменная lastElement
// Значение переменной lastElement это строка "s"
  
  
  // Задача 32 Метод slice()
  
  // ТЕОРИЯ
  // Метод строк slice(startIndex, endIndex) используется для создания копии части или всей строки. Он делает копию элементов строки от startIndex и до, но не включая endIndex и возвращает новую строку.

  const productName = "Repair droid";
  console.log(productName.slice(0, 4)); // "Repa"
  console.log(productName.slice(3, 9)); // "air dr"
  console.log(productName.slice(0, productName.length)); // "Repair droid"
  console.log(productName.slice(7, productName.length)); // "droid"

  //  Задание
  // Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:
  // string - оригинальная строка
  // length - количество символов с начала строки для подстроки
  // Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.
  
  function getSubstring(string, length) {
    const substring = string.slice(0,length); // Change this line
    return substring;
  }

// Тесты
// Объявлена функция getSubstring(string, length)
// Вызов функции getSubstring("Hello world", 3) возвращает "Hel"
// Вызов функции getSubstring("Hello world", 6) возвращает "Hello"
// Вызов функции getSubstring("Hello world", 8) возвращает "Hello wo"
// Вызов функции getSubstring("Hello world", 11) возвращает "Hello world"
// Вызов функции getSubstring("Hello world", 0) возвращает ""


// Задача 33  форматирование сообщения
    
// Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.
// Дополни код функции так, что если длина строки:
// не превышает maxLength, функция возвращает её в исходном виде.
// больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие "...", после чего возвращает укороченную версию.
    
  function formatMessage(message, maxLength) {
    // Change code below this line
  if (message.length <= maxLength) {
    return message;
  } 
    else {
    return message.slice(0, maxLength) + '...';
  }
    /// Change code above this line
}
  // ще один спосіб

  return (message.length <= maxLength)? 
  message : (message.slice(0, maxLength) + '...');
    
//   Тесты
// Объявлена функция formatMessage(message, maxLength)
// Вызов функции formatMessage("Curabitur ligula sapien", 16) возвращает "Curabitur ligula..."
// Вызов функции formatMessage("Curabitur ligula sapien", 23) возвращает "Curabitur ligula sapien"
// Вызов функции formatMessage("Vestibulum facilisis purus nec", 20) возвращает "Vestibulum facilisis..."
// Вызов функции formatMessage("Vestibulum facilisis purus nec", 30) возвращает "Vestibulum facilisis purus nec"
// Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 15) возвращает "Nunc sed turpis..."
// Вызов функции formatMessage("Nunc sed turpis a felis in nunc fringilla", 41) возвращает "Nunc sed turpis a felis in nunc fringilla"
  

// Задача 34 Методы toLowerCase() и toUpperCase()

// ТЕОРИЯ
// Бывают ситуации когда все символы в строке необходимо преобразовать в один регистр, верхний или нижний. Например, при поиске по ключевому слову, когда пользователь вводит строку 'saMsUng', а сравнить её надо со строкой 'samsung' или 'SAMSUNG'.

console.log("saMsUng" === "samsung"); // false
console.log("saMsUng" === "SAMSUNG"); // false
// Чтобы не требовать абсолютно точный ввод можно сделать «нормализацию» введённой пользователем строки, то есть преобразовать все её символы в верхний или нижний регистр. Методы строки toLowerCase() и toUpperCase() вернут новую строку в соответствующем регистре, не изменяя оригинальную.

const BRAND_NAME = "SAMSUNG";
const userInput = "saMsUng";
const normalizedToUpperCaseInput = userInput.toUpperCase();

console.log(userInput); // 'saMsUng'
console.log(userInput === BRAND_NAME); // false
console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// Задание
// Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.
  
  function normalizeInput(input) {
    const normalizedInput = input.toLowerCase(" "); // Change this line
    return normalizedInput;
  }
  
//   Тесты
// Объявлена функция normalizeInput(input)
// Вызов функции normalizeInput("Hello world") возвращает "hello world"
// Вызов функции normalizeInput("This ISN'T SpaM") возвращает "this isn't spam"
// Вызов функции normalizeInput("Big SALE") возвращает "big sale"
  


// Задача 35  Метод includes()

// ТЕОРИЯ
// Метод строк includes(substring) проверяет входит ли подстрока substring в строку, возвращает буль - true если входит и false в противном случае. Регистр символов в строке и подстроке имеет значение, так как например буква "a" не равна букве "А".

const productName = "Repair droid";

console.log(productName.includes("a")); // true
console.log(productName.includes("A")); // false
console.log(productName.includes("driod")); // true
console.log(productName.includes("Driod")); // false
console.log(productName.includes("Repair")); // true
console.log(productName.includes("repair")); // false

// Задание
// Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.
// fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// name - имя для проверки вхождения в полное имя.
// Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.
    
  function checkForName(fullName, name) {
   const result = fullName.includes(name); // Change this line
    return result;
  }
// Тесты
// Объявлена функция checkForName(fullname, name).
// Вызов функции checkForName("Egor Kolbasov", "Egor") возвращает true
// Вызов функции checkForName("Egor Kolbasov", "egor") возвращает false
// Вызов функции checkForName("Egor Kolbasov", "egOr") возвращает false
// Вызов функции checkForName("Egor Kolbasov", "Zhenya") возвращает false
// Вызов функции checkForName("Vadim Nekrasov", "Vadim") возвращает true
// Вызов функции checkForName("Vadim Nekrasov", "vadim") возвращает false
// Вызов функции checkForName("Vadim Nekrasov", "Dima") возвращает false
  

  
// Задача 36 проверка спама

  
//  Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.
//  Если нашли запрещенное слово (spam или sale) то функция возвращает буль true. 
//  Если в строке нет запрещенных слов, функция возвращает буль false.

  function checkForSpam(message) {
    let result;
    // Change code below this line
    message = message.toLowerCase();
   if (message.includes("spam") || message.includes("sale"))
       {
       result = true;
       }
   else
   {result = false;}
    // Change code above this line
    return result;
}

// Тесты
// Объявлена функция checkForSpam(message).
// Вызов функции checkForSpam("Latest technology news") возвращает false
// Вызов функции checkForSpam("JavaScript weekly newsletter")возвращает false
// Вызов функции checkForSpam("Get best sale offers now!") возвращает true
// Вызов функции checkForSpam("Amazing SalE, only tonight!") возвращает true
// Вызов функции checkForSpam("Trust me, this is not a spam message") возвращает true
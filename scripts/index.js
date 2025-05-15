const year = 2025;
const pi = 3.14159265358979323846;
usd = 41.49;
eur = 46.51;

alert("Hello, " + prompt("Enter your name: ") + "! Welcome back.");

const age = year - prompt("Enter your birth year: ");
alert("You are " + age + " years old.");

const squareSide = prompt("Enter the side length of the square: ");
alert("Square area is " + squareSide * 4)

const radius = prompt("Enter the radius of the circle: ");
alert("Circle area is " + pi * radius * radius);

const usdToEur = prompt("Enter the amount in USD: ");
alert("Amount in EUR: " + usdToEur * usd / eur);

const distance = prompt("Enter the distance in km between Kyiv and Lviv: ");
const time = prompt("Enter how long it took to travel that distance in hours: ");
alert("Average speed: " + distance / time + " km/h");

// Правильні імена змінних для зберігання
/* $FirstName;
   $first_name;
   first_name;
   $count;
   $Count; */

   
// Неправильні імена змінних для зберігання
/* $33;    - Ім’я не може починатися з цифри
   $last-name;    - Дефіс не може бути частиною імені
   $last-name-1;  - Після дефісу повинна йти літера
   $first name;   - Після пробілу повинна бути літера
   $)%^@!#        - Ім’я не може містити спецсимволи
   $First--Name;  - Два дефіси підряд не допускаються. */


// Способи коментування коду:
// - однорядковий коментар
/* багаторядковий
 коментар */


 /* 
Стилі написання змінних:
- PascalCase
- camelCase
- kebab-case 
- snake_case
*/
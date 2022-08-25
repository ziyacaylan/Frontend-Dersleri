/*==  değeri eşitse */

const a = 10;
const b = 10;
const c = 20;
console.log(a == b); // true

/*=== Hem değeri hem de türü eşit ise */
console.log(a === b); // false -> Değeri eşit fakat türü farklı olduğundan false

/*!= Eşit değilse */

console.log(a != b); // değerleri eşit fakat değili false

console.log(a !== b); // değeri eşit fakat türü farklı ancak değili true

/*< Küçükse */

console.log(a < b); // false

/*<= Küçük veya eşitse */

console.log(a <= b); // true

/* > Büyükse ve >= Büyük veya eşitse */

console.log(a > b); // false

console.log(a >= b); // true

/* Mantıksal Operatörler */

//&& ve

console.log(`&& ve : ${a === b && a < c}`); // true

// || veya

console.log(`|| veya : ${a === b || a > c}`); // true

// "! değil"

console.log(`! değili : ${!(a === b || a > c)}`); // false

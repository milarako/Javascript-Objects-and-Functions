// Primitives vs Objects

// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);                 // 46
console.log(b);                 // 23

// Objects
var obj1 = {
        name: 'John',
        age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);          // 30
console.log(obj2.age);          // 30

// Functions
var age = 27;
var obj = {
        name: 'Jonas',
        city: 'Lisbon'
};

function change(a, b) {
        a = 30;
        b.city = 'San Francisco'
}

change(age, obj);

console.log(age);               // 27
console.log(obj.city);          // San Francisco

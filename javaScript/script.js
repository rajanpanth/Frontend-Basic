// Dynamically typed datatype
// 1. var -> function scope variable
// 2. let -> block scope variable
// 3. const -> block scope constant variable
var a = "Hello All"
console.log(a);
console.log("the value of a  is " + a)
console.log(typeof a); // string

let b = 10.1010;
console.log(b);
console.log("the value of b is " + b);
console.log(typeof b); // number

b = 20;
console.log(b);
console.log(typeof b);

b = "Rajan"
console.log(b);
console.log(typeof b); // string

const c = "welcome"
console.log(c);
// c = "Rajan";  -> This will throw an error because c is a constant

//function
function display() {
    console.log("This is a function");
}
display();

// Arrow function
const displayArrow = () => {
    console.log("This is an arrow function");
}
displayArrow();

//single line arrow function
const add = (x, y) => x + y;
console.log(add(10, 20));

//function scope example
const subtract = (value) => {
    var subRes = value - 10;
    console.log("The value of subRes is " + subRes);
}
subtract(50);
// console.log("The value of subRes is " + subRes); // This will throw an error because subRes is not defined outside the function


// block scope example
for (let i = 0; i <= 10; i++) {
    var addRes = 0;
    addRes += i;
    let subRes = 0;
    subRes -= i;
    console.log(addRes, subRes);
}
console.log("outside loops: " + addRes);
// console.log("outside loops: " + subRes); 


//array
let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//for each -> array's extension function
fruits.forEach(
    (fruit) => {           //callback function
        console.log("Element is: " + fruit);
        console.log("Index is: " + fruits.indexOf(fruit));
    }
);

// capatilize

let newar = fruits.map(
    (ele, i)=>{
        return ele.toUpperCase()
    }
)
console.log(newar)


//filter
let numbers = [19, 20, 5, 7, 100, 99]
let less = numbers.filter(
    (ele) =>{
        //if true return ele, if false not return
        return (ele>20)
    }
)
console.log("element greater than 20 is " + less)

// document.write("the value of a is " + a + "<br>");

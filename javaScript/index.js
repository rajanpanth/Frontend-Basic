// const divide = (a, b) => {
//     if (b === 0) {
//         alert("Cannot divide by zero");
//     }
//     return a / b;
// }
// // console.log(divide(10, 2));
// console.log(divide(10, 0)); 

//object or json or map (key value pair)
const person = {
    name: "Rajan",
    age: 20,
    address: "kathmandu",
    contact: 9861652321,
    gender: "male",
    status: true,
    monthlySalary: 50000,
}

// excessing keys values
// using bracket notation
console.log("name of thye person is " + person["name"]);
// using dot notation
console.log("contact of the person is " + person.contact);

//adding new key value pair
person["marritialStatus"] = "single";
person.email = "pantha8@gmail.com";
console.log("email of the person is " + person.email);
console.log("marritial status of the person is " + person["marritialStatus"]);


// updating key value pair
person.age = 21;
console.log("updated age of the person is " + person.age);
console.log("person object: ", person);

// deleting key value pair
delete person.marritialStatus;
console.log("after deleting marritial status: ", person);

// object to array
// arrays of keys
const keys = Object.keys(person);
console.log("keys of the person object: ", keys);

// arrays of values
const values = Object.values(person);
console.log("values of the person object: ", values);

// arrays of key values pairs   
const personArr = Object.entries(person);
console.log("key value pairs of the person object: ", personArr);
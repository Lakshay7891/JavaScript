// How to Create a Variable in Javascript : 

// let name = "Lakshay Khanna";
// let age = 22;

// if(true){
//     let c = 90;
// }

// age = 30;
// console.log(c);
// console.log(name , age);

// const account = 1234;
// // account = 23;

// console.log(account);




// old tarika
// var a = 10;
// var a = 20;

// if(true){
//    var a = 20;
// }

// function fun(){
//     var c = 20;
// }

// var b = 30;
// console.log(c);


// data types

// Primitive data type    (Immutable which means the values cannot be changed. It can create an another memory location for their respective variable. It will be performed on Pass By Value which means that it can create an another copy of a respected Variable.)

// number,string,boolean,undefined, null, bigint, symbol


// number          Occupies 8 Bytes Of Memory That is given to numbers as well as floating numbers (Decimal Numbers).
// let a = 10;
// let b = 2.36;
// console.log(a,b);
// console.log(typeof b);


// // string

// let c = "Hello Lakshay Khanna";
// let d = 'Web Development';
// console.log(typeof d);
// console.log(c,d);


// // boolean
// let login = true;
// let f = false;
// console.log(typeof f);
// console.log(login, f);


// // undefined

// let user;
// console.log(typeof user);
// // const p;        We cannot use const as an undefined.

// console.log(user);

// bigint
// let num = 23216378261783213461n;
// console.log(typeof num);
// console.log(num);


// null
// let weather = null;                         We want Intentionally to put null Value.
// console.log(typeof weather);

// let weather = current_weather("Dwarka")
// 25
// null
// undefined


// symbol     (Used to create the Special Copy)

// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(typeof id2);
// console.log(id2==id1);

// Non Primitive Data type  (Mutable which means that their values can be chnaged. It means it will be performed on Pass By Reference which points to the same Address beacuse we do not want that values can carry maximum storage in our machines.)
// array, object, function

// let arr = [10,20,11,"Rohit",true];   It Can Store all Types of Values like Number, String, Boolean, BigInt, Symbol, Undefined and Null.
// console.log(typeof arr);  Object Type

// console.log(arr);

// Rohit 12312 18 gen     // Does Not Provide The Meaningful Information Through These Keywords.

// let user = {
//     name:"Rohit",
//     account:12312,
//     age:18,
//     category:'gen'
// }

// console.log(typeof user);

// let s = function add(){
//     console.log("Hello");
// }

// console.log(typeof s);




// Primitive data type is immutable

// let a = 10;
// let b = a;

// b = 20;
// console.log(a,b);

// let str = "Rohit";
// str = "Mohan";

// console.log(str);


// Non primitive data type mutable

// let arr = [10,20,30,40];

// arr.push(90);
// arr[0] = 70;
// console.log(arr);

// let obj ={
//     name:"Mohan",
//     age:20
// }

// let obj2 = obj;

// obj2.name = "Rohan";

// console.log(obj);
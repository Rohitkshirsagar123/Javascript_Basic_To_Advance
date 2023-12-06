// Javascript Basic To Advance Practise

// ************************************************* VARIABLE *****************************************************************


//@@@@@@@@@@@@@@@@@@@@@@@@ var, let and const  @@@@@@@@@@@@@@@@@@@@@@@@

// we are use " var, let , const" to create variable

// var  - Es5 feature. it is a Function Scoped 

/* var a=20;
var str="Rohit";

console.log(a,str,); */



//  let  and const ---- let and const are ES6 feature - it is curly bracket scoped

// const  - used to create constant value

/* const val ="Rohit";
val ="Rk";  // you can't change constant value show error - TypeError: Assignment to constant variable.
console.log(val);  */


// let 
/*
let data=30;
// let data=2; // you can't redeclare let value show error
data=40;    // you change value of variable
console.log(data); */


// ************************************************* DATATYPE *****************************************************************
// Data type are two types
// 1 primitive - Number,string,boolean,undefined,null,bigint
// 2 non-primitive - Array and object

// int- get number or integer value
// string - get text or string value
// boolean - get true or false value
// undefined - variable is declare but no any value assign this variable
// null -  empty, no value
// bigint  - need to get big number


// @@@@@@@@@@@@@@@@@@@@@@@@   Data Type Conversion @@@@@@@@@@@@@@@@@@@@@@@@

/*
let score = 30;
console.log(score);
console.log(typeof score);   //  check data type use type of

// convert number to string
let str = String(score);
console.log(str);
console.log(typeof str);   

// convert string to number 
let conv_string = Number(str);
console.log(conv_string);
console.log(typeof conv_string); 

*/


/*
let val= "33st";
console.log(val);
console.log(typeof val);

let str = Number(val);
console.log(str);      // NaN - not a number
console.log(typeof str);
 */

/*

let val = false;
console.log(val);
let conv= Number(val);
console.log(conv);   // output is true - 1 and false   - 0

let isloogedin =1;
let val = Boolean(isloogedin);
console.log(val);

*/

// --------  string cofuse conversion
/*
let str ="hello"
let str2 = "world"
console.log(str+str2); 
*/

/*

console.log("1"+2);
console.log(1+"2");

console.log("1"+2+2);  // output is = 122


console.log(1+2+"2");  // output is = 32

console.log(+"");  // output is 0

*/




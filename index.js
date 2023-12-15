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


// *************************************************  STRING *****************************************************************
/*
let str= "I am ";
let data = "Rohit kshirsagar"
console.log(`hello! ${str} ${data}`);


let define_str_another = new String("hi this is another way to define string");  // converet string to object and print
console.log(define_str_another)

*/

// let str="Rohit";
// console.log(str[0]);
// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());



// ************************************************* Date and Time ***********************************************************
/*
// Date

const date_val =  new Date();
console.log(date_val);
console.log(typeof date_val) //object

console.log(date_val.toString());
console.log(date_val.toISOString());
console.log(date_val.toUTCString()); 

let date_val =  new Date(2023,0,23,5,3);
let date_val2 =  new Date("01-14-23");

console.log(date_val.toLocaleString());

console.log(date_val2.toLocaleString());

*/

// Timestamp

// let mytimestamp =  Date.now();
// console.log(mytimestamp);


// console.log(Math.floor(Date.now()/1000));




// ************************************************* Array ***********************************************************

/*
const arr= [1,4,6,8]
console.log(arr);

const arr2= [1,4,6,8,"rk","ak"]
console.log(arr2);

console.log(arr[2]); // get value to index number

arr[3] = 55; // change array value
console.log(arr);
*/

/*

const arr_data= [1,3,6,8]

const data= arr_data;
console.log(arr_data);
console.log(data);

// change second array value
data[2]=9999;
console.log(data);
console.log(arr_data); // i was change second array value but first array also change Why? it's 2nd get reference of first.

*/
/*

let arr_val= [2,5,6]
console.log(arr_val);
arr_val.push(99);  // add value   
console.log(arr_val);
arr_val.pop()   // remove last value
console.log(arr_val);

arr_val.unshift(99999);  // add value before
console.log(arr_val);

arr_val.shift(); // remove first value
console.log(arr_val);

*/



// ************************************************* OBJECTS ***********************************************************
/*

let obj= {
    name:"rk",
    surname:"k",
    Job:"Software Engineer",
    salary:10000000
}
console.log(obj['name']); //
console.log(obj.name);

obj["name"]="Rohit";
console.log(obj);

*/

/*

const obj2 = {
    name :"Rk",
    address: {
        city:"malshiras",
        state:"Maharashtra"
    }
}
console.log(obj2['address'])
console.log(obj2['address']['city']);

const data_obj ={
    1:"r",
    2:"k"
}
const data_obj2 ={
    3:"b",
    4:"k"
}

const new_obj ={data_obj,data_obj2};
console.log(new_obj)


// spread operator 

const Spreed_data_obj  = {...data_obj,...data_obj2}
console.log(Spreed_data_obj)

*/

// ------------------------  destructuring
/*
const obj_des = {
    name :"Rk",
    surname:"K"
}

const{name} = obj_des
const{surname:sn} = obj_des

console.log(name)
console.log(sn)

*/


// ************************************************* FUNCTIONS ***********************************************************

// functions 
/*
function fun1(){
    console.log("Function Called")
}
fun1()
fun1()


// rest operator -  ...    pass multiple values

function addNumbers(...num){
    return num;
}

console.log(addNumbers(3300,90,88));
*/


// ************************************************* Global scope and local scope ***********************************************************
/*
let a=20;
const b= 22;
var c= 33;
console.log(a);
console.log(b);
console.log(c);

*/

/*

var c=3000;

let a=2000;

if(true){
    let a=20;
    const b= 22;
    var c= 33;
}

console.log(a);  // not access inside of curly braces
// console.log(b);  // not access inside of curly braces
console.log(c);

*/
/*

function parent(){
    const val="this is parent";

    function child(){
        const data ="this is child data";
        console.log(val);
    }
    // console.log(data);   //error -  not access this is inside variable 
    child();   // run sucessfully
}

parent();
*/

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Clouser   @@@@@@@@@@@@@@@@@@@@@@@@@@

//  -- parent function return another function and this return function use parent variable value this is called clouser

/*
function parent(){
    const val="this is parent";

    return function child(){
        const data ="this is child data";
        console.log(val);
    }
  
}

const get_data=parent();

get_data();

*/


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   HOISTING @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//   variable and function is declare there declaration goes to top of js file. you use variable and function before declaration
/*
addNum(5);

function addNum(a){
        console.log(a+5);
}
*/



// ************************************************* This and arrow function ***********************************************************

// This - this keyword change its value in different context
/*
const user ={
    name:"sam",

    welcomeMes:function(){
        console.log(`hello , ${this.name}`);
    }
}

user.welcomeMes();
user.name="Rk";  // change value 
user.welcomeMes();

*/

// arrow function -  write function in compact 
/*
let fun1= ()=>{
    console.log("arrow function")
}
fun1();
*/


// ************************************************* IIFE ***********************************************************
// IIFE  -- Immediate Invoke Function Expression
/*
(function val(){
    console.log("data");
})();
*/




// ************************************************* Execution Context ***********************************************************

// Execution context - execution context is container when function is called execution context is created it conatins 
//                     three things variable,function and lexical scope




// ************************************************* For loop ***********************************************************
// for loop -
// while loop - 
// do while loop -
// for of loop -  is worked on string,array
// for in loop - is worked on object and array
/*
arr=[1,3,5];
const values={
    key:"val",
    key2:"val2"
}
for(let a in arr){
    console.log(a,values[a]);
}
*/

// ************************************************* higher order array loop ***********************************************************

// forEach function
/*
const arr = ["js","html","css","java"]

arr.forEach(element => {
    console.log(element);
});
*/


// ************************************************* Map filter and reduce ***********************************************************

/*
// Map - 
const data = [1,2,3,4,5,6];
 const val=data.map((val)=> val+2
)

console.log("Map :",val);


// filter 
const filData = [1,2,3,4,5,6,7,8,9];

const filter_value =filData.filter((num)=> num > 4)

console.log("filter data : ",filter_value)


// reduce 

const reduceData =[1,2,3,4,5,6,7];

const totalValue = reduceData.reduce((acum,curr)=>{

    console.log( "acum val is",acum ," current value",curr)
      return acum + curr;
},0)

console.log(totalValue)

*/


// ************************************************* DOM ***********************************************************

// /Dom - Document object model

// DOM Manipluation
// console.log(document.body);

// // select element tagname 
// console.log("select element by tag Name")
// var selecth1=document.getElementsByTagName("h1");
// console.log(selecth1);


// // select element id 
// console.log("select element by id")
// var h1_id=document.getElementById("h1_id");
// console.log(h1_id);
// h1_id.style.backgroundColor="yellow";


// // select element by class name
// console.log("select element by class Name")
// var select_elem_class = document.getElementsByClassName("text_data");
// console.log(select_elem_class);



// // query selector 
// console.log("select element by Queryselector")
// let val=document.querySelectorAll(".select_elem_class");
// console.log(val)

// properties 
// textContent - return text value 
// console.log(val[0].textContent)

// innertext  - return text content of elements and all its childrens
// console.log(val[0].innerText)

// innerHTML - return inside all text content and html tags 
// console.log(val[0].innerHTML)

// // tagname - give tag name 
// console.log(val[0].tagName)



// var selec_h4=document.querySelector("h4");
// console.log(selec_h4.textContent);
// selec_h4.textContent="This is a ";
// console.log(selec_h4);
// selec_h4.append("Rk brand")




// atttribute select -  select attribute inside of tags
/*
var selec_h4=document.querySelector("h4");
console.log(selec_h4.getAttribute("id"));

selec_h4.setAttribute("class","newclass");
console.log(selec_h4)


// style ---- change style
var selec_h4=document.querySelector("h4");
console.log(selec_h4.textContent);

// console.log(selec_h4.style);

selec_h4.style.color="green";

*/


//  @@@@@@@@@@@@@@@@@@@@@@@@@@@ create element  @@@@@@@@@@@@@@@@@@@@@@

/*
let data= document.querySelector(".data")

let div_elem = document.createElement("div");
  div_elem.setAttribute("class","new_elem");
  console.log(div_elem); 
  div_elem.innerHTML = "<h1>Rk</h1>";

  data.append(div_elem)

  */


  // ************************************************* Events ***********************************************************
/*
  const button = document.querySelector("#btn");
  button.addEventListener("click",(e)=>{
    alert("Clicked")
  })
*/

  // ************************************************* Async code ***********************************************************

/*
//   settimeout
setTimeout(()=>{
  console.log("run settimeout")
},2000)


//setinterval

const val=setInterval(()=>{
    console.log("setinterval call")
},5000);

clearInterval(val);

*/

  // *************************************************  API  ***********************************************************

// API - Application Programming Interface
/*
const requrl= 'https://api.github.com/users/Rohitkshirsagar123';

const xhr =new XMLHttpRequest();

xhr.open("GET",requrl);
xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
    if(xhr.readyState ==4){
        const date  = JSON.parse(this.responseText);
        console.log(date)
    }
}

xhr.send();
*/


  // *************************************************  Promises  ***********************************************************

/*
const promiseOne = new Promise((res,rej)=>{
         
           setTimeout(()=>{
            console.log("Async task is executed")
             res();
           },1000)
});

promiseOne.then(()=>{
   console.log("promise consume")
})

*/

/*
new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("Async 2 task is executed")
         res();
       },1000)
}).then(()=>{
    console.log("Async 2 resolved")
})

*/

// pass data
/*
const thirdPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("Async code executed");
        const date = {
            username:"Rk",
            email:"rk@gmail.com"
        }
        res(date)
    },1000)
})

thirdPromise.then((data)=>{
     console.log(data)
})

*/
/*

 const promiseFour =   new Promise((res,rej)=>{
    const data = {
        username:"R",
        email:"rk@gmail.com"
    }
    setTimeout(()=>{
       if(data.username=="Rk"){
          console.log("promise resolved")
          res(data)
        
       }
       else{
        rej("rejected");
       }
    },2000)
 })

 promiseFour.then((data)=>{
     console.log(data)
 }).catch((error)=>{
    console.log(error);
 })

 */


//  async await------------------------------------------------
/*
 const promiseFive = new Promise((res,rej)=>{
    setTimeout(()=>{
        let error=true;
        const data = {
            username:"R",
            email:"rk@gmail.com"
        }
        if(!error){
            // console.log("resolved");
            res(data)
        }else{
            rej("ERROR: js went wrong");
        }
    },1000)
 })


 async function consumePromiseFive(){
       const response  = await promiseFive
       console.log(response);
 }

 consumePromiseFive();

*/



  // *************************************************  Fetch  ***********************************************************

// api call async await
/*
const requrl = 'https://jsonplaceholder.typicode.com/users';

async function getData(){
     const response=await fetch('https://jsonplaceholder.typicode.com/users');
     const data= await response.json();

     console.log(data)
}

getData()
*/


// api call then and catch 
/*
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json()
}).then((data)=>{

    console.log(data)
}).catch((error)=> console.log(error))

*/


  // *************************************************  Prototype  ***********************************************************




// *************************************************this  call,apply,bind  ***********************************************************
// this all work in change value of "this" keyword


// this -  changes its value in different context 
// call- call is used to chnages inside function value .  [pass another value to use "call" and chnages inside "this" keyword value]
//appply -  same as call only pass date into array
//bind- create one function to after use
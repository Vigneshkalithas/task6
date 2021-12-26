var ram;
var mani;
var prem;
var vinayk;

console.log(vinayk);

let person = {

    name: "vignesh",
    lastname: "kalithas",
    Status: "unmaried",
    age : 23,
}
console.log(person.name);



let b1 ="vigneshkalithas";
let isAlive = true;
let b3 = undefined;
let b4 = null;
console.log(typeof b4);

// falsy values

// undefined,
// null,
// 0,
// false,
// ''---> "",
// NaN


//truty
// Anything that is not falsy is


//sqare of number
let c1 = 5;
console.log(c1*c1);

//addition 3 numbers
var [c2,c3,c4] = [1,2,4];
console.log(c2+c3+c4);

// celsoius to fahrenheit converstion

var celsi = 10;
var result = (celsi*(9/5))+32;
console.log(result); 

//meter to miles
let metre = 10000;
const length = 1609;
let mile = (metre/length);
console.log(mile.toFixed(2));



//pounds to kg
let pounds = 95;
const mass = 2.205;
let kg =(pounds/mass);
console.log(kg.toFixed(2));

//calculating batting average
let dhoni = [100,99,58,63,105];
let temp =[];
  let avg = 0
for(i=dhoni[0];i<dhoni.length;i++){
    temp.push(i);
    avg = avg + i;
    
}
console.log(avg);


//calculate five test scores

let score1=279;
let score3=120;
let score4=340;
let score2=270;
let score5=114;
let Msd =(score1+score2+score3+score4+score5)/5;
console.log(Msd);

//power of number

let x =2;
let y=5;
// console.log(x**y);
console.log(Math.pow(x,y));





//calculate simple interst
let principle=10000;
let interstRate = 10;
let time = 5;
let si = (principle*interstRate*time)/100;
console.log(si);

//find area of triangle
let height = 10;
let base = 10;
const area =(height*base)/2;
console.log(area);



// loop arrys

let maadhev = [1,2,3,4,5,6,7];
let sum = 0;
for(let i=0;i<maadhev.length;i++){
    sum = sum +i;
    console.log(sum);
}


alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`)
alert(3 +
1
+ 2); // this is multiple line code and its working




let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek"



let fname1=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' );



var a5 = "2" > "12";
//Don't touch below this
if (a5) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}






let a6 = prompt("Enter a number?");
//Don't modify any code below this
if (a6) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}





// You cant change the value of the msg
let message;
if (null || 2 || undefined )
{
 let message = "welcome boss";
}
else
{
 let message = "Go away";
}
  console.log(message);





  let num = 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)
num += 1
console.log(num)






// ar lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);




var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 1; i < 11; i--) {
 new_string += numsArr[i] 
}
console.log(new_string);





var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 1; i < 11; i++) {
 new_string += numsArr[i] + "" 
}
console.log(new_string);




var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <10; i++) {
 if(numsArr[i]%2==0);
 sum += numsArr[i]
}
console.log(sum);





var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
     str_all +=inner_array[j]
}
console.log(str_all);





var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(numsArr[i]%2!=0)
 {
 sum_odd += numsArr[i]
 }
 else
 {
 sum_even += numsArr[i]
 }
}
}
console.log(sum_odd);
console.log(sum_even);





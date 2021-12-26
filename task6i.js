a = (f,s,t) => {
    // let f,s,t;
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   a(1,2,3);


   let n = 123;
// console.log(add(n));
function add(n)
{
let sum = 0;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum
}console.log(add[n]);




const arr3 = [9,8,5,6,4,3,2,1];
(function() {
  let sum = 0;
 for (var key of arr3){
 sum += arr3[key];
 }
 console.log(sum);
  return sum;
})
(arr3);





const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
const sum1 = num.reduce(sum)
console.log(sum1);



var ar1 = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = arr3.length % k;
(function() {
 arr4 = [];
 out = arr3.slice(k + 1, arr3.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr3[i];
 count += 1;
 }
 console.log(out);
})
(ar1);



aa = data=>{
    var a=data;
   for(i=0;i<a.length-1;i++){
    var l="";
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if((a.length%2)!=0){
    l+=a[a.length-1]
   }
   console.log(l);
   }
   aa("1234");
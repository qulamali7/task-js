
//1.prompt ilə daxil olunan ədədin , 2-nin quvveti  olub olmadigini tapan alqoritm yazin.
// let number = +prompt("Enter number")
// if (number === 0) {
//     console.log(`${number} not value power 2`);
// }
// else if(number%4===0){
//     console.log(`${number} value power 2`);
// }
// else{
//     console.log(`${number} not value power 2`);
// }

// 2.Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən alqoritm yazin
// let number1=+prompt("Enter number 1")
// let number2=+prompt("Enter number 2")
// let total=number2**number1
// console.log(`Result ${total}`);

// 3.1- den 1000e qeder  ededler icerisinde  reqemleri eyni olan ededlerin cemin tapin. example(11 ,222,333 ve  s)
// let sum = 0
// let sum1 = 0
// for (let i = 1; i < 1000; i++) {
//     if (i <100) {
//         if (i % 11 === 0) {
//             sum += i
//             console.log(i)
//         }
//     }
//     else if (100 < i <= 999) {
//         if (i % 111 === 0) {
//             sum1 += i
//             console.log(i)
//         }
//     }
// }
// console.log(sum + sum1);



// 4.Verilmis array-de cut ededlerin en boyuyunu tapan alqoritm yazin.
// let high = 0
// const arr = [77, 777, 13, 50, 88, 66, 11, 100]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && high < arr[i]) {
//         high = arr[i]
//     }
// }
// console.log(`High even value ${high}`);

// 5.Verilmis array-de tek ededlerin en kiciyinin index-ni tapan alqoritm yazin.
// const arr = [77, 777, 13, 88, 66, 11, 4, 100]
// let small = 0
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] % 2 === 1 && arr[small] > arr[i]) {
//         small = i
//     }
// }
// console.log(`Small odd value index ${small} `);

// 6.Verilmis array-de  sade ve murekkeb ededlerin sayini tapan alqoritm yazin.
// let simple = 0
// const arr = [77, 777, 13, 50, 88, 66, 11, 100]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//         console.log("1 neither simple nor complicated");
//     }
//     else if (arr[i] > 1) {
//         for (let k = 2; k < 10; k++) {
//             if (arr[i] % k === 0) {
//                 console.log(arr[i]);
//                 simple += 1
//                 break;
//             }
//         }
//     }
// }
// let complicated=arr.length-simple
// console.log(`Simple number ${simple}`);
// console.log(`Complicated number ${complicated}`);

// 7.Verilmis array-de minimum ededle maksimum ededin cemini array-in ededi ortasindan boyuk olub olmadigini yoxlayin.
// const arr = [77, 777, 13, 50, 88, 66, 11, 100]
// let sum = 0
// let count = 0
// let high = 0
// let small = arr[0]
// for (let i = 0; i < arr.length; i++) {
//     if (high < arr[i]) {
//         high = arr[i]
//     }
//      else if (small > arr[i]) {
//         small = arr[i]
//     }
//     sum += arr[i]
//     count = arr.length
//     average=sum/count
// }
// if (small+high>average) {
//     console.log("It is Big");
// }
// else{
//     console.log("It is Small");
// }
// console.log(`Small: ${small}`);
// console.log(`High: ${high}`);
// console.log(`Average: ${average}`);

// 8.Verilmish ededin en boyuk reqemini tapan alqoritm yazin. example: 709 en boyuk 9-dir, 37 en boyuk 7-dir.
// let number=+prompt("number")
// let high=0
// let n=number.toString()
// for (let i = 0; i < n.length; i++) {
//     if (high<n[i]) {
//         high=n[i]
//     }
// }
// console.log(`High value: ${high}`);

//task 8 methodsuz 3 reqemli ededler ucun
// let number = +prompt("Enter 3 digit number")
// if (number < 100) {
//     a = number % 10
//     b = ((number - number % 10) / 10) % 10
//     console.log(b);
//     console.log(a);
//     if (a>b) {
//         console.log(`High digit ${a}`);
//     }
//     else{
//         console.log(`High digit ${b}`);
//     }
// }
// else if (100 <= number <= 999) {
//     c = number % 10
//     b = ((number - number % 10) / 10) % 10
//     a = ((number - number % 100) / 100) % 10
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     if (a>b && a>c ) {
//         console.log(`High digit ${a}`);
//     }
//     else if (b>a && b>c) {
//         console.log(`High digit ${b}`);
//     }
//     else if (c>a && c>b) {
//         console.log(`High digit ${c}`);
//     }
//     else{
//         console.log(`All digit equally`);
//     }
// }




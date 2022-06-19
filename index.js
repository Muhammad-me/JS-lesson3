// boolen kein soroq belgisi, agar boolen to'g'ri qaytarsa so'roqdan keyingis o'qiladi
// yoki : nuqtadan keyin komd o'qiladi
// && va belgisi, 2 tomoni ham to'g'ri bo'lishi kerak
// || yoki belgisi, 1 tomoni ham to'g'ri bo'lishi kerak

//!  *** SCOPE *** //
//? Scoping: variable larni qayerdan ishlatila oinishi
//* Tashqaridagi varible lar ichkaridan ishlatila olinadi
//* Lekin ichakridan tashqariga variblelar chiqarilmaydi
//! *** Hoisting *** //
//? Hosting: varible va funksiyalarni codeni eng yuqori
//? qismga chiqarib olishi va kod bloki yaratilishidan
//? avval ishlatila olinishi
//!  *** Function declaration *** //
//? Function decloration bu functionlarni function so'zi
//? + nomi orqali yaratish. Function declorationlar
//? hoisting b'oladi


// const t = 5 + 5 == 10 ? "Ism olindi" : "Kiritilmadi";
// console.log(t);

// let i = 0;
// function chiqar() {
//     let i = 8;
//     console.log("Test" + i);
// 
// chiqar();

// function chiqar() {
//     let ism = prompt("Please write your name.");
//     alert("Welcome");
// }
// chiqar();

// isminiol2();
// isminiol();
// const isminiol = function () {
//     console.log("Ismini ol");    
// };
// function isminiol2() {
//     console.log("Ismini ol");    
// }

// const isminiol = function () {
//     const ism = prompt("Is mini ol?");
//     console.log(ism);
// };
// const statusKorsat = function () {
//     console.log("Ismi olinyapti.......");
//     isminiol();
// };
// statusKorsat();

// const add = function (a, b, c){
//     let yigindi;
//     if (typeof a === "string" || typeof b === "string") {
//         yigindi = Number(a) + Number(b)
//     } else {
//         yigindi = a + b;
//     }
//     console.log((a + b) * c);
// }
// add(1, "5", 3);
// add(7, 3, 2);   

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i += 1;
// }

// let i = 10;
// while (i > 0) {
//     console.log(i);
//     i -= 1;
// }



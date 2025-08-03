// EXECUTION CONTEXT, HOISTING & SCOPE

// Ada 2 fase pada execution context, execuitin context ini pada saat program kita dijalankan
// 1. Fase creation
// 2. Fase execution

// var nama = 'Deny';
// console.log(nama);

// 1. Fase creation = creation phase pada Global context
// semua variable akan diset undefined semua
// nama var = undefined
// nama function = fn() akan diisi isi dari script fungsi
// hoisting
// javascript mendefiniskan object windows sebagai global object
// window = global object
// javascript mendefiniskan object this sebagai window
// this = window

// 2. Fase execution = execution phase (menjalankan programnya baris-per baris dari atas ke bawah)

// console.log(sayHello);
// console.log(sayHello());

// var nama = 'Deny Febriyanto';
// var umur = 37;

// console.log(sayHello());

// function sayHello() {
//   return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang di dalamya terdapat creation dan execution phase
// juga punya akses ke:
// - window
// - arguments
// - hoisting

// var nama = 'Deny Febriyanto';
// var username = '@sandhikagalih';

// function cetakURL(username) {
//   var instagramURL = 'http://instagram.com';
//   return instagramURL + username;
// }

// console.log(cetakURL(username));

// function a() {
//   console.log('ini a');

//   function b() {
//     console.log('ini b');

//     function c() {
//       console.log('ini c');
//     }

//     c();
//   }

//   b();
// }

// a();

// var nama = 'Deny Febriyanto';
// var username = '@denyfebr';

// function cetakURL() {
//   //   console.log(arguments);
//   console.log(arguments[0]);
//   var instagramURL = 'http://instagram.com/';
//   return instagramURL + username;
// }

// console.log(cetakURL('@doddyferdiansyah', '@erik'));

function satu() {
  var nama = 'Sandhika';
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = 'Erik';
satu();
dua('Doddy');
console.log(nama);

// undefined
// Sandhika
// undefined salah --> Erik
// Erik

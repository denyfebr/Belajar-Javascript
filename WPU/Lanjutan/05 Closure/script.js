// function init(){
//   // let nama = 'Deny'; // local variable
//   // let umur = 33;

//   // function tampilNama(nama) { // inner function (closure*)
//   //   // let nama = 'Risca';
//   //   console.log(nama); // akses ke parent variable
//   //   // console.log(umur);
//   // }

//   return function(nama) {
//     console.log(nama);
//   }

//   return tampilNama;
//   // console.dir(tampilNama);
// }

// // init();
// let panggilNama = init();
// panggilNama('Risca');
// panggilNama('Deny'); // function factory

// alasan menggunakan closure
// 1. Membuat function factories
// 2. Membuat private method

// function ucapkanSalam(waktu){
//   return function(nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatSore = ucapkanSalam('Sore');
// let selamatMalam = ucapkanSalam('Malam');

// // selamatPagi('Sandhika');
// // selamatMalam('Galih');

// console.dir(selamatMalam('Sandhika'));

let add = (function () {
  let counter = 0;
  return function(){
    return ++counter;
  }
})(); // immediately invoke function

// let a = add();

counter = 100; // operasi ini tidak akan mengganggu function-nya

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());



// Konsep this pada Arrow Function

// Constructor Function
// const Suppliers = function() {
//     this.nama = 'Gandaerah Hedana';
//     this.volume = 350;
//     this.sayHello = function() {
//         console.log(`Saya supplier ${this.nama}, dan volume pasokan ${this.volume} Ton`);
//     }
// }

// const gandaerah = new Suppliers();

// Arrow function

// const Suppliers = function() { // constructor tidak bisa dijadikan arrow function
//     this.nama = 'Gandaerah Hedana';
//     this.volume = 350;
//     this.sayHello = () => { // bisanya function expression karena func exp mempunyai konsep this
//         console.log(`Saya supplier ${this.nama}, dan volume pasokan ${this.volume} Ton`);
//     }
// }

// const gandaerah = new Suppliers();

// Object literal
// const mhs1 = {
//     nama: 'Gandaerah',
//     volume: 320,
//     sayHello: () => {
//         console.log(`Halo, nama saya ${this.nama}, dan saya ${this.volume}`);
// akan error karena arrow function tidak mengenal konsep this
//     }
// }

// const Suppliers = function () {
//   this.nama = 'Gandaerah Hedana';
//   this.volume = 350;

//   // function expression ga kena hoisting
//   this.sayHello = function () {
//     console.log(`Saya supplier ${this.nama}, dan volume pasokan ${this.volume} Ton`);
//   };

//   // function declaration kena hoisting dan akan mencari variable global (windows)
//   setInterval(() => { // maka dari itu pake arrow function maka this akan dikenali
//     console.log(this.volume++);
//   }, 500);
// };

// const gandaerah = new Suppliers();

const box = document.querySelector('.box');
box.addEventListener('click', function () {
  let satu = 'size';
  let dua = 'caption';

  if (this.classList.contains(satu)) {
    // satu = temp;
    // satu = dua;
    // dua = temp;
    [satu, dua] = [dua, satu];
  }

  //let that = this; //diakalin
  // console.log(this);
  this.classList.toggle(satu);
  setTimeout(() => {
    // dijadikan arrow function biar ga hoisting dan this-nya bukan global
    // this.classList.toggle('caption'); isinya this jadi windows karena hoisting
    this.classList.toggle(dua);
  }, 600);
});

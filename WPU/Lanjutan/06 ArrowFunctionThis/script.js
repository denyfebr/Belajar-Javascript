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
//     this.sayHello = () => { // bisanya function expression
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
            // akan error
//     }
// }

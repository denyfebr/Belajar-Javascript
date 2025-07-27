// Cara untuk membuat Object pada javascript
// 1. Object Literal
// PROBLEM: tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//   nama: 'Sandhika',
//   energy: 10,
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Selamat makan ${this.nama}!`);
//   },
// };

// let mahasiswa2 = {
//   nama: 'Dody',
//   energy: 20,
//   makan: function (porsi) {
//     this.energy += porsi;
//     console.log(`Selamat makan ${this.nama}!`);
//   },
// };

// 2. Function Declaration
// function mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Selamat makan ${this.nama}!`);
//   };

//   mahasiswa.main = function (keringat) {
//     this.energi -= keringat;
//     console.log(`Habis main nih ${this.nama}!`);
//   };

//   return mahasiswa;
// }

// let sandhika = mahasiswa('Sandhika', 10);
// let doddy = mahasiswa('doddy', 20);

// 3. Constructor Function
// keyword new

function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Selamat makan ${this.nama}!`);
  };

  this.main = function (keringat) {
    this.energi -= keringat;
    console.log(`Habis main nih ${this.nama}!`);
  };
}

let sandhika = new Mahasiswa('Sandhika', 10);

// 4. Object.create

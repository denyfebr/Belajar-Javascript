// Versi object dengan menggunakan prototype inheritance

function Mahasiswa(nama, energi) {
  // let mahasiswa = Object.create(methodMahasiswa);
  // let mahasiswa = {};

  // let this = Object.create(Mhasiswa.prototype)
  this.nama = nama;
  this.energi = energi;
  // return this;

  // return mahasiswa;
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan!`;
};

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, selamat bermain!`;
};

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamat tidur!`;
};

let sandhika = new Mahasiswa('Sandhika', 10);

// Versi class
// class Mahasiswa {
//   constructor(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
//   }

//   makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
//   }

//   main(jam){
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
//   }

//   tidur(jam){
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat tidur!`;
//   }
// }

// let sandhika = new Mahasiswa('Sandhika',10);
// let doddy = new Mahasiswa('Doddy',20);

// let angka = [1, 2, 3];
// // let angka = new Array();
// // console.log(angka.reverse());
// // console.log(angka.sort());
// console.log(angka);

// let nomor = 20;
// console.log(nomor);

// function Array(){
//   let this = Object.create(Array.prototype);
// }

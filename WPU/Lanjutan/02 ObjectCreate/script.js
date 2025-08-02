const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Selamat makan ${this.nama}!`);
  },
  main: function (keringat) {
    this.energi -= keringat;
    console.log(`Habis main nih ${this.nama}!`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Habis tidur nih ${this.nama}!`);
  },
};

function mahasiswa(nama, energi) {
  // let mahasiswa = {};
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  // mahasiswa.makan = methodMahasiswa.makan;
  // mahasiswa.main = methodMahasiswa.main;
  // mahasiswa.tidur = methodMahasiswa.tidur;

  return mahasiswa;
}

let sandhika = mahasiswa('Sandhika', 10);
let doddy = mahasiswa('Doddy', 20);

// 2. Constructor Function
// keyword new

// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Selamat makan ${this.nama}!`);
//   };

//   this.main = function (keringat) {
//     this.energi -= keringat;
//     console.log(`Habis main nih ${this.nama}!`);
//   };
// }

// let sandhika = new Mahasiswa('Sandhika', 10);

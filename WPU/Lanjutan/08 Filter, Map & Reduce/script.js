const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3

// metode "for"

// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//   if (angka[i] >= 3) {
//     newAngka.push(angka[i]);
//   }
// }
// console.log(newAngka);

// metode "filter"

// const newAngka = angka.filter(function (a) {
//   return a >= 3;
// });

// "filter" arrow function
// const newAngka = angka.filter((a) => a >= 3);

// "map"
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);

// "reduce"
// jumlahkan seluruh elemen pada array 0 + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);

// "method chaining = menggabungkan fungsi2 pada high order ini dg satu kali eksekusi ga perlu ditampung ke variable"
// mencari angka > 5, hasilnya kalikan 3, terkahir jumlahkan
const hasil = angka
  .filter((a) => a > 5) // 8, 9, 9
  .map((a) => a * 3) // 24, 27, 27
  .reduce((acc, curr) => acc + curr); // 78

console.log(hasil);

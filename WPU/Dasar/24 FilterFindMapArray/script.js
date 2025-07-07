// 6. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];

// var cetak = function (e) {
//   console.log(e);
// };

// angka.forEach(cetak);

// angka.forEach(function (e) {
//   console.log(e);
// });

// var nama = ['Sandhika', 'Galih', 'Nofa'];

// nama.forEach(function (e, i) {
//   console.log('Mahasiswa ke-' + (i + 1) + ' = ' + e);
// });

// 7. map
// var angka = [1, 2, 5, 3, 6, 8, 4];
// angka.map(function (e) {
//   console.log(e);
// });

// var angka2 = angka.map(function (e) {
//   return e * 2;
// });

// console.log(angka2.join(' - '));

// 8. sort
// var angka = [1, 2, 5, 3, 6, 8, 4];
// console.log(angka.join(' - '));
// angka.sort();
// console.log(angka.join(' - '));

var angka = [1, 2, 10, 5, 20, 3, 6, 8, 4];
console.log(angka.join(' - '));
angka.sort(function (a, b) {
  return a - b;
});
console.log(angka.join(' - '));

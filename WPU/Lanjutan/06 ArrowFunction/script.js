// Function Expression
// let tampilPesan = function (nama) {
//   return `Halo , ${nama}`;
// }
// console.log(tampilPesan(`Astra Agro Lestari`));

// Arrow Function
// const tampilNama = (nama) => { return `Halo, ${nama}`}
// console.log(tampilNama('Cargill'));

// const tampilNama = (nama,waktu) => { 
//   return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Cargill','Malam'));

// implisit return
// const tampilNama = nama => `Halo, ${nama}`; 
// console.log(tampilNama('Sekijang'));

// jika tidak ada parameter
// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

// menggunakan function map utk memetakkan sebuah fuction ke dalam array
let suppliers = ['Cargill','Austindo Nusantara Jaya','Eagle High'];

// Bukan Arrow Function
// let jumlahHuruf = suppliers.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// Arrow Function
// let jumlahHuruf = suppliers.map( nama => nama.length);
// console.log(jumlahHuruf);

// Arrow Function -> mengembalikannya dalam bentuk object
let jumlahHuruf = suppliers.map( nama => ({ nama: nama, jmlHuruf:nama.length }));
// console.log(jumlahHuruf);
console.table(jumlahHuruf);

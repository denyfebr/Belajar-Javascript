// Destructuring Variable/Assignment

// Destructuring Array

const perkenalan = ['Halo', 'nama', 'saya', 'Deny Febriyanto'];

// const salam = perkenalan[0];
// const nama = perkenalan[3];

// const [salam, satu, dua, nama] = perkenalan;

//skip
// const [salam, , , nama] = perkenalan;

// console.log(`${salam}, ${nama}`);

// swap
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada array
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);
// console.log(b);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructing Object
// const mhs = {
//   nama: 'Deny Febriyanto',
//   umur: 38,
// };

// // biasanya kan gini
// // const nama = mhs.nama;
// // const umur = mhs.umur;

// // gabisa namanya sembarangan harus sama dengan propertinya
// // const {a,b} = mhs

// const { nama, umur } = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ({ nama, umur } = {
//   nama: 'Deny Febriyanto',
//   umur: 38,
// });

// console.log(nama);

// Assign ke variable baru
// const mhs = {
//   nama: 'Deny Febriyanto',
//   umur: 38,
// };
// // aliasing
// const { nama: n, umur: u } = mhs;
// console.log(u);

// Memberikan default value
// const mhs = {
//   nama: 'Deny Febriyanto',
//   umur: 38,
//   email: 'denyfebri@gmail.com',
// };

// const { nama, umur, email = 'email@default.com' } = mhs;
// console.log(email);

// Memberikan default + assign ke variable baru
// const mhs = {
//   nama: 'Deny Febriyanto',
//   umur: 38,
//   email: 'denyfebri@gmail.com',
// };

// const { nama: n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(e);

// Object Rest Parameter
// const mhs = {
//   nama: 'Deny Febriyanto',
//   umur: 38,
//   email: 'denyfebri@gmail.com',
// };

// const { nama: n, ...values } = mhs;
// console.log(values);

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
  id: 123,
  nama: 'Deny Febriyanto',
  umur: 38,
  email: 'denyfebri@gmail.com',
};

// function getIdMhs(mhs) {
//   return mhs.id;
// }

function getIdMhs({ id, nama }) {
  return id;
}

console.log(getIdMhs(mhs));

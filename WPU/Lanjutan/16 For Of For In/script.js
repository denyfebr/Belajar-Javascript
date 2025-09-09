// for..of
// Array
// const mhs = ['Sandhika', 'Doddy', 'Erik'];

// looping biasa
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// looping forEach
// mhs.forEach((m) => console.log(m));

// looping forOf
// for (const m of mhs) {
//   console.log(m);
// }

// String
// const nama = 'Sandhika';
// for(const n of nama){
//     console.log(n);
// }

//const mhs = ['Sandhika', 'Doddy', 'Erik'];
// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`)
// });

// ngakalin kasih index pada forOf
// pake method yg namanya entries utk dijadikan Array dan memiliki index
// for (const [i, m] of mhs.entries()){
//     console.log(`${m} adalah mahasiswa ke-${i + 1}`)
// }

// NodeList

// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(n => console.log(n.textContent));
// for(n of liNama){
//     console.log(n.innerHTML);
// }

// arguments
// function jumlahkanAngka(){
//     let jumlah = 0;
//     for(a of arguments){
//         jumlah += a;
//     }

//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in (buat melooping object)
const mhs = {
  nama: 'Deny Febriyanto',
  umur: 38,
  email: 'denyfebri@gmail.com',
};

for (m in mhs) {
  console.log(`${m}: ${mhs[m]}`);
}

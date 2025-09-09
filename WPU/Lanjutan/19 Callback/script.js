// Callback
// Synchronous Callback
// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt('Masukkan nama : ');
//   callback(nama);
// }

// // tampilkanPesan(halo);
// tampilkanPesan((nama) => alert(`Halo, ${nama}`));

// const mhs = [
//   {
//     nama: 'Sandhika Galih',
//     nrp: '043040023',
//     email: 'sandhikagalih@unpas.ac.id',
//     jurusan: 'Teknik Informatika',
//     idDosenWali: 1,
//   },
//   {
//     nama: 'Doddy Ferdiansyah',
//     nrp: '133040123',
//     email: 'doddy@gmail.com',
//     jurusan: 'Teknik Informatika',
//     idDosenWali: 2,
//   },
//   {
//     nama: 'Erik',
//     nrp: '104040001',
//     email: 'sandhikagalih@unpas.ac.id',
//     jurusan: 'Teknik Industri',
//     idDosenWali: 2,
//   },
// ];

// console.log('mulai');
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log('selesai');

// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 400) {
//         error();
//       }
//     }
//   };

//   xhr.open('get', url);
//   xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa(
//   'data/mahasiswa.json',
//   (result) => {
//     // console.log(JSON.parse(result));
//     const mhs = JSON.parse(result);
//     mhs.forEach((m) => console.log(m.nama));
//   },
//   () => {}
// );
// console.log('selesai');

// JQuery
console.log('mulai');
$.ajax({
  url: 'data/mahasiswa.json',
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log('selesai');

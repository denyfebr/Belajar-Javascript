// Destructuring Function

// Destructuring Function Return Value
// function penjumlahanPerkalian(a, b) {
//   return [a + b, a * b];
// }

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(3, 5)[0];
// const kali = penjumlahanPerkalian(3, 5)[1];

// const [jumlah, kali] = penjumlahanPerkalian(3, 5);
// console.log(jumlah);
// console.log(kali);

// ini urutannya harus sama, ga boleh ketukar posisinya
// const [tambah, kurang, kali, bagi = 'Tidak ada'] = kalkulasi(3, 5);
// console.log(bagi);

//jika ingin mengcuhkan posisi, returnnya jgn pake Array tapi pakai Object
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, tambah, kali, kurang } = kalkulasi(3, 5);
// console.log(kurang);

// Destructuring Function Arguments
const mhs1 = {
  nama: 'Deny Febriyanto',
  umur: 37,
  email: 'denyfebri@gmail.com',
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// function cetakMhs(nama, umur) {
//   return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));

// function cetakMhs(mhs) {
//   return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));

// High order function

// function sebagai arguments atau parameter
// kerjakanTugas -> High order function
// selesai -> Callback
// function kerjakanTugas(matakuliah, selesai) {
//   console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
//   selesai();
// }

// function selesai() {
//   alert('Selesai mengerjakan tugas!');
// }

// kerjakanTugas('Pemrograman web', selesai);

// function sebagai return value
// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatMalam = ucapkanSalam('Malam');
// console.dir(selamatMalam('Deny'));

// function repeat(n, action) {
//   for (let i = 0; i < n; i++) {
//     action(i);
//   }
// }

// repeat(10, console.log);
// repeat(3, alert);

// // Contoh High Order Function
// Array.prototype.map()
// Array.prototype.filter()
// Array.prototype.reduce();

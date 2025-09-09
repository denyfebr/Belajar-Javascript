// Rest Parameter

// function myFunc(a, b, ...myaArgs) {
//   return `a = ${a}, b = ${b}, myArgs = ${myaArgs}`;
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function myFunc() {
//     return arguments; // Hasilnya bukan Array
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// Kalau arguments jadi Array, caranya
// function myFunc() {
//   // cara ke-1
//   // return Array.from(arguments);
//   // cara ke-2 spread operator
//   return [...arguments];
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan() {
// cara looping biasa
//   let total = 0;
//   for (const a of arguments) {
//     total += a;
//   }
//   return total;
//}

// high order function -> reduce
// function jumlahkan(...angka) {
//   return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ['Sandhika', 'Doddy', 'Erik', 'Fajar', 'Hendra'];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(anggota);

// object destructuring
// const team = {
//   pm: 'Sandhika',
//   frontEnd1: 'Doddy',
//   frontEnd2: 'Erik',
//   backEnd: 'Fajar',
//   ux: 'Hendra',
//   devOps: 'Ferry',
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);

// filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}

// console.log(filterBy('number', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));
// console.log(filterBy('string', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));
console.log(filterBy('boolean', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));

function tambah(a, b) {
  return a + b;
}

function kali(a, b) {
  return a * b;
}

let a, b;
a = 3;
b = 2;
let hasil = 0;
hasil = kali(tambah(a, b), tambah(a, b));
console.log(hasil);

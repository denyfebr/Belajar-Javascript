function tambah(a, b) {
  return a + b;
}

let a, b;
a = parseInt(prompt('Masukkan nilai a = '));
b = parseInt(prompt('Masukkan nilai b = '));
let hasil = 0;
hasil = tambah(a, b);
console.log(hasil);
alert('Hasil = ' + hasil);

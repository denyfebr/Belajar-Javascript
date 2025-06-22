// menangkap pilihan player
let tanya = true;

while (tanya) {
  let p = prompt('pilih: gajah,semut,orang');

  // menangkap pilihan komputer
  // menggenerate bilangan random
  let comp = Math.random();

  if (comp < 0.34) {
    comp = 'gajah';
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
  } else {
    comp = 'semut';
  }

  console.log(comp);

  let hasil = '';
  // menentukan rules
  if (p == comp) {
    hasil = 'SERI';
  } else if (p == 'gajah') {
    hasil = comp == 'orang' ? 'MENANG' : 'KALAH';
  } else if (p == 'orang') {
    hasil = comp == 'gajah' ? 'KALAH' : 'MENANG';
  } else if (p == 'semut') {
    hasil = comp == 'gajah' ? 'MENANG' : 'KALAH';
  } else {
    hasil = 'YANG BENER LU MANUSIA';
  }

  // tampilkan hasilnya
  alert('Kamu memilih ' + p + ', Komputer pilih ' + comp + ' -> Kamu ' + hasil);

  tanya = confirm('Mau main lagi?');
}

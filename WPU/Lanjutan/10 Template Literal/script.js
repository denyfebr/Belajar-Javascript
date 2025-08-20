// Template Literal - Template String
const nama = 'Sandhika';
const umur = 33;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);

// Embedded Expressions
console.log(`${1 + 1}`);
console.log(`${alert('Halo!')}`);

const x = 17;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
const mhs = {
    nama: 'Sandhika Galih',
    umur: 33,
    nrp: '043040023',
    email: 'sandhikagalih@unpas.ac.id' 
};

const el = `<div class = "mhs">
    <h2>${mhs.nama}</h2>
    <span class="nrp">${mhs.nrp}</span>
<div>`;

console.log(el);
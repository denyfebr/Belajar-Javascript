// DOM Manipulation Node
// buat elemen baru
// document.createElement('p');
const pBaru = document.createElement('p');

// document.createTextNode('Paragraf Baru');
const teksPBaru = document.createTextNode('Paragraf Baru');

// simpan tulisan ke dalam paragraf
// pBaru.appendChild(teksPBaru);
pBaru.appendChild(teksPBaru);

// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');

liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru,li2);
ul.insertBefore(liBaru,li2);

// sectionA.removeChild();
const link = document.getElementsByTagName('a')[0];

// sectionA.removeChild(link);
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

// sectionB.replaceChild(h2Baru,p4);
sectionB.replaceChild(h2Baru,p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';

// method baru
// parentNode.append() // di akhir
// parentNode.prepend() // di awal
// childNode.before()
// childNode.after()
// childNode.remove()
// childNode.replaceWith()
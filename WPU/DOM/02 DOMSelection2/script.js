// document.querySelector() -> element

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah melalui javascript';
// hanya terseleksi element pertama kali yang dijumpai
// kalau ingin menyeleksi semua elemen p semua ya pakai querySelectorAll

// document.querySelectorAll() -> nodelist

// const p = document.querySelectorAll('p');

// p[0].innerHTML = 'Ini diubah melalui javascript';

// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = 'lightblue';
// }

// const p4 = document.getElementsByTagName('p');
// p4[3].style.backgroundColor = 'lightblue';

// const p4 = document.querySelectorAll('p');
// p4[3].style.backgroundColor = 'lightblue';

// cara lain dengan merubah scope dari noderoot nya

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'yellow';

const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'yellow';

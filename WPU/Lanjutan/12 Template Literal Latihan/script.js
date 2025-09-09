// 1. HTML Fragments
// const mhs = {
//     nama: 'Deny Febriyanto',
//     umur: 33,
//     nrp: '043040023',
//     email: 'denyfebri@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. Looping
// const suppliers = [
//     {
//         company: 'Karya Dewi Putra',
//         mill: 'Katingan Central'
//     },
//     {
//         company: 'Sawit Sumbermas Sarana',
//         mill: 'Kalimantan Sawit Abadi  '
//     },
//     {
//         company: 'CBIP',
//         mill: 'Berkala Maju Bersama'
//     }
// ];

// const el = `<div class="mhs">
//    ${suppliers.map(supplier => `<ul>
//         <li>${supplier.company}</li>
//         <li>${supplier.mill}</li>
//     </ul>`).join('')}
// </div>`;


// 3. Conditionals
// ternary

// const suppliers = {
//     company: 'Karya Dewi Putra',
//     mill: 'Katingan Central',
//     parent : 'CBIP'
// };

// const el = `<div class="supplier">
//     <ul>
//         <li>${suppliers.company}</li>
//         <li>${suppliers.mill} ${suppliers.parent ? `(parents. ${suppliers.parent})`:''}</li>
//     </ul>
// </div>`;

// 4. Nested
// HTML Fragments bersarang

const mhs = {
    nama: 'Karya Dewi Putra',
    semester: 5,
    mataKuliah : [
        'Rekayasa Web',
        'Analisis dan Perancangan Sistem Informasi',
        'Pemrograman Sistem Interaktif',
        'Perancangan Sistem Berorientasi Object'
    ]
}

function cetakMatakuliah(mataKuliah){
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester: ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMatakuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;

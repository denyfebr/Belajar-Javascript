// Spread Operator
// memecah iterables menjadi single element

// const mills = ['Kijang','Libo','Samsam'];
// console.log(...mills[0]);

// // Menggabungkan 2 atau lebih array
// const estate = ['Kebun Inti 1','Kebun Inti 2','Kebun Inti 3'];
// // Jika menggunakan spread operator, array lebih fleksibel
// // const orang = [...mills, ...dosen];
// const orang = [...mills, 'Aji', ...dosen];
// // const orang = mills.concat(dosen);
// console.log(orang);

// Meng-copy array
// const mills1 = mills; 
// hanya membuat refernsinya hanya menunjuk array induk apabila 
// ada perubahan di array hasil copyan, array induknya ikut berubah
// mills1[0] = 'Fajar';

// const mills1 = [...mills];
// mills1[0] = 'Fajar';
// console.log(mills1);
// console.log(mills);

// const liSupplier = document.querySelectorAll('li');

// const supplier = [];
// for(let i = 0; i < liSupplier.length; i++){
//     supplier.push(liSupplier[i].textContent)
// }
// console.log(supplier);

// high order function
// const mhs = [...liSupplier].map(m => m.textContent);
// console.log(mhs);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;

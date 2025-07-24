// setTimeout()

// const tes = setTimeout(function(){
//   console.log('Hello World!');
// }, 5000);

// const tombol = document.getElementById('tombol');

// tombol.addEventListener('click',function(){
//   clearTimeout(tes);
//   console.log('selesai');
// });

// ------------------------------
//setTimeout(tampilkanPesan, 5000);
// tampilkanPesan();

// function tampilkanPesan(){
//   console.log('Hello World!');
// }
// -------------------------------

// setInterval()
// const tes = setInterval(function(){
//   console.log('ok');
// }, 2000);

// const tombol = document.getElementById('tombol');

// tombol.addEventListener('click',function(){
//   clearInterval(tes);
//   console.log('selesai');
// });

// Program hitung mundur
const tanggalTujuan = new Date('Jul 25, 2025 01:00:00').getTime();

const hitungMundur = setInterval(function(){
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan-sekarang;

    const hari = Math.floor(selisih/(1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);

    const teks = document.getElementById('teks');
    teks.innerHTML = 'Gajian tinggal : '+ hari +' hari, '+ jam +' jam,'+menit+' menit,'+ detik +' detik';
    
    if(selisih == 0){
        clearInterval(hitungMundur);
        teks.innerHTML = 'Yeey gajian';
    }

}, 1000);


// console.log(sekarang);
// console.log(tanggalTujuan);
// console.log(selisih);

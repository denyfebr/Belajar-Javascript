// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
const jsLanjut = videos.filter((video) => video.textContent.includes('JAVASCRIPT LANJUTAN'));

// ambil durasi masing2 video

// ubah durasi menjadi int, ubah menit menjadi detik

// jumlahkan semua detik

// ubah formatnya jadi jam menit detik

// simpan di DOM

console.log(jsLanjut);

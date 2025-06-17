alert("Selamat datang!");
var lagi = true;

while (lagi === true) {
  var nama = prompt("Masukkan nama:");
  alert("Ooo kamu adalah " + nama);

  var lagi = confirm("Kamu mau nama yang lain " + nama + " ?");
}

alert("Terima kasih " + nama);

var angka = prompt('masukkan angka:');

if(angka % 2 == 0){
    alert(angka+' adalah bilangan GENAP');
}
else if(angka % 2 == 1){
    alert(angka+' adalah bilangan GANJIL');
}
else{
    alert('yang Anda masukkan bukan angka!')
}
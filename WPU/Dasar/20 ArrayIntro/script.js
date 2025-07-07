var binatang = [];
binatang = ['Kucing','Kelinci','Monyet','Panda', 'Koala', 'Sapi'];

console.log(binatang[4]);
console.log(binatang.length);

// elemen pada array boleh beda tipe
var myArr = ['teks',2,false];

var myFunc = function() {
  alert('Hello world!');
}

var myArr2 = ['teks',2,false,myFunc];
var myArr3 = ['teks',2,false,myFunc,[4,5,6]]; 

console.log(myArr3[4][1]);
// Manipulasi Array

// 1. Menambah isi array
//var arr = ["a",1,true];

// console.log(arr);
//console.log(arr[1]);

// var arr = [];
// arr[0]="Danisha";
// arr[1]="Gyandra";
// arr[2]="Maheswari";

// console.log(arr);

// 2. Menghapus isi array
// var arr = ["Danisha","Gyandra","Maheswari"];
// arr[1] = undefined;

// console.log(arr);

// 3.Menampilkan isi array

// var arr = ["Danisha","Gyandra","Maheswari","Deny"];

// for(var i=0;i<arr.length;i++){
//   console.log('Mahasiswa ke-'+(i+1)+' : '+arr[i]);
// }

// Array method
// 1. Join
var arr = ["Danisha","Gyandra","Maheswari","Deny"];

console.log(arr.join(' - '));

// 2. push, pop, shift, unshift
// push digunakan untuk menambah data pada elemen akhir array
arr.push('Doddy','Robby');
console.log(arr.join());

// pop mengahapus elemen akhir akan dihapus
arr.pop();
console.log(arr.join());
arr.pop();
console.log(arr.join());

//3. Unshift & Shift
//bekerja untuk elemen pertama
arr.unshift('Risca');
console.log(arr.join());

arr.shift()
console.log(arr.join());

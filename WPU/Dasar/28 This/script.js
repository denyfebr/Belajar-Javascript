console.log(this);

// membuat object

// cara 1 - function declaration
function halo(){
  console.log(this);
  console.log('halo');
}

this.halo();
// 'this' mengembalikan object Global

// cara 2 - object literal
var obj = {a: 10, nama:'Deny Febri'};
obj.halo = function(){
  console.log(this);
  console.log('halo');
}

obj.halo();
// 'this' mengembalikan object literal

// cara 3 - constructor
function Halo(){
  console.log(this);
  console.log('halo');
}

var obj1 = new Halo();
var obj2 = new Halo();
// 'this' mengembalikan object yang baru dibuat
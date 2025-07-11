// membuat Object
// - Object Literal
// - Function Declareation
// - Constructor Function (keyword new)
// - Object.create()

// - Object Literal
var mhs1 = {
  nama : "Deny Febriyanto",
  nrp : "18000036",
  email : "denyfebri@gmail.com",
  jurusan : "Teknik Informatika"
}

var mhs2 = {
  nama : "Risca Nurhayati",
  nrp : "18000037",
  email : "risca@gmail.com",
  jurusan : "Manajemen SDM"
}

// - Function Declaration
function buatObjectMahasiswa(nama,nrp,email,jurusan){
  
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs3 = buatObjectMahasiswa(
  'Danisha Gyandra Maheswari',
  '18000038',
  'danisha@gmail.com',
  'Kedokteran'
);

// - Constructor Function (keyword new)
function Mahasiswa(nama,nrp,email,jurusan){
  // var this = {};
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
  // return this;
}

var mhs4 = new Mahasiswa(
  'Ramadhan Gajayana',
  '18000039',
  'ramadan@gmail.com',
  'Teknik Mesin'
);
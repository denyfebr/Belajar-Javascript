// Pake JQuery
// $.ajax({
//   url: 'http://www.omdbapi.com/?i=tt3896198&apikey=e5d25b11&s=avengers',
//   success: movies => console.log(movies)
// })

// Pake vanila javascript
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//   if(xhr.status === 200){
//     if(xhr.readyState === 4){
//       console.log(JSON.parse(xhr.response));
//     }
//   }
//   else{
//     console.log(xhr.responseText);
//   }
// }

// xhr.open('get','http://www.omdbapi.com/?i=tt3896198&apikey=e5d25b11&s=avengers');
// xhr.send();

// Pake Promise - fetch
// const movies = fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e5d25b11&s=avengers')
//   .then(response => response.json())
//   .then(response => console.log(response));

// Promise
// Object yg merepresentasikan keberhasilan/kegagalan sebuah event yg asynchronous yg akan terjadi di masa yg akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)

// contoh 1
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if(ditepati){
//     resolve('Janji telah ditepati!');
//   }
//   else{
//     reject('Ingkar janji..');
//   }
// });

// // console.log(janji1);
// janji1
// .then(response => console.log('OK! : '+response))
// .catch(response => console.log('NOT OK! : '+response));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve,reject) => {
//   if(ditepati){
//     setTimeout(()=>{
//       resolve('Ditepati setelah beberapa waktu!');
//     },2000);
//   }else{
//     setTimeout(()=>{
//       resolve('Tidak ditepati setelah beberapa waktu!');
//     },2000);
//   }
// });

// console.log('mulai');

// bisa melihat status prosesnya
// console.log(janji2.then(()=>console.log(janji2)));

// janji2
// .finally(() => console.log('Selesai menuggu'))  
// .then(response => console.log('OK! : '+response))
// .catch(response => console.log('NOT OK! : '+response));

// console.log('selesai');

// Promise.all
const supplier = new Promise( resolve => {
  setTimeout(() => {
    resolve([{
      company:'Sampoerna Agro',
      mill: 'Sei Kijang',
      pic: 'Robert, Franz'
    }])
  },1000);
});

const refinery = new Promise( resolve => {
  setTimeout(() => {
    resolve([{
      country:'Indonesia',
      refinery: 'Tarahan',
      capacity: 12500
    }])
  },500);
});

// supplier.then(response => console.log(response));
// refinery.then(response => console.log(response));

// dijalankan 2
Promise.all([supplier,refinery])
// .then(response => console.log(response));
.then(response => {
  const [supplier,refinery] = response;
  console.log(supplier);
  console.log(refinery);
})

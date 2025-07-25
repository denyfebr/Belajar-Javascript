// Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click',function(){
//     card.style.display = 'none';
// });

// DOM Traversal
// Ambil semua tombol close
const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');

// for(let i=0;i<close.length;i++){
//     close[i].addEventListener('click',function(e){
//         // alert('tombol ke - '+i+' dipilih');

//         // card[i].style.display = 'none';

//         // close[i].parentElement.style.display = 'none';

//         // console.log(e.target);

//         e.target.parentElement.style.display = 'none';

//     });
// }

close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    });
});

const nama = document.querySelector('.nama');
console.log(nama);
console.log(nama.parentElement);
console.log(nama.parentNode);
console.log(nama.parentElement.parentElement);
console.log(nama.nextSibling);
console.log(nama.nextElementSibling);
console.log(nama.previousElementSibling);
console.log(nama.previousElementSibling.previousElementSibling);
console.log(nama.nextElementSibling.nextElementSibling);
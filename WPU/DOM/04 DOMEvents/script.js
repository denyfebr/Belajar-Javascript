// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');

// function ubahWarnaP3(){
//     p3.style.backgroundColor = 'orange';
// }

// const p3 = document.querySelector('.p3');
// p3.onclick = ubahWarnaP3;

// // addEventListener
// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click',function(){
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('item baru');
    
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });

const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
//     p3.style.color = 'red';
// }

// p3.onclick = function(){
//     p3.style.color = 'red';
// }

p3.addEventListener('mouseenter',function(){
    p3.style.backgroundColor = 'red';
    p3.style.color = 'white';
});

p3.addEventListener('mouseleave',function(){
     p3.style.backgroundColor = 'lightgreen';
    p3.style.color = 'black';
});

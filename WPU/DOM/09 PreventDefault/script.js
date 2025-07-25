// DOM Traversal
// Ambil semua tombol close
const close = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');

close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    });
});


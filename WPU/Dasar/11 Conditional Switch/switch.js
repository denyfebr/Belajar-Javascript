var item = prompt('masukkan nama makanan/minuman : \n (contoh: nasi, daging, susu, hamburger, softdrink)');

// switch(item){
//     case 'nasi':
//         alert('makanan/minuman SEHAT!');
//         break;
//     case 'daging':
//         alert('makanan/minuman SEHAT!');
//         break;
//     case 'susu':
//         alert('makanan/minuman SEHAT!');
//         break;
//     case 'hamburger':
//         alert('makanan/minuman TIDAK SEHAT!');
//         break;
//     case 'softdrink':
//         alert('makanan/minuman TIDAK SEHAT!');
//         break;
//     default:
//         alert('Anda memasukkan nama makan/minuman salah');
//         break;
// }

switch(item){
    case 'nasi':       
    case 'daging':       
    case 'susu':
        alert('makanan/minuman SEHAT!');
        break;
    case 'hamburger':      
    case 'softdrink':
        alert('makanan/minuman TIDAK SEHAT!');
        break;
    default:
        alert('Anda memasukkan nama makan/minuman salah');
        break;
}
